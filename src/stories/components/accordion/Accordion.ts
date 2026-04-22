import { tv } from 'tailwind-variants';

import { formatHtml } from '@/utils/code-format';

export interface AccordionItem {
  title: string;
  description: string;
  icon?: string;
  defaultOpen?: boolean;
}

export interface AccordionProps {
  withIcon?: boolean;
  outline?: boolean;
  elevated?: boolean;
  content?: AccordionItem[];
  toggleIcon?: 'chevron-down' | 'arrow-down' | 'arrow-down-circle';
}

const toggleIcons: Record<string, string> = {
  'chevron-down': 'ri-arrow-down-line',
  'arrow-down': 'ri-arrow-down-s-line',
  'arrow-down-circle': 'ri-arrow-down-circle-line',
};

const accordionClassNames = tv({
  slots: {
    base: 'w-full divide-y rounded divide-slate-200 text-slate-700 group-hover:text-slate-900',
    itemBase: 'p-4 group',
    head: '[&::-webkit-details-marker]:hidden relative pr-8 font-medium list-none cursor-pointer focus-visible:outline-none transition-colors duration-300',
    body: 'mt-4 text-slate-500 transition duration-300',
    leadIcon: 'text-2xl text-primary-800',
    trailIcon: 'absolute right-0 text-xl transition duration-300 top-1 shrink-0 group-open:rotate-180',
  },
  variants: {
    icon: {
      true: {
        head: 'flex items-center gap-3',
      },
    },
    outline: {
      true: {
        base: 'border border-slate-200',
      },
    },
    elevated: {
      true: {
        base: 'shadow-lg',
      },
    },
  },
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createAccordion = ({ withIcon = false, outline = false, elevated = false, content = [], toggleIcon = 'arrow-down' }: AccordionProps): string => {
  const { base, itemBase, head, body, leadIcon, trailIcon } = accordionClassNames({
    icon: withIcon,
    outline,
    elevated,
  });

  const items = content
    .map((item) => {
      const escapedTitle = escapeHtml(item.title);
      const escapedDesc = escapeHtml(item.description);
      const isOpen = item.defaultOpen ? 'open' : '';
      const iconHtml = withIcon && item.icon ? `<i class="${item.icon} ${leadIcon()}"></i>` : '';
      const trailIconClass = toggleIcons[toggleIcon] || toggleIcons['arrow-down'];

      return `
<details class="${itemBase()}" ${isOpen}>
  <summary class="${head()}">
    ${iconHtml}
    ${escapedTitle}
    <i class="${trailIconClass} ${trailIcon()}"></i>
  </summary>
  <div class="${body()}">
    <p>${escapedDesc}</p>
  </div>
</details>`;
    })
    .join('');

  return formatHtml(`
<section class="${base()}">
  ${items}
</section>
`);
};
