import { tv } from 'tailwind-variants';

import type { InputType, InputSizeVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface InputProps {
  as?: InputType;
  size?: InputSizeVariant;
  isLabel?: boolean;
  label?: string;
  /** Id of the input. Defaults to `input-field` for backwards compatibility. */
  id?: string;
  /** Name submitted with the form. */
  name?: string;
  /** Marks the input as required and shows a required indicator next to the label. */
  required?: boolean;
  /** Value for the native `autocomplete` attribute. */
  autoComplete?: string;
  /** Moves focus to the input when the page or dialog opens. */
  autoFocus?: boolean;
  placeholder?: boolean;
  placeholderText?: string;
  helperText?: boolean;
  helperLabel?: string;
  isLeadIcon?: boolean;
  leadingIcon?: string;
  isTrailIcon?: boolean;
  trailingIcon?: string;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function escapeAttribute(text: string): string {
  return escapeHtml(text).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const inputClassNames = tv({
  slots: {
    base: 'relative flex flex-col w-full gap-2',
    form_group:
      "relative mt-1 mb-4 relative w-full after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:scale-x-0 after:rounded-full after:bg-slate-800 after:transition-transform after:duration-300 after:ease-out after:content-[''] focus-within:after:scale-x-100",
    input:
      'relative w-full px-4 transition-all border rounded outline-none focus-visible:outline-none peer border-slate-200 hover:border-slate-500 autofill:bg-white user-invalid:border-danger-500 user-invalid:text-danger-500 focus:border-primary-800 focus:outline-none user-invalid:focus:border-danger-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400',
    leadingIcon_slot: 'absolute w-6 h-6 cursor-pointer top-1/2 -translate-y-1/2 text-slate-400',
    trailingIcon_slot: 'absolute w-6 h-6 cursor-pointer top-3 right-2 text-slate-400',
    label_slot:
      'cursor-pointer peer-focus:cursor-default text-md transition-all peer-required:after:text-danger-500 peer-required:after:content-["\\00a0*"] peer-invalid:text-danger-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:text-xs peer-focus:text-primary-900 peer-invalid:peer-focus:text-danger-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent',
    helptext_slot: 'flex justify-between w-full px-4 mt-2 text-xs transition text-slate-400 peer-user-invalid:text-danger-500',
  },
  variants: {
    size: {
      small: {
        label_slot: 'text-sm',
        input: 'h-10',
        leadingIcon_slot: 'text-xl w-4 h-4',
        trailingIcon_slot: 'text-xl w-4 h-4',
      },
      default: {
        input: 'h-10',
        leadingIcon_slot: 'text-2xl w-6 h-6 left-4',
        trailingIcon_slot: 'text-2xl w-6 h-6 right-4',
      },
      large: {
        input: 'h-14',
        leadingIcon_slot: 'text-2xl w-8 h-8 top-4',
        trailingIcon_slot: 'text-2xl w-8 h-8 top-4',
      },
    },
  },
});

export const createInput = ({
  as = 'text',
  size = 'default',
  isLabel = true,
  label = 'Your Name',
  id = 'input-field',
  name = '',
  required = false,
  autoComplete = '',
  autoFocus = false,
  placeholder = true,
  placeholderText = 'Enter your name',
  helperText = false,
  helperLabel = 'Text field with helper text',
  isLeadIcon = false,
  leadingIcon = 'person',
  isTrailIcon = false,
  trailingIcon = 'calendar',
}: InputProps): string => {
  const { base, form_group, label_slot, input, leadingIcon_slot, trailingIcon_slot, helptext_slot } = inputClassNames({
    size: size,
  });

  const escapedId = escapeAttribute(id);
  const escapedLabel = escapeHtml(label);
  const escapedPlaceholderText = escapeAttribute(placeholderText || '');
  const escapedHelperLabel = escapeHtml(helperLabel);
  const helperId = `${id}-helper`;

  // Map short icon names from stories to Remix icon classes
  const ICON_MAP: Record<string, string> = {
    person: 'ri-user-line',
    envelope: 'ri-mail-line',
    lock: 'ri-lock-line',
    telephone: 'ri-phone-line',
    calendar: 'ri-calendar-line',
    'credit-card': 'ri-credit-card-line',
    'eye-slash': 'ri-eye-off-line',
  };

  const leadIconClass = ICON_MAP[leadingIcon] || leadingIcon;
  const trailIconClass = ICON_MAP[trailingIcon] || trailingIcon;

  const leadIconMarkup = isLeadIcon && leadingIcon ? `<span class="${leadingIcon_slot()}"><i class="${leadIconClass}"></i></span>` : '';
  const trailIconMarkup = isTrailIcon && trailingIcon ? `<span class="${trailingIcon_slot()}"><i class="${trailIconClass}"></i></span>` : '';
  const requiredMarkup = required ? '<span class="ml-0.5 text-danger-500" aria-hidden="true">*</span>' : '';
  const labelMarkup = isLabel ? `<label for="${escapedId}" class="${label_slot()}">${escapedLabel}${requiredMarkup}</label>` : '';
  const helperTextMarkup = helperText ? `<small id="${escapeAttribute(helperId)}" class="${helptext_slot()}"><span>${escapedHelperLabel}</span></small>` : '';
  const describedBy = helperText ? ` aria-describedby="${escapeAttribute(helperId)}"` : '';

  return formatHtml(`
    <div class="${base()}" data-name="form-group">
      ${labelMarkup}
      <div class="${form_group()}">
        <input
          id="${escapedId}"
          ${name ? `name="${escapeAttribute(name)}"` : ''}
          type="${as}"
          ${autoComplete ? `autocomplete="${escapeAttribute(autoComplete)}"` : ''}
          placeholder="${placeholder ? escapedPlaceholderText : ''}"
          class="${input()}"
          ${required ? 'required' : ''}
          ${autoFocus ? 'autofocus' : ''}
          ${describedBy}
        />
        ${leadIconMarkup}
        ${trailIconMarkup}
        ${helperTextMarkup}
      </div>
    </div>
  `);
};
