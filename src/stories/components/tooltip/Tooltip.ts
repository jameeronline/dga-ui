import { tv } from 'tailwind-variants';

import type { TooltipPosition, TooltipVariant, TooltipSizeVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface TooltipProps {
  variant?: TooltipVariant;
  onlyIcon?: boolean;
  position?: TooltipPosition;
  size?: TooltipSizeVariant;
  label?: string;
  tooltipText?: string;
}

const tooltipClassNames = tv({
  slots: {
    base: 'relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none',
    message:
      "invisible absolute z-10 rounded opacity-0 transition-all before:invisible before:absolute before:z-10 ${arrowPositionStyles[position]} before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100",
  },
  variants: {
    variant: {
      primary: { message: 'bg-primary-700 text-white' },
      secondary: { message: 'bg-secondary-600 text-white' },
      tertiary: { message: 'bg-tertiary-600 text-white' },
      danger: { message: 'bg-danger-500 text-white' },
      info: { message: 'bg-info-500 text-white' },
      warning: { message: 'bg-warning-500 text-white' },
      success: { message: 'bg-success-500 text-white' },
      light: { message: 'bg-gray-200 text-gray-800' },
      dark: { message: 'bg-gray-600 text-white' },
    },
    size: {
      small: { message: 'w-32 p-2 text-xs' },
      default: { message: 'w-48 p-4 text-sm' },
      large: { message: 'w-64 p-6 text-md' },
    },
    position: {
      top: {
        message:
          'bottom-full left-1/2 -translate-x-1/2 mb-2 before:left-1/2 before:top-full before:z-10 before:mb-2 before:-ml-2 before:border-x-8 before:border-t-8 before:border-x-transparent',
      },
      right: {
        message:
          'left-full top-1/2 -translate-y-1/2 ml-2 before:top-1/2 before:right-full before:z-10 before:ml-2 before:-mt-2 before:border-y-8 before:border-r-8 before:border-y-transparent',
      },
      bottom: {
        message:
          'top-full left-1/2 -translate-x-1/2 mt-2 before:left-1/2 before:bottom-full before:z-10 before:mt-2 before:-ml-2 before:border-x-8 before:border-b-8 before:border-x-transparent',
      },
      left: {
        message:
          'right-full top-1/2 -translate-y-1/2 mr-2 before:top-1/2 before:left-full before:z-10 before:mr-2 before:-mt-2 before:border-y-8 before:border-l-8 before:border-y-transparent',
      },
    },
  },
  compoundVariants: [
    { variant: 'primary', position: 'top', class: { message: 'before:border-t-primary-700' } },
    { variant: 'primary', position: 'right', class: { message: 'before:border-r-primary-700' } },
    { variant: 'primary', position: 'bottom', class: { message: 'before:border-b-primary-700' } },
    { variant: 'primary', position: 'left', class: { message: 'before:border-l-primary-700' } },
    { variant: 'secondary', position: 'top', class: { message: 'before:border-t-secondary-500' } },
    { variant: 'secondary', position: 'right', class: { message: 'before:border-r-secondary-500' } },
    { variant: 'secondary', position: 'bottom', class: { message: 'before:border-b-secondary-500' } },
    { variant: 'secondary', position: 'left', class: { message: 'before:border-l-secondary-500' } },
  ],
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createTooltip = ({
  variant = 'primary',
  onlyIcon = false,
  position = 'top',
  size = 'default',
  label = 'Hover me',
  tooltipText = "I'm a tooltip",
}: TooltipProps): string => {
  const { base, message } = tooltipClassNames({
    variant: variant,
    size: size,
    position: position,
  });

  const escapedLabel = escapeHtml(label);
  const escapedTooltipText = escapeHtml(tooltipText);

  return formatHtml(`
      <span class="${base()}" aria-describedby="tooltip-01">
          ${onlyIcon ? '<i class="ri-information-line"></i>' : escapedLabel}
          <span role="tooltip" id="tooltip-01" class="${message()}">
              ${escapedTooltipText}
          </span>
      </span>
  `);
};
