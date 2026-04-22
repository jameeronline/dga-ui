import { tv } from 'tailwind-variants';

export function createTooltip({
  variant = 'primary',
  onlyIcon = false,
  position = 'top',
  size = 'default',
  label = 'Hover me',
  tooltipText = "I'm a tooltip",
}) {
  const tooltipClassNames = tv({
    slots: {
      base: 'relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none',
      message:
        "invisible absolute z-10 rounded opacity-0 transition-all before:invisible before:absolute before:z-10 ${arrowPositionStyles[position]} before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100",
    },
    variants: {
      style: {
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
      {
        style: 'primary',
        position: 'top',
        class: {
          message: 'before:border-t-primary-700',
        },
      },
      {
        style: 'primary',
        position: 'right',
        class: {
          message: 'before:border-r-primary-700',
        },
      },
      {
        style: 'primary',
        position: 'bottom',
        class: {
          message: 'before:border-b-primary-700',
        },
      },
      {
        style: 'primary',
        position: 'left',
        class: {
          message: 'before:border-l-primary-700',
        },
      },
      {
        style: 'secondary',
        position: 'top',
        class: {
          message: 'before:border-t-secondary-500',
        },
      },
      {
        style: 'secondary',
        position: 'right',
        class: {
          message: 'before:border-r-secondary-500',
        },
      },
      {
        style: 'secondary',
        position: 'bottom',
        class: {
          message: 'before:border-b-secondary-500',
        },
      },
      {
        style: 'secondary',
        position: 'left',
        class: {
          message: 'before:border-l-secondary-500',
        },
      },
      {
        style: 'tertiary',
        position: 'top',
        class: {
          message: 'before:border-t-tertiary-500',
        },
      },
      {
        style: 'tertiary',
        position: 'right',
        class: {
          message: 'before:border-r-tertiary-500',
        },
      },
      {
        style: 'tertiary',
        position: 'bottom',
        class: {
          message: 'before:border-b-tertiary-500',
        },
      },
      {
        style: 'tertiary',
        position: 'left',
        class: {
          message: 'before:border-l-tertiary-500',
        },
      },

      {
        style: 'danger',
        position: 'top',
        class: {
          message: 'before:border-t-danger-500',
        },
      },
      {
        style: 'danger',
        position: 'right',
        class: {
          message: 'before:border-r-danger-500',
        },
      },
      {
        style: 'danger',
        position: 'bottom',
        class: {
          message: 'before:border-b-danger-500',
        },
      },
      {
        style: 'danger',
        position: 'left',
        class: {
          message: 'before:border-l-danger-500',
        },
      },
      {
        style: 'success',
        position: 'top',
        class: {
          message: 'before:border-t-success-500',
        },
      },
      {
        style: 'success',
        position: 'right',
        class: {
          message: 'before:border-r-success-500',
        },
      },
      {
        style: 'success',
        position: 'bottom',
        class: {
          message: 'before:border-b-success-500',
        },
      },
      {
        style: 'success',
        position: 'left',
        class: {
          message: 'before:border-l-success-500',
        },
      },

      {
        style: 'info',
        position: 'top',
        class: {
          message: 'before:border-t-info-500',
        },
      },
      {
        style: 'info',
        position: 'right',
        class: {
          message: 'before:border-r-info-500',
        },
      },
      {
        style: 'info',
        position: 'bottom',
        class: {
          message: 'before:border-b-info-500',
        },
      },
      {
        style: 'info',
        position: 'left',
        class: {
          message: 'before:border-l-info-500',
        },
      },
      {
        style: 'warning',
        position: 'top',
        class: {
          message: 'before:border-t-warning-500',
        },
      },
      {
        style: 'warning',
        position: 'right',
        class: {
          message: 'before:border-r-warning-500',
        },
      },
      {
        style: 'warning',
        position: 'bottom',
        class: {
          message: 'before:border-b-warning-500',
        },
      },
      {
        style: 'warning',
        position: 'left',
        class: {
          message: 'before:border-l-warning-500',
        },
      },
      {
        style: 'light',
        position: 'top',
        class: {
          message: 'before:border-t-gray-200',
        },
      },
      {
        style: 'light',
        position: 'right',
        class: {
          message: 'before:border-r-gray-200',
        },
      },
      {
        style: 'light',
        position: 'bottom',
        class: {
          message: 'before:border-b-gray-200',
        },
      },
      {
        style: 'light',
        position: 'left',
        class: {
          message: 'before:border-l-gray-200',
        },
      },
      {
        style: 'dark',
        position: 'top',
        class: {
          message: 'before:border-t-gray-700',
        },
      },
      {
        style: 'dark',
        position: 'right',
        class: {
          message: 'before:border-r-gray-700',
        },
      },
      {
        style: 'dark',
        position: 'bottom',
        class: {
          message: 'before:border-b-gray-700',
        },
      },
      {
        style: 'dark',
        position: 'left',
        class: {
          message: 'before:border-l-gray-700',
        },
      },
    ],
  });

  const { base, message } = tooltipClassNames({
    style: variant,
    size: size,
    position: position,
  });

  // Tooltip element
  const tooltip = `
        <span class="${base()}" aria-describedby="tooltip-01">
            ${onlyIcon ? '<i class="bi bi-info-circle"></i>' : label}
            <span role="tooltip" id="tooltip-01" class="${message()}">
                ${tooltipText}
            </span>
        </span>
    `;

  return tooltip;
}
