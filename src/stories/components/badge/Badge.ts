import { tv } from 'tailwind-variants';

import type { BaseColorVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface BadgeProps {
  label?: string;
  type?: BaseColorVariant;
  rounded?: boolean;
  iconOnly?: boolean;
  border?: boolean;
}

const badgeClassNames = tv({
  base: 'text-sm inline-flex items-center justify-center cursor-pointer transition duration-300 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus-outline',
  variants: {
    type: {
      primary: 'bg-primary-background text-primary',
      secondary: 'bg-secondary-background text-secondary',
      tertiary: 'bg-tertiary-background text-tertiary',
      danger: 'bg-danger-background-subtle text-danger',
      success: 'bg-success-background text-success',
      info: 'bg-info-background text-info',
      warning: 'bg-warning-background text-warning-800',
      light: 'bg-gray-100 text-gray-800',
      dark: 'bg-gray-800 text-white',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded',
    },
    iconOnly: {
      true: 'w-10 h-10',
      false: 'px-4 h-8',
    },
  },

  compoundVariants: [
    {
      type: 'primary',
      border: true,
      class: 'border border-primary-border',
    },
    {
      type: 'secondary',
      border: true,
      class: 'border border-secondary-border',
    },
    {
      type: 'tertiary',
      border: true,
      class: 'border border-tertiary-border',
    },
    {
      type: 'danger',
      border: true,
      class: 'border border-danger-border',
    },
    {
      type: 'success',
      border: true,
      class: 'border border-success-border',
    },
    {
      type: 'info',
      border: true,
      class: 'border border-info-border',
    },
    {
      type: 'warning',
      border: true,
      class: 'border border-warning-border',
    },
    {
      type: 'light',
      border: true,
      class: 'border border-gray-border',
    },
    {
      type: 'dark',
      border: true,
      class: 'border border-gray-600',
    },
  ],
  defaultVariants: {
    type: 'primary',
    rounded: false,
    iconOnly: false,
    border: false,
  },
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createBadge = ({ label = 'badge', type = 'primary', rounded = false, iconOnly = false, border = false }: BadgeProps): string => {
  const badgeClass = badgeClassNames({ type, rounded, iconOnly, border });
  const escapedLabel = escapeHtml(label);
  const content = iconOnly ? '<i class="hgi hgi-stroke hgi-rounded hgi-star text-xl"></i>' : escapedLabel;

  return formatHtml(`
<span class="${badgeClass}">
  ${content}
</span>
`);
};
