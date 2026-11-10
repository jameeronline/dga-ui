import { tv } from 'tailwind-variants';

import type { ButtonColorVariant, DropdownVariant } from '@/types/index';
import { createButton } from '@/stories/components/button/Button';
import { formatHtml } from '@/utils/code-format';

export interface DropdownItem {
  title: string;
  description?: string;
  icon?: string;
}

export interface DropdownProps {
  label?: string;
  menuItems?: DropdownItem[];
  variant?: DropdownVariant;
  withIcon?: boolean;
  withDescription?: boolean;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Used to keep popover ids unique when several dropdowns share a page.
let dropdownIdCounter = 0;

const dropdownClassNames = tv({
  slots: {
    base: 'inline-flex',
    // The menu is a popover placed in the top layer. It uses the button as its
    // implicit anchor (via popovertarget) and CSS anchor positioning to sit
    // directly below it, flipping above when there is not enough space.
    menuEl:
      'fixed z-20 m-0 mt-1 w-72 list-none flex-col overflow-y-auto rounded border-0 bg-white px-0 py-2 shadow-md shadow-slate-500/10 open:flex [inset:auto] [top:anchor(bottom)] [left:anchor(left)] [position-anchor:auto] [position-try-fallbacks:flip-block]',
    menuItemEl: 'flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 focus:outline-none focus-visible:outline-none',
    leadIcon: '',
  },
  variants: {
    variant: {
      primary: {
        menuItemEl: 'hover:bg-primary-50 hover:text-primary-800 focus:bg-primary-50 focus:text-primary-900',
      },
      secondary: {
        menuItemEl: 'hover:bg-secondary-50 hover:text-secondary-500 focus:bg-secondary-50 focus:text-secondary-600',
      },
      tertiary: {
        menuItemEl: 'hover:bg-tertiary-50 hover:text-tertiary-500 focus:bg-tertiary-50 focus:text-tertiary-700',
      },
      danger: {
        menuItemEl: 'hover:bg-danger-50 hover:text-danger-500 focus:bg-danger-50 focus:text-danger-700',
      },
      success: {
        menuItemEl: 'hover:bg-success-50 hover:text-success-500 focus:bg-success-50 focus:text-success-700',
      },
      info: {
        menuItemEl: 'hover:bg-info-50 hover:text-info-500 focus:bg-info-50 focus:text-info-700',
      },
      warning: {
        menuItemEl: 'hover:bg-warning-50 hover:text-warning-500 focus:bg-warning-50 focus:text-warning-700',
      },
    },
  },
});

// Dropdown variants map 1:1 to the Button component's color variants.
const variantToButtonType: Record<DropdownVariant, ButtonColorVariant> = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
  success: 'success',
  info: 'info',
  warning: 'warning',
};

export const createDropdown = ({
  label = 'Dropdown Menu',
  menuItems = [],
  variant = 'primary',
  withIcon = true,
  withDescription = true,
}: DropdownProps): string => {
  const { base, menuEl, menuItemEl, leadIcon } = dropdownClassNames({
    variant: variant,
  });

  const dropdownId = `dropdown-${++dropdownIdCounter}`;
  const buttonType = variantToButtonType[variant];

  // Render the trigger using the shared Button component so it is a native,
  // keyboard-focusable <button> with consistent button styling.
  let triggerHtml = createButton({
    label,
    type: buttonType,
    size: 'large',
    icon: true,
    iconName: 'hgi hgi-stroke hgi-rounded hgi-arrow-down-01',
    iconPosition: 'right',
    htmlType: 'button',
  });

  // Add the popovertarget attribute so the button opens the popover menu.
  triggerHtml = triggerHtml.replace('<button ', `<button popovertarget="${dropdownId}" `);

  const menuItemsHtml = menuItems
    .map((item) => {
      const escapedTitle = escapeHtml(item.title);
      const escapedDescription = item.description ? escapeHtml(item.description) : '';
      // item.icon is expected to be a full icon class (e.g. 'ri-arrow-right-line')
      const itemIcon = withIcon && item.icon ? `<i class="${item.icon} ${leadIcon()}"></i>` : '';
      const descriptionHtml = withDescription && item.description ? `<span class="text-sm whitespace-normal opacity-70">${escapedDescription}</span>` : '';

      return `
        <li><a class="${menuItemEl()}" href="javascript: void(0)">
          ${itemIcon}
          <span class="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
            <span class="leading-5 truncate">${escapedTitle}</span>
            ${descriptionHtml}
          </span>
        </a></li>
      `;
    })
    .join('');

  return formatHtml(`
    <div class="${base()}">
      ${triggerHtml}
      <ul id="${dropdownId}" popover class="${menuEl()}">
        ${menuItemsHtml}
      </ul>
    </div>
  `);
};
