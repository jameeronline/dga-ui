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
    base: 'w-full divide-y divide-natural-200 rounded-xl bg-white overflow-hidden',
    itemBase: 'p-4 group hover:bg-natural-50 transition-colors duration-200',
    head: '[&::-webkit-details-marker]:hidden flex items-center justify-between relative font-medium text-natural-900 cursor-pointer focus-visible:outline-none focus-ring-outline transition-colors duration-200',
    body: 'pt-3 text-natural-500 transition duration-300',
    leadIcon: 'text-2xl text-primary-foreground shrink-0',
    trailIcon: 'relative right-0 text-xl text-natural-400 transition duration-300 top-0.5 shrink-0 group-open:rotate-180 group-open:text-primary-foreground',
  },
  variants: {
    icon: {
      true: {
        head: 'flex items-center gap-3',
      },
    },
    outline: {
      true: {
        base: 'border border-natural-200',
      },
    },
    elevated: {
      true: {
        base: 'shadow-md',
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
      const ariaExpanded = item.defaultOpen ? 'true' : 'false';

      return `
<details class="${itemBase()}" ${isOpen}>
  <summary class="${head()}" aria-expanded="${ariaExpanded}">
    <span class="flex items-center gap-3">
      ${iconHtml}
      ${escapedTitle}
    </span>
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
