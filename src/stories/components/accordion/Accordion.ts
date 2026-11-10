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
  'chevron-down': 'hgi hgi-stroke hgi-rounded hgi-arrow-down-01',
  'arrow-down': 'hgi hgi-stroke hgi-rounded hgi-arrow-down-02',
  'arrow-down-circle': 'hgi hgi-stroke hgi-rounded hgi-circle-arrow-down-02',
};

const accordionClassNames = tv({
  slots: {
    base: 'w-full divide-y rounded divide-gray-300 bg-white',
    itemBase: 'group',
    head: '[&::-webkit-details-marker]:hidden flex justify-between items-center gap-4 relative h-15 px-4 text-text-default font-medium list-none cursor-pointer hover:bg-gray-100 focus-ring-outline transition-colors duration-300',
    body: 'p-4 text-slate-500 transition duration-300',
    leadIcon: 'text-2xl text-icon-brand',
    trailIcon: 'relative right-0 text-xl transition duration-300 top-1 shrink-0 group-open:rotate-180',
  },
  variants: {
    icon: {
      true: {
        head: 'flex items-center gap-3',
      },
    },
    // outline: {
    //   true: {
    //     base: 'border border-slate-200',
    //   },
    // },
    // elevated: {
    //   true: {
    //     base: 'shadow-lg',
    //   },
    // },
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
      <!-- Accordion item -->
<details class="${itemBase()}" ${isOpen}>
<!-- Accordion Header -->
  <summary class="${head()}">
    <span class="flex items-center gap-3">
      ${iconHtml}
      ${escapedTitle}
    </span>
    <i class="${trailIconClass} ${trailIcon()}"></i>
  </summary>
  <!-- Accordion Body -->
  <div class="${body()}">
    <p>${escapedDesc}</p>
  </div>
</details>`;
    })
    .join('');

  return formatHtml(`
    <!-- Accordion Group -->
<section class="${base()}">
  ${items}
</section>
`);
};
