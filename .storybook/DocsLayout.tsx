import React from 'react';
import { useOf, Title, Subtitle, Description, Canvas, Controls, Stories, Primary } from '@storybook/addon-docs/blocks';

interface HeadingNode {
  id: string;
  label: string;
  level: number;
  el?: HTMLElement | null;
  children: HeadingNode[];
}

interface DocsLayoutProps {
  guidelines?: React.ReactNode;
  accessibility?: React.ReactNode;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export const DocsLayout = (props: DocsLayoutProps) => {
  const meta = useOf('meta');
  const docsParams = meta?.parameters?.docs || {};

  const guidelines = props.guidelines || docsParams.guidelines;
  const accessibility = props.accessibility || docsParams.accessibility;

  const contentRef = React.useRef<HTMLDivElement>(null);
  const [headingsTree, setHeadingsTree] = React.useState<HeadingNode[]>([]);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const lastClickedRef = React.useRef<{ id: string; time: number } | null>(null);

  const buildTree = (items: { id: string; label: string; level: number; el?: HTMLElement | null }[]) => {
    const root: HeadingNode[] = [];
    const stack: HeadingNode[] = [];

    for (const item of items) {
      const node: HeadingNode = { id: item.id, label: item.label, level: item.level, el: item.el ?? null, children: [] };
      while (stack.length > 0 && stack[stack.length - 1].level >= node.level) stack.pop();
      if (stack.length === 0) root.push(node);
      else stack[stack.length - 1].children.push(node);
      stack.push(node);
    }

    return root;
  };

  // Dynamic heading scanner with id generation, dedupe and nested tree
  // Run a single delayed scan when the component mounts so Storybook can finish
  // rendering and assign any internal heading ids first. This avoids mismatches
  // between heading ids present in the document and those generated for the TOC.
  React.useEffect(() => {
    const scanHeadings = () => {
      if (!contentRef.current) return;

      const headingElements = contentRef.current.querySelectorAll('h2:not(.sb-story h2),h3:not(.sb-story h3, aside h3),h4:not(.sb-story h4),h5:not(.sb-story h5),h6:not(.sb-story h6)');
      const used = new Set<string>();
      const items: { id: string; label: string; level: number; el?: HTMLElement | null }[] = [];

      headingElements.forEach((el) => {
        const element = el as HTMLElement;
        const text = (element.textContent || '').trim();
        if (!text) return;
        const level = parseInt(element.tagName.charAt(1), 10) || 2;

        // Generate internal id but do NOT mutate the DOM. We'll keep a reference
        // to the element and rely on that for scrolling to avoid mismatch.
        let id = slugify(text) || `heading-${Math.random().toString(36).slice(2, 8)}`;

        const base = id;
        let suffix = 1;
        while (used.has(id)) id = `${base}-${suffix++}`;
        used.add(id);

        items.push({ id, label: text, level, el: element });
      });

      const tree = buildTree(items);
      setHeadingsTree(tree);
    };

    // Delay the single scan slightly to allow Storybook/addon-docs to render
    // and assign its own ids (if any). This prevents id mismatches.
    const timeout = window.setTimeout(scanHeadings, 200);
    return () => window.clearTimeout(timeout);
  }, []);

  // Scrollspy: update active heading while scrolling
  React.useEffect(() => {
    // Use IntersectionObserver for precise scrollspy behavior.
    if (!headingsTree || headingsTree.length === 0) {
      setActiveId(null);
      return;
    }

    const flatten = (nodes: HeadingNode[]): HeadingNode[] => {
      const out: HeadingNode[] = [];
      nodes.forEach((n) => {
        out.push(n);
        if (n.children && n.children.length) out.push(...flatten(n.children));
      });
      return out;
    };

    const nodes = flatten(headingsTree).filter((n) => !!n.el) as HeadingNode[];
    if (nodes.length === 0) {
      setActiveId(null);
      return;
    }

    const ratios = new Map<string, number>();

    const SUPPRESS_MS = 500; // duration to prefer clicked item over observer

    const observer = new IntersectionObserver(
      (entries) => {
        // if a user recently clicked a TOC link, prefer that id until suppression ends
        if (lastClickedRef.current && Date.now() - lastClickedRef.current.time < SUPPRESS_MS) {
          setActiveId(lastClickedRef.current.id);
          return;
        }

        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).getAttribute('data-dga-toc-id') || '';
          ratios.set(id, entry.intersectionRatio);
        });

        // pick the node with highest intersection ratio
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const n of nodes) {
          const r = ratios.get(n.id) || 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = n.id;
          }
        }
        if (bestId) setActiveId((prev) => (prev === bestId ? prev : bestId));
      },
      {
        root: null,
        // Trigger when heading is near top; adjust offset to match layout
        rootMargin: '-120px 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    nodes.forEach((n) => {
      // mark element with internal id for observer callbacks
      try {
        if (n.el) n.el.setAttribute('data-dga-toc-id', n.id);
      } catch {
        // ignore
      }
      if (n.el) observer.observe(n.el);
    });

    return () => {
      observer.disconnect();
      // cleanup attributes
      nodes.forEach((n) => {
        try {
          if (n.el) n.el.removeAttribute('data-dga-toc-id');
        } catch {
          // ignore
        }
      });
    };
  }, [headingsTree]);

  // Recursive renderer for nested headings
  const renderTree = (nodes: HeadingNode[]) => {
    if (!nodes || nodes.length === 0) return null;
    return (
      <ul className="space-y-2">
        {nodes.map((node) => {
          const isActive = activeId === node.id;
          const baseIndent = node.level >= 3 ? 'ml-4' : node.level === 1 ? 'ml-0' : 'ml-2';
          return (
            <li key={node.id} className={baseIndent}>
              <a
                href={`#${node.id}`}
                className={`block text-sm leading-tight py-1 px-2 rounded ${isActive ? 'bg-blue-50 text-primary font-medium' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'}`}
                aria-current={isActive ? 'true' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  const el = node.el;
                  if (!el) return;
                  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                  el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
                  try {
                    if (history && history.replaceState) history.replaceState(null, '', `#${node.id}`);
                  } catch {
                    // ignore
                  }
                  // mark last clicked so observer doesn't immediately override
                  lastClickedRef.current = { id: node.id, time: Date.now() };
                  setActiveId(node.id);
                }}
              >
                {node.label}
              </a>
              {node.children && node.children.length > 0 && renderTree(node.children)}
            </li>
          );
        })}
      </ul>
    );
  };
  
  return (
    <div ref={contentRef} className="custom-docs font-ibm-plex-sans grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Sidebar - Dynamic Table of Contents */}
      <aside className="w-64 pl-6 sticky top-6 max-h-[calc(100vh-2rem)] overflow-y-auto order-2">
        <div className="bg-white border border-slate-200 rounded-md overflow-hidden">
          <h3 className="text-sm font-semibold mb-3 text-slate-800 bg-gray-50 p-4 border-b border-b-gray-200">On this page</h3>
          <nav aria-label="On this page" className='p-4'>
            {renderTree(headingsTree)}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="col-span-1 md:col-span-3">
        {/* Header Section */}
        <header className="prose prose-slate prose-h1:font-bold prose-h1:text-4xl prose-p:text-lg max-w-none mb-10">
          <div className="not-prose">
            <Title />
          </div>
          <div className="not-prose">
            <Subtitle />
          </div>
          <div className="not-prose">
            <Description />
          </div>
        </header>

        <main className="flex flex-col gap-10">
          {/* Main Component Preview */}
          <section id="primary-preview">
            <h2 id="primary-preview" className="sr-only">Interactive Preview</h2>
            <Canvas className="border-0 my-custom-canvas shadow-sm rounded-lg mt-0" withToolbar={true}>
              <Primary />
            </Canvas>
          </section>

          {/* Props and Controls */}
          <section id="props-controls">
            <h2 id="props-controls" className="text-2xl font-bold mb-2">Props & Controls</h2>
            <Controls className="rounded-lg" />
          </section>

          {/* Usage Guidelines */}
          {guidelines && (
            <section id="usage-guidelines">
              <h2 id="usage-guidelines" className="text-2xl font-bold mb-2">Usage Guidelines</h2>
              <div className="prose prose-slate max-w-none bg-slate-50 p-6 rounded-lg border border-slate-100">
                {guidelines}
              </div>
            </section>
          )}

          {/* Accessibility Information */}
          {accessibility && (
            <section id="accessibility-info">
              <h2 id="accessibility-info" className="text-2xl font-bold mb-2">Accessibility</h2>
              <div className="prose prose-slate max-w-none bg-blue-50 p-6 rounded-lg border border-blue-100">
                {accessibility}
              </div>
            </section>
          )}

          {/* Alternative Variants */}
          <section id="component-variants">
            <h2 id="component-variants" className="text-2xl font-bold mb-2">Variants</h2>
            <p className="text-slate-600 mb-6">Explore alternative states and configurations for this component.</p>
            <Stories title={null} includePrimary={false} />
          </section>
        </main>
      </div>
    </div>
  );
};
