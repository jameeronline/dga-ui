import type { ToggleSizeVariant, ToggleVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface ToggleItem {
  title: string;
  description?: string;
  iconName?: string;
}

export interface ToggleProps {
  variant?: ToggleVariant;
  size?: ToggleSizeVariant;
  content?: ToggleItem[];
  isIcon?: boolean;
  helpText?: boolean;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const typeClass: Record<string, string> = {
  primary: 'checked:bg-primary-200 checked:after:bg-primary-600 hover:bg-slate-400 checked:hover:bg-primary-400',
  secondary: 'checked:bg-secondary-200 checked:after:bg-secondary-600 hover:bg-slate-400 checked:hover:bg-secondary-400',
  tertiary: 'checked:bg-tertiary-200 checked:after:bg-tertiary-600 hover:bg-slate-400 checked:hover:bg-tertiary-400',
  danger: 'checked:bg-danger-200 checked:after:bg-danger-600 hover:bg-slate-400 checked:hover:bg-danger-400',
  info: 'checked:bg-info-200 checked:after:bg-info-600 hover:bg-slate-400 checked:hover:bg-info-400',
  warning: 'checked:bg-warning-200 checked:after:bg-warning-600 hover:bg-slate-400 checked:hover:bg-warning-400',
  success: 'checked:bg-success-200 checked:after:bg-success-600 hover:bg-slate-400 checked:hover:bg-success-400',
  light: 'checked:bg-gray-200 checked:after:bg-gray-600 hover:bg-slate-400 checked:hover:bg-gray-400',
  dark: 'checked:bg-gray-700 checked:after:bg-gray-900 hover:bg-slate-400 checked:hover:bg-gray-800',
};

export const createToggleComponent = ({
  variant = 'primary',
  size = 'default',
  content = [{ title: 'Toggle', description: '', iconName: '' }],
  isIcon = false,
  helpText = false,
}: ToggleProps): string => {
  const sizeClass = size === 'large' ? 'w-12 h-6 after:w-6 after:h-6' : 'w-8 h-4 after:w-4 after:h-4';
  const helpTextAlignment = size === 'large' ? 'pl-14' : 'pl-10';
  const variantStyle = typeClass[variant] || typeClass.primary;
  const checkedLeft = size === 'large' ? 'checked:after:left-6' : 'checked:after:left-4';

  const escapedTitle = escapeHtml(content[0].title);
  const escapedDescription = content[0].description ? escapeHtml(content[0].description) : '';

  const iconMarkup = isIcon && content[0].iconName
    ? `<i class="${content[0].iconName} text-xl text-slate-500"></i>`
    : '';

  const helpTextMarkup = helpText && escapedDescription
    ? `<small class="w-full py-2 text-xs transition ${helpTextAlignment} text-slate-400 peer-invalid:text-danger-500">
         <span>${escapedDescription}</span>
       </small>`
    : '';

  return formatHtml(`
    <div class="relative flex flex-wrap items-center">
      <input
        class="relative ${sizeClass} transition-colors appearance-none cursor-pointer ${variantStyle} peer rounded-xl bg-slate-300 after:absolute after:top-0 after:left-0 after:rounded-full after:bg-slate-500 after:transition-all ${checkedLeft} disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
        type="checkbox"
        id="toggle-${content[0].title}"
      />
      ${iconMarkup}
      <label class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" for="toggle-${content[0].title}">
        ${escapedTitle}
      </label>
      ${helpTextMarkup}
    </div>
  `);
};
