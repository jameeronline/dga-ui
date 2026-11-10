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
  base: 'text-xs inline-flex items-center justify-center',
  variants: {
    type: {
      primary: 'bg-primary-background text-primary-foreground',
      secondary: 'bg-secondary-background text-secondary-foreground',
      tertiary: 'bg-tertiary-background text-tertiary-foreground',
      danger: 'bg-danger-background text-danger-foreground',
      success: 'bg-success-background text-success-foreground',
      info: 'bg-info-background text-info-foreground',
      warning: 'bg-warning-background text-warning-foreground',
      light: 'bg-natural-background text-natural-foreground',
      dark: 'bg-natural-foreground text-white',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded',
    },
    iconOnly: {
      true: 'p-0 w-10 h-10 text-xl',
      false: 'px-4 py-2',
    },
    border: {
      true: 'border',
    },
  },
  compoundVariants: [
    { type: 'primary', border: true, class: 'border-primary-border' },
    { type: 'secondary', border: true, class: 'border-secondary-border' },
    { type: 'tertiary', border: true, class: 'border-tertiary-border' },
    { type: 'danger', border: true, class: 'border-danger-border' },
    { type: 'success', border: true, class: 'border-success-border' },
    { type: 'info', border: true, class: 'border-info-border' },
    { type: 'warning', border: true, class: 'border-warning-border' },
    { type: 'light', border: true, class: 'border-natural-border' },
    { type: 'dark', border: true, class: 'border-dark-border' },
  ],
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createBadge = ({ label = 'badge', type = 'primary', rounded = false, iconOnly = false, border = false }: BadgeProps): string => {
  const badgeClass = badgeClassNames({ type, rounded, iconOnly, border });
  const escapedLabel = escapeHtml(label);
  const content = iconOnly ? '<i class="ri-star-line"></i>' : escapedLabel;

  return formatHtml(`
<span class="${badgeClass}">
  ${content}
</span>
`);
};
