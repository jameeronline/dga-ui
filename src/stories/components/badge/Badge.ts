import { tv } from 'tailwind-variants';

import type { BaseColorVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface BadgeProps {
  label?: string;
  type?: BaseColorVariant;
  rounded?: boolean;
  iconOnly?: boolean;
}

const badgeClassNames = tv({
  base: 'font-sans text-xs inline-flex items-center justify-center',
  variants: {
    type: {
      primary: 'bg-primary-50 text-primary-800',
      secondary: 'bg-secondary-100 text-secondary-800',
      tertiary: 'bg-tertiary-100 text-tertiary-800',
      danger: 'bg-danger-50 text-danger-800',
      success: 'bg-success-50 text-success-800',
      info: 'bg-info-50 text-info-800',
      warning: 'bg-warning-50 text-warning-800',
      light: 'bg-gray-100 text-gray-800',
      dark: 'bg-gray-800 text-white',
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded',
    },
    iconOnly: {
      true: 'p-0 w-8 h-8',
      false: 'px-4 py-2',
    },
  },
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createBadge = ({
  label = 'badge',
  type = 'primary',
  rounded = false,
  iconOnly = false,
}: BadgeProps): string => {
  const badgeClass = badgeClassNames({ type, rounded, iconOnly });
  const escapedLabel = escapeHtml(label);
  const content = iconOnly ? '<i class="bi bi-star-fill"></i>' : escapedLabel;

  return formatHtml(`
<span class="${badgeClass}">
  ${content}
</span>
`);
};
