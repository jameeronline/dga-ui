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
  /** Invoker command for the native <dialog> element, e.g. `show-modal` or `close`. */
  command?: string;
  /** Id of the dialog the invoker points at, e.g. the dialog's `id`. */
  commandfor?: string;
  /** Native button type. Use `submit` for buttons that submit a form. */
  htmlType?: 'button' | 'submit' | 'reset';
  /** Id of the form the button belongs to. Useful for submit buttons rendered outside the form. */
  form?: string;
}

const buttonClassNames = tv({
  slots: {
    base: `inline-flex items-center justify-center gap-2 font-medium h-10 transition duration-300 whitespace-nowrap focus-ring-outline `,
    iconEl: `text-current`,
    textEl: `pointer-events-none`,
  },
  variants: {
    type: {
      primary: 'bg-primary-600 hover:bg-primary-700 active:bg-primary-900 selected:bg-primary-800 text-white',
      secondary: 'bg-secondary-600 hover:bg-secondary-700 active:bg-secondary-900 selected:bg-secondary-800 text-white',
      tertiary: 'bg-tertiary-600 hover:bg-tertiary-700 active:bg-tertiary-900 selected:bg-tertiary-800 text-white',
      danger: 'bg-danger-600 hover:bg-danger-700 active:bg-danger-900 selected:bg-danger-800 text-white',
      success: 'bg-success-600 hover:bg-success-700 active:bg-success-900 selected:bg-success-800 text-white',
      info: 'bg-info-600 hover:bg-info-700 active:bg-info-900 selected:bg-info-800 text-white',
      warning: 'bg-warning-600 hover:bg-warning-700 active:bg-warning-900 selected:bg-warning-800 text-white',
      light: 'bg-gray-200 hover:bg-gray-300 text-gray-700',
      dark: 'bg-gray-800 hover:bg-gray-900 text-white',
    },
    size: {
      // xl: {
      //   base: 'h-16 px-8 text-xl',
      //   iconEl: 'text-3xl',
      // },
      large: {
        base: 'h-10 px-4 text-base',
        iconEl: 'text-2xl',
      },
      medium: {
        base: 'h-8 px-3 text-sm',
        iconEl: 'text-xl',
      },
      small: {
        base: 'h-6 px-2 text-xs',
        iconEl: 'text-lg',
      },
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-sm',
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
      true: { base: 'w-full' },
    },
    disabled: {
      true: '',
    },
  },
  compoundVariants: [
    {
      type: 'primary',
      outline: true,
      class: 'bg-transparent border border-primary-200 text-primary-600 hover:bg-primary-100',
    },
    {
      type: 'secondary',
      outline: true,
      class: 'bg-transparent border border-secondary-200 text-secondary-600 hover:bg-secondary-100',
    },
    {
      type: 'tertiary',
      outline: true,
      class: 'bg-transparent border border-tertiary-200 text-tertiary-600 hover:bg-tertiary-100',
    },
    {
      type: 'danger',
      outline: true,
      class: 'bg-transparent border border-danger-200 text-danger-600 hover:bg-danger-100',
    },
    {
      type: 'success',
      outline: true,
      class: 'bg-transparent border border-success-200 text-success-600 hover:bg-success-100',
    },
    {
      type: 'info',
      outline: true,
      class: 'bg-transparent border border-info-200 text-info-600 hover:bg-info-100',
    },
    {
      type: 'warning',
      outline: true,
      class: 'bg-transparent border border-warning-200 text-warning-600 hover:bg-warning-100',
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
    // {
    //   size: 'xl',
    //   iconOnly: true,
    //   class: 'w-16 p-0',
    // },
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
      class:
        'disabled:cursor-not-allowed disabled:pointer-events-none disabled:select-none disabled:bg-neutral-200 disabled:border-0 disabled:text-neutral-500',
    },
    // {
    //   disabled: true,
    //   type: 'primary',
    //   class: 'disabled:bg-neutral-200 disabled:border-0 disabled:text-neutral-500',
    // },
    // {
    //   disabled: true,
    //   type: 'secondary',
    //   class: 'disabled:bg-secondary-300',
    // },
    // {
    //   disabled: true,
    //   type: 'tertiary',
    //   class: 'disabled:bg-tertiary-300',
    // },
    // {
    //   disabled: true,
    //   type: 'danger',
    //   class: 'disabled:bg-danger-300',
    // },
    // {
    //   disabled: true,
    //   type: 'success',
    //   class: 'disabled:bg-success-300',
    // },
    // {
    //   disabled: true,
    //   type: 'info',
    //   class: 'disabled:bg-info-300',
    // },
    // {
    //   disabled: true,
    //   type: 'warning',
    //   class: 'disabled:bg-warning-300',
    // },
    // {
    //   disabled: true,
    //   type: 'light',
    //   class: 'disabled:bg-gray-100 disabled:text-gray-400',
    // },
    // {
    //   disabled: true,
    //   type: 'dark',
    //   class: 'disabled:bg-gray-400',
    // },
  ],
  defaultVariants: {
    type: 'primary',
    size: 'large',
    rounded: false,
    outline: false,
    link: false,
    iconOnly: false,
    full: false,
    disabled: false,
  },
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createButton = ({
  label = 'Button',
  type = 'primary',
  size = 'large',
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
  command = '',
  commandfor = '',
  htmlType = 'button',
  form = '',
}: ButtonProps): string => {
  const { base, iconEl, textEl } = buttonClassNames({
    type,
    size,
    rounded,
    link,
    iconOnly,
    outline,
    full: iconOnly ? false : full,
    disabled,
  });

  const iconLeft = icon && iconPosition === 'left' && !iconOnly ? `<i class="${iconName + ' ' + iconEl()}"></i>` : '';
  const iconRight = icon && iconPosition === 'right' && !iconOnly ? `<i class="${iconName + ' ' + iconEl()}"></i>` : '';
  const iconOnlyContent = iconOnly ? `<i class="${iconName + ' ' + iconEl()}"></i>` : '';

  const escapedLabel = escapeHtml(label);
  const content = `
    ${iconLeft}
    ${!iconOnly ? `<span class="${textEl()}">${escapedLabel}</span>` : ''}
    ${iconOnlyContent}
    ${iconRight}
  `;

  const invokerAttributes = [
    commandfor ? `commandfor="${commandfor}"` : '',
    command ? `command="${command}"` : '',
    form ? `form="${form}"` : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'button') {
    return formatHtml(`
      <button type="${htmlType}" class="${base()}" ${invokerAttributes}>
        ${content}
      </button>
    `);
  } else if (as === 'input') {
    return formatHtml(`
      <input type="${htmlType}" value="${escapedLabel}" class="${base()}" ${invokerAttributes} />
    `);
  } else if (as === 'a') {
    return formatHtml(`
      <a href="${href}" class="${base()}" ${disabled ? 'aria-disabled="true"' : ''}>
        ${content}
      </a>
    `);
  }
  return '';
};
