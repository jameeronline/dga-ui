import { tv } from 'tailwind-variants';

import type { ButtonColorVariant, ButtonSizeVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface ButtonProps {
  label?: string;
  type?: ButtonColorVariant;
  size?: ButtonSizeVariant;
  disabled?: boolean;
  rounded?: boolean;
  outline?: boolean;
  link?: boolean;
  icon?: boolean;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  iconOnly?: boolean;
  full?: boolean;
  as?: 'button' | 'input' | 'a';
  href?: string;
}

const buttonClassNames = tv({
  base: `inline-flex items-center justify-center gap-2 font-medium tracking-wide transition duration-300 focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:pointer-events-none disabled:select-none focus-visible:ring-2 focus-visible:ring-offset-2`,
  variants: {
    type: {
      primary: 'bg-primary-800 hover:bg-primary-900 focus-visible:ring-primary-400 text-white',
      secondary: 'bg-secondary-800 hover:bg-secondary-900 focus-visible:ring-secondary-400 text-white',
      tertiary: 'bg-tertiary-500 hover:bg-tertiary-600 focus-visible:ring-tertiary-400 text-white',
      danger: 'bg-danger-600 hover:bg-danger-700 focus-visible:ring-danger-400 text-white',
      success: 'bg-success-600 hover:bg-success-700 focus-visible:ring-success-400 text-white',
      info: 'bg-info-600 hover:bg-info-700 focus-visible:ring-info-400 text-white',
      warning: 'bg-warning-500 hover:bg-warning-600 focus-visible:ring-warning-400 text-white',
      light: 'bg-gray-200 hover:bg-gray-300 focus-visible:ring-gray-400 text-gray-700',
      dark: 'bg-gray-800 hover:bg-gray-900 focus-visible:ring-gray-400 text-white',
    },
    size: {
      xl: 'h-16 px-24 text-xl',
      large: 'h-12 px-16 text-base',
      medium: 'h-10 px-8 text-sm',
      small: 'h-8 px-4 text-xs',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md',
    },
    outline: {
      true: '',
    },
    link: {
      true: '',
    },
    iconOnly: {
      true: '',
    },
    full: {
      true: 'w-full',
    },
    disabled: {
      true: '',
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      outline: true,
      class: 'bg-transparent border border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white',
    },
    {
      type: 'secondary',
      outline: true,
      class: 'bg-transparent border border-secondary-800 text-secondary-800 hover:bg-secondary-800 hover:text-white',
    },
    {
      type: 'tertiary',
      outline: true,
      class: 'bg-transparent border border-tertiary-500 text-tertiary-500 hover:bg-tertiary-500 hover:text-white',
    },
    {
      type: 'danger',
      outline: true,
      class: 'bg-transparent border border-danger-600 text-danger-600 hover:bg-danger-600 hover:text-white',
    },
    {
      type: 'success',
      outline: true,
      class: 'bg-transparent border border-success-600 text-success-600 hover:bg-success-600 hover:text-white',
    },
    {
      type: 'info',
      outline: true,
      class: 'bg-transparent border border-info-600 text-info-600 hover:bg-info-600 hover:text-white',
    },
    {
      type: 'warning',
      outline: true,
      class: 'bg-transparent border border-warning-500 text-warning-500 hover:bg-warning-500 hover:text-white',
    },
    {
      type: 'light',
      outline: true,
      class: 'bg-transparent border border-gray-300 text-gray-600 hover:bg-gray-200 hover:text-gray-800',
    },
    {
      type: 'dark',
      outline: true,
      class: 'bg-transparent border border-gray-700 text-gray-700 hover:bg-gray-800 hover:text-white',
    },
    {
      type: 'primary',
      link: true,
      class: 'bg-transparent hover:bg-primary-100 text-primary-800 hover:text-primary-900 underline',
    },
    {
      type: 'secondary',
      link: true,
      class: 'bg-transparent hover:bg-secondary-100 text-secondary-800 hover:text-secondary-900 underline',
    },
    {
      type: 'tertiary',
      link: true,
      class: 'bg-transparent hover:bg-tertiary-100 text-tertiary-500 hover:text-tertiary-600 underline',
    },
    {
      type: 'danger',
      link: true,
      class: 'bg-transparent hover:bg-danger-100 text-danger-600 hover:text-danger-700 underline',
    },
    {
      type: 'success',
      link: true,
      class: 'bg-transparent hover:bg-success-100 text-success-600 hover:text-success-700 underline',
    },
    {
      type: 'info',
      link: true,
      class: 'bg-transparent hover:bg-info-100 text-info-600 hover:text-info-700 underline',
    },
    {
      type: 'warning',
      link: true,
      class: 'bg-transparent hover:bg-warning-100 text-warning-500 hover:text-warning-600 underline',
    },
    {
      type: 'light',
      link: true,
      class: 'bg-transparent hover:bg-gray-200 text-gray-600 hover:text-gray-700 underline',
    },
    {
      type: 'dark',
      link: true,
      class: 'bg-transparent hover:bg-gray-700 text-gray-800 hover:text-white underline',
    },
    {
      size: 'xl',
      iconOnly: true,
      class: 'w-16 p-0',
    },
    {
      size: 'large',
      iconOnly: true,
      class: 'w-12 p-0',
    },
    {
      size: 'medium',
      iconOnly: true,
      class: 'w-10 p-0',
    },
    {
      size: 'small',
      iconOnly: true,
      class: 'w-8 p-0',
    },
    {
      disabled: true,
      type: 'primary',
      class: 'disabled:bg-primary-300',
    },
    {
      disabled: true,
      type: 'secondary',
      class: 'disabled:bg-secondary-300',
    },
    {
      disabled: true,
      type: 'tertiary',
      class: 'disabled:bg-tertiary-300',
    },
    {
      disabled: true,
      type: 'danger',
      class: 'disabled:bg-danger-300',
    },
    {
      disabled: true,
      type: 'success',
      class: 'disabled:bg-success-300',
    },
    {
      disabled: true,
      type: 'info',
      class: 'disabled:bg-info-300',
    },
    {
      disabled: true,
      type: 'warning',
      class: 'disabled:bg-warning-300',
    },
    {
      disabled: true,
      type: 'light',
      class: 'disabled:bg-gray-100 disabled:text-gray-400',
    },
    {
      disabled: true,
      type: 'dark',
      class: 'disabled:bg-gray-400',
    },
  ],
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createButton = ({
  label = 'Button',
  type = 'primary',
  size = 'medium',
  rounded = false,
  outline = false,
  link = false,
  icon = false,
  iconName = '',
  iconPosition = 'left',
  iconOnly = false,
  full = false,
  as = 'button',
  href = '#',
  disabled = false,
}: ButtonProps): string => {
  const buttonClass = buttonClassNames({
    type,
    size,
    rounded,
    link,
    iconOnly,
    outline,
    full,
    disabled,
  });

  const iconLeft = icon && iconPosition === 'left' && !iconOnly ? `<i class="bi ${iconName}"></i>` : '';
  const iconRight = icon && iconPosition === 'right' && !iconOnly ? `<i class="bi ${iconName}"></i>` : '';
  const iconOnlyContent = iconOnly ? `<i class="bi ${iconName}"></i>` : '';

  const escapedLabel = escapeHtml(label);
  const content = `
    ${iconLeft}
    ${!iconOnly ? `<span>${escapedLabel}</span>` : ''}
    ${iconOnlyContent}
    ${iconRight}
  `;

  if (as === 'button') {
    return formatHtml(`
      <button type="button" class="${buttonClass}" ${disabled ? 'disabled' : ''}>
        ${content}
      </button>
    `);
  } else if (as === 'input') {
    return formatHtml(`
      <input type="button" value="${escapedLabel}" class="${buttonClass}" ${disabled ? 'disabled' : ''} />
    `);
  } else if (as === 'a') {
    return formatHtml(`
      <a href="${href}" class="${buttonClass}" ${disabled ? 'aria-disabled="true"' : ''}>
        ${content}
      </a>
    `);
  }
  return '';
};
