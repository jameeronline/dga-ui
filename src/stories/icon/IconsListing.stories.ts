import type { Meta, StoryObj } from '@storybook/html-vite';
import { icons } from '@/icons/icons.generated';

const meta: Meta = {
  title: 'Icon/Icons Listing',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Browse and search all available icons in the library. Hover over icons to see copy and download options.',
      },
    },
  },
};

export default meta;
type Story = StoryObj;

function createIconsListing() {
  const container = document.createElement('div');
  container.style.cssText = 'padding: 20px; font-family: system-ui, sans-serif;';

  const header = document.createElement('div');
  header.style.cssText = 'margin-bottom: 20px;';
  header.innerHTML = `
    <h1 style="font-size: 24px; font-weight: 600; margin-bottom: 8px;">Icons Library</h1>
    <p style="color: #6b7280; margin-bottom: 16px;">
      Browse and download icons from our curated remixicon collection.
      <a href="https://remixicon.com" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; margin-left: 4px;">
        View full remixicon library →
      </a>
    </p>
    <input
      type="text"
      placeholder="Search icons..."
      id="icon-search"
      style="width: 100%; max-width: 300px; padding: 8px 12px; border: 1px solid #e5e7eb; border-radius: 6px; font-size: 14px;"
    />
  `;
  container.appendChild(header);

  const grid = document.createElement('div');
  grid.id = 'icons-grid';
  grid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px;';
  container.appendChild(grid);

  const renderIcons = (filter = '') => {
    grid.innerHTML = '';
    const filtered = icons.filter((icon) => icon.name.toLowerCase().includes(filter.toLowerCase()));

    filtered.forEach((icon) => {
      const item = document.createElement('div');
      item.style.cssText =
        'display: flex; flex-direction: column; align-items: center; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; background: white; transition: all 0.2s; cursor: pointer; position: relative;';
      item.dataset.name = icon.name;
      item.dataset.svg = icon.svg;

      item.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center;">${createIconSpan(icon.name, 28)}</div>
        <span style="margin-top: 8px; font-size: 12px; color: #374151; font-weight: 500;">${icon.name}</span>
        <span style="font-size: 10px; color: #9ca3af; margin-top: 2px;">${icon.category}</span>
      `;

      item.addEventListener('mouseenter', () => {
        item.style.background = '#f9fafb';
        showActions(item, icon.name, icon.svg);
      });
      item.addEventListener('mouseleave', () => {
        item.style.background = 'white';
        hideActions(item);
      });

      grid.appendChild(item);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="text-align: center; padding: 40px; color: #6b7280;">No icons found matching "${filter}"</div>`;
    }
  };

  function createIconSpan(name: string, size: number): string {
    const svg = icons.find((i) => i.name === name)?.svg || '';
    return `<span style="width: ${size}px; height: ${size}px; color: currentColor; display: inline-flex; align-items: center; justify-content: center;">${svg}</span>`;
  }

  function showActions(item: HTMLElement, name: string, svg: string) {
    const existing = item.querySelector('.icon-actions');
    if (existing) {
      (existing as HTMLElement).style.opacity = '1';
      (existing as HTMLElement).style.pointerEvents = 'auto';
      return;
    }

    const actions = document.createElement('div');
    actions.className = 'icon-actions';
    actions.style.cssText = 'display: flex; gap: 4px; margin-top: 8px; opacity: 0; pointer-events: none; transition: opacity 0.2s;';

    const copyNameBtn = document.createElement('button');
    copyNameBtn.textContent = 'Copy Name';
    copyNameBtn.style.cssText = 'padding: 4px 8px; font-size: 10px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 4px; cursor: pointer;';
    copyNameBtn.onclick = () => copyToClipboard(name, 'Name copied!');

    const copySvgBtn = document.createElement('button');
    copySvgBtn.textContent = 'Copy SVG';
    copySvgBtn.style.cssText = 'padding: 4px 8px; font-size: 10px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 4px; cursor: pointer;';
    copySvgBtn.onclick = () => copyToClipboard(svg, 'SVG copied!');

    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'Download';
    downloadBtn.style.cssText = 'padding: 4px 8px; font-size: 10px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 4px; cursor: pointer;';
    downloadBtn.onclick = () => downloadSvg(name, svg);

    actions.appendChild(copyNameBtn);
    actions.appendChild(copySvgBtn);
    actions.appendChild(downloadBtn);
    item.appendChild(actions);

    setTimeout(() => {
      actions.style.opacity = '1';
      actions.style.pointerEvents = 'auto';
    }, 10);
  }

  function hideActions(item: HTMLElement) {
    const actions = item.querySelector('.icon-actions') as HTMLElement;
    if (actions) {
      actions.style.opacity = '0';
      actions.style.pointerEvents = 'none';
    }
  }

  function copyToClipboard(text: string, message: string) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message);
    });
  }

  function downloadSvg(name: string, svg: string) {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name}.svg`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('SVG downloaded!');
  }

  function showToast(message: string) {
    const existing = document.querySelector('.icon-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'icon-toast';
    toast.textContent = message;
    toast.style.cssText =
      'position: fixed; bottom: 20px; right: 20px; background: #1f2937; color: white; padding: 8px 16px; border-radius: 6px; font-size: 14px; z-index: 9999;';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  }

  const searchInput = container.querySelector('#icon-search') as HTMLInputElement;
  searchInput.addEventListener('input', (e) => {
    renderIcons((e.target as HTMLInputElement).value);
  });

  renderIcons();

  return container;
}

export const Default: Story = {
  render: () => createIconsListing(),
};
