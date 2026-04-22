import { tv } from 'tailwind-variants';

export const createButtonTv = ({ color = 'primary', size = 'md' }) => {
  const button = tv({
    base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80 transition-all',
    variants: {
      color: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-purple-500 text-white hover:bg-purple-600',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'px-4 py-3 text-lg',
      },
    },
    compoundVariants: [
      {
        size: ['sm', 'md'],
        class: 'px-3 py-1',
      },
    ],
    defaultVariants: {
      size: 'md',
      color: 'primary',
    },
  });

  const classes = button();

  return `
    <button class="${classes}">
    Click me
  </button>
    `;
};
