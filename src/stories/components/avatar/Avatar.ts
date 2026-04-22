import type { ButtonColorVariant, ButtonSizeVariant } from '@/types/index';
import { tv } from 'tailwind-variants';
import { formatHtml } from '@/utils/code-format';

export interface AvatarProps {
  as?: 'image' | 'icon' | 'text';
  type?: ButtonColorVariant;
  size?: ButtonSizeVariant;
  outline?: boolean;
  rounded?: boolean;
  badge?: boolean;
  badgePosition?: 'top' | 'bottom';
  grouped?: boolean;
}

const avatarClassNames = tv({
  slots: {
    base: 'relative inline-flex items-center justify-center text-white',
    content: '',
    icon: 'bi bi-alarm',
    text: 'font-bold',
    image: 'max-w-full rounded',
    badgeIndicator: 'absolute right-0 inline-block w-2 h-2 bg-red-600 rounded-full',
  },
  variants: {
    type: {
      primary: { base: 'bg-primary-500' },
      secondary: { base: 'bg-secondary-500' },
      tertiary: { base: 'bg-tertiary-500' },
      danger: { base: 'bg-danger-500' },
      success: { base: 'bg-success-500' },
      info: { base: 'bg-info-500' },
      warning: { base: 'bg-warning-500' },
      light: { base: 'bg-gray-200 text-gray-700' },
      dark: { base: 'bg-gray-800' },
    },
    size: {
      small: {
        base: 'w-6 h-6',
        content: 'text-xs',
      },
      medium: {
        base: 'w-8 h-8',
        content: 'text-sm',
      },
      large: {
        base: 'w-10 h-10',
        content: 'text-lg',
      },
      xl: {
        base: 'w-12 h-12',
        content: 'text-2xl',
      },
    },
    rounded: {
      true: { base: 'rounded-full' },
      false: { base: 'rounded' },
    },
    outline: {
      true: { base: 'border-2 border-white' },
    },
    badgePosition: {
      top: { badgeIndicator: '-top-1 -right-1' },
      bottom: { badgeIndicator: '-bottom-1 -right-1' },
    },
    grouped: {
      true: { base: 'stacked-avatars' },
    },
  },
  compoundVariants: [
    {
      rounded: true,
      class: {
        image: 'rounded-full',
      },
    },
  ],
});

export const createAvatar = ({
  as = 'image',
  type = 'primary',
  size = 'large',
  outline = false,
  rounded = false,
  badge = false,
  badgePosition = 'top',
  grouped = false,
}: AvatarProps): string => {
  const { base, image, icon, text, badgeIndicator } = avatarClassNames({
    type,
    size,
    rounded,
    outline,
    grouped,
    badgePosition,
  });

  const typeContent: Record<string, string> = {
    image: `<img src="https://i.pravatar.cc/48?img=1" alt="user name" title="user name" width="48" height="48" class="${image()}" />`,
    icon: `<i class="${icon()}"></i>`,
    text: `<span class="${text()}">JD</span>`,
  };

  const badgeHtml = badge ? `<span class="${badgeIndicator()}"></span>` : '';

  return formatHtml(`
<div class="${base()}">
  ${typeContent[as]}
  ${badgeHtml}
</div>
`);
};
