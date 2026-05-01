import { tv } from 'tailwind-variants';

import type { ButtonSizeVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface ButtonSwitchLabel {
  label: string;
  icon?: string;
}

export interface ButtonSwitchProps {
  elementId?: string;
  labels?: ButtonSwitchLabel[];
  size?: ButtonSizeVariant;
  leadingIcon?: boolean;
  trailIcon?: boolean;
  rounded?: boolean;
}

const buttonSwitchClasses = tv({
  slots: {
    base: 'relative inline-flex items-center group bg-slate-100',
    input: 'order-2 hidden peer',
    labelBase: 'inline-flex items-center justify-center order-1 gap-2 text-sm font-medium tracking-wide cursor-pointer transition-colors',
    activeLabel:
      'text-white bg-primary-800 hover:bg-primary-900 focus:bg-primary-950 peer-checked:bg-transparent peer-checked:text-slate-500 hover:peer-checked:bg-transparent peer-checked:hover:text-slate-600 focus:peer-checked:bg-transparent',
    label:
      'bg-transparent text-slate-500 hover:text-slate-600 peer-checked:bg-primary-800 peer-checked:text-white hover:peer-checked:bg-primary-900 peer-checked:hover:text-white focus:peer-checked:bg-primary-700',
    icon: '',
  },
  variants: {
    size: {
      small: { labelBase: 'h-8 px-4 text-xs', icon: 'text-sm' },
      medium: { labelBase: 'h-10 px-5 text-sm', icon: 'text-md' },
      large: { labelBase: 'h-12 px-6 text-base', icon: 'text-lg' },
      xl: { labelBase: 'h-16 px-8 text-lg', icon: 'text-2xl' },
    },
    rounded: {
      true: { labelBase: 'rounded-full' },
      false: { labelBase: 'rounded-md' },
    },
  },
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createButtonSwitch = ({
  elementId = 'toggle-component',
  labels = [
    { label: 'Code mode', icon: 'ri-code-line' },
    { label: 'Visual mode', icon: 'ri-eye-line' },
  ],
  size = 'medium',
  leadingIcon = false,
  trailIcon = false,
  rounded = true,
}: ButtonSwitchProps): string => {
  const { base, input, labelBase, activeLabel, label, icon } = buttonSwitchClasses({
    size,
    rounded,
  });

  const escapedLabel0 = escapeHtml(labels[0].label);
  const escapedLabel1 = escapeHtml(labels[1].label);

  const icon0 = leadingIcon || trailIcon ? `<i class="${labels[0].icon} ${icon()}"></i>` : '';
  const icon1 = leadingIcon || trailIcon ? `<i class="${labels[1].icon} ${icon()}"></i>` : '';

  return formatHtml(`
<div class="${base()}">
  <input class="${input()}" type="checkbox" id="id-${elementId}" />
  <label class="${labelBase()} ${activeLabel()}" for="id-${elementId}">
    ${icon0}
    ${escapedLabel0}
    ${trailIcon ? icon0 : ''}
  </label>
  <label class="${labelBase()} ${label()}" for="id-${elementId}">
    ${icon1}
    ${escapedLabel1}
    ${trailIcon ? icon1 : ''}
  </label>
</div>
`);
};
