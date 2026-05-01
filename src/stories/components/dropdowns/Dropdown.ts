import { tv } from 'tailwind-variants';

import type { DropdownVariant } from '@/types/index';
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

const dropdownClassNames = tv({
  slots: {
    base: 'relative inline-flex',
    buttonEl:
      'inline-flex items-center justify-center h-12 gap-2 px-5 text-md font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:shadow-none',
    menuEl: 'absolute z-20 flex flex-col py-2 mt-1 list-none bg-white rounded shadow-md w-72 top-full shadow-slate-500/10',
    menuItemEl: 'flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 focus:outline-none focus-visible:outline-none',
  },
  variants: {
    variant: {
      primary: {
        buttonEl: 'text-white bg-primary-800 hover:bg-primary-900 focus:bg-primary-950 disabled:border-primary-300 disabled:bg-primary-300',
        menuItemEl: 'hover:bg-primary-50 hover:text-primary-800 focus:bg-primary-50 focus:text-primary-900',
      },
      secondary: {
        buttonEl: 'text-white bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 disabled:border-secondary-300 disabled:bg-secondary-300',
        menuItemEl: 'hover:bg-secondary-50 hover:text-secondary-500 focus:bg-secondary-50 focus:text-secondary-600',
      },
      tertiary: {
        buttonEl: 'text-white bg-tertiary-500 hover:bg-tertiary-600 focus:bg-tertiary-700 disabled:border-tertiary-300 disabled:bg-tertiary-300',
        menuItemEl: 'hover:bg-tertiary-50 hover:text-tertiary-500 focus:bg-tertiary-50 focus:text-tertiary-700',
      },
      danger: {
        buttonEl: 'text-white bg-danger-500 hover:bg-danger-600 focus:bg-danger-700 disabled:border-danger-300 disabled:bg-danger-300',
        menuItemEl: 'hover:bg-danger-50 hover:text-danger-500 focus:bg-danger-50 focus:text-danger-700',
      },
      success: {
        buttonEl: 'text-white bg-success-500 hover:bg-success-600 focus:bg-success-700 disabled:border-success-300 disabled:bg-success-300',
        menuItemEl: 'hover:bg-success-50 hover:text-success-500 focus:bg-success-50 focus:text-success-700',
      },
      info: {
        buttonEl: 'text-white bg-info-500 hover:bg-info-600 focus:bg-info-700 disabled:border-info-300 disabled:bg-info-300',
        menuItemEl: 'hover:bg-info-50 hover:text-info-500 focus:bg-info-50 focus:text-info-700',
      },
      warning: {
        buttonEl: 'text-white bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 disabled:border-warning-300 disabled:bg-warning-300',
        menuItemEl: 'hover:bg-warning-50 hover:text-warning-500 focus:bg-warning-50 focus:text-warning-700',
      },
    },
  },
});

export const createDropdown = ({
  label = 'Choose One',
  menuItems = [],
  variant = 'primary',
  withIcon = true,
  withDescription = true,
}: DropdownProps): string => {
  const { base, buttonEl, menuEl, menuItemEl } = dropdownClassNames({
    variant: variant,
  });

  const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`;
  const escapedLabel = escapeHtml(label);

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
      <button data-dropdown-toggle="${dropdownId}" class="${buttonEl()}">
        <span>${escapedLabel}</span>
        <span class="relative only:-mx-5">
          <i class="ri-arrow-down-line text-xl"></i>
        </span>
      </button>
      <ul data-dropdown-menu="${dropdownId}" class="${menuEl()}">
        ${menuItemsHtml}
      </ul>
    </div>
  `);
};
