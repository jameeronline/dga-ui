import { tv } from 'tailwind-variants';
import { formatHtml } from '@/utils/code-format';

export type SelectSizeVariant = 'small' | 'default' | 'large';

export interface SelectProps {
  size?: SelectSizeVariant;
  helpText?: boolean;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const selectClassNames = tv({
  slots: {
    base: 'relative',
    wrapper: 'relative mt-1 mb-4',
    select:
      'relative w-full px-4 transition-all border rounded outline-none focus-visible:outline-none border-slate-200 text-slate-500 bg-white focus:border-primary-800 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 appearance-none cursor-pointer pr-10',
    icon: 'absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none',
    label:
      'cursor-text peer-focus:cursor-default text-sm text-slate-600 transition-all peer-required:after:text-danger-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400',
    helptext: 'flex justify-between w-full px-4 mt-2 text-xs transition text-slate-400',
  },
  variants: {
    size: {
      small: {
        select: 'h-10',
        icon: 'text-lg w-4 h-4',
        label: 'text-sm',
      },
      default: {
        select: 'h-12',
        icon: 'text-xl w-6 h-6',
        label: 'text-sm',
      },
      large: {
        select: 'h-14 px-6',
        icon: 'text-2xl w-8 h-8 right-4',
        label: 'text-base',
      },
    },
  },
});

export const createSelect = ({
  size = 'default',
  helpText = false,
  disabled = false,
  label = 'Select Option',
  placeholder = 'Choose an option',
  options = [],
}: SelectProps): string => {
  const { wrapper, select, icon, label: labelSlot, helptext } = selectClassNames({
    size: size,
  });

  const escapedLabel = escapeHtml(label);
  const escapedPlaceholder = escapeHtml(placeholder);

  const optionsHtml = [
    `<option value="" disabled selected>${escapedPlaceholder}</option>`,
    ...options.map((opt) => `<option value="${escapeHtml(opt.value)}">${escapeHtml(opt.label)}</option>`),
  ].join('');

  const helpTextHtml = helpText ? `<small class="${helptext()}"><span>Helper text here</span></small>` : '';

  return formatHtml(`
    <div class="${wrapper()}">
      ${label ? `<label class="${labelSlot()}">${escapedLabel}</label>` : ''}
      <select
        class="${select()}"
        ${disabled ? 'disabled' : ''}
      >
        ${optionsHtml}
      </select>
      <span class="${icon()}"><i class="ri-arrow-down-line"></i></span>
      ${helpTextHtml}
    </div>
  `);
};
