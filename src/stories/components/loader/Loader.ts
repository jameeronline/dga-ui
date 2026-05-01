import { tv } from 'tailwind-variants';

import type { LoaderType, LoaderVariant, LoaderSizeVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface LoaderProps {
  size?: LoaderSizeVariant;
  type?: LoaderType;
  variant?: LoaderVariant;
}

const loaderClasses = tv({
  base: '',
  variants: {
    size: {
      small: 'w-6 h-6',
      medium: 'w-8 h-8',
      large: 'w-10 h-10',
      xl: 'w-12 h-12',
    },
    variant: {
      primary: 'stroke-primary-800',
      secondary: 'stroke-secondary-500',
      tertiary: 'stroke-tertiary-500',
      danger: 'stroke-danger-500',
      success: 'stroke-success-500',
      info: 'stroke-info-500',
      warning: 'stroke-warning-500',
    },
  },
});

export const createLoader = ({ size = 'medium', type = 'circle', variant = 'primary' }: LoaderProps): string => {
  const loaderClassNames = loaderClasses({
    size: size,
    variant: variant,
  });

  return formatHtml(`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title-04a desc-04a" aria-live="polite" aria-busy="true"
        class="${loaderClassNames} animate-spin">
        <title id="title-04a">Loading</title>
        <desc id="desc-04a">Loading spinner</desc>
        ${
          type === 'circle'
            ? `<circle cx="12" cy="12" r="10" class="stroke-slate-200" stroke-width="4" />
               <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" stroke-width="4" />`
            : `<rect x="2" y="2" width="20" height="20" rx="5" class="stroke-slate-200" stroke-width="4" />
               <path d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2" stroke-width="4" />`
        }
      </svg>
    `);
};