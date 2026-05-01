import { tv } from 'tailwind-variants';

import type { RangeSizeVariant, RangeType } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface RangeProps {
  label?: string;
  size?: RangeSizeVariant;
  type?: RangeType;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const rangeClassNames = tv({
  slots: {
    labelEl: 'block mb-2 text-slate-600 dark:text-white',
    input: 'w-full bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700',
  },
  variants: {
    size: {
      small: {
        input: 'h-1',
        labelEl: 'text-sm',
      },
      default: {
        input: 'h-2',
        labelEl: 'text-base',
      },
      large: {
        input: 'h-4',
        labelEl: 'text-lg',
      },
    },
  },
});

export const createRangeSelect = ({ label = 'Default Range', size = 'default', type = 'default' }: RangeProps): string => {
  const { labelEl, input } = rangeClassNames({ size: size });

  const typeAttributes: string = (() => {
    switch (type) {
      case 'minMax':
        return 'min="0" max="100"';
      case 'steps':
        return 'min="0" max="100" step="10"';
      case 'advanced':
        return 'min="0" max="100" step="5"';
      default:
        return '';
    }
  })();

  const escapedLabel = escapeHtml(label);

  return formatHtml(`
      <label class="${labelEl()}">${escapedLabel}</label>
      <input 
        type="range" 
        value="50"
        ${typeAttributes} 
        class="${input()}"
      />
    `);
};