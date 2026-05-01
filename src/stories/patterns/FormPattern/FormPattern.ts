import { createInput } from '@/stories/form-elements/input/Input';
import { createTextarea } from '@/stories/form-elements/textarea/Textarea';
import { createSelect } from '@/stories/form-elements/select/Select';

export interface FormInput {
  id: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  options?: { label: string; value: string }[];
  rows?: number;
  helperText?: string;
  defaultValue?: string;
  size?: 'small' | 'default' | 'large';
}

export interface FormActionButton {
  label: string;
  type: 'submit' | 'reset' | 'button';
  variant: 'primary' | 'secondary' | 'danger' | 'success';
}

export interface FormPatternProps {
  layout?: 'single' | 'double';
  title?: string;
  description?: string;
  inputs?: FormInput[];
  showHeader?: boolean;
  showActions?: boolean;
  submitLabel?: string;
  cancelLabel?: string;
  resetLabel?: string;
  actionButtons?: FormActionButton[];
  gap?: 'none' | 'small' | 'medium' | 'large';
}

const gapClasses = {
  none: 'gap-0',
  small: 'gap-2',
  medium: 'gap-4',
  large: 'gap-6',
};

const buttonStyles = {
  primary: 'bg-primary-800 hover:bg-primary-900 text-white px-4 py-2 rounded-md font-medium transition-colors',
  secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-700 px-4 py-2 rounded-md font-medium transition-colors',
  danger: 'bg-danger-600 hover:bg-danger-700 text-white px-4 py-2 rounded-md font-medium transition-colors',
  success: 'bg-success-600 hover:bg-success-700 text-white px-4 py-2 rounded-md font-medium transition-colors',
};

export const createFormPattern = ({
  layout = 'single',
  title = '',
  description = '',
  inputs = [],
  showHeader = true,
  showActions = true,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  resetLabel = 'Reset',
  actionButtons = [],
  gap = 'medium',
}: FormPatternProps): string => {
  const gridClass = layout === 'double' ? 'grid grid-cols-2 gap-4' : '';

  const renderInput = (input: FormInput): string => {
    const inputId = input.id || input.name;
    const requiredMark = input.required ? '*' : '';
    const size = input.size || 'default';

    switch (input.type) {
      case 'textarea':
        return createTextarea({
          size: size,
          helpText: !!input.helperText,
          disabled: input.disabled,
          isError: false,
          label: input.label + (requiredMark ? ' \u00a0*' : ''),
          placeholderText: input.placeholder || '',
          isTextCounter: false,
        });

      case 'select':
        return createSelect({
          size: size,
          helpText: !!input.helperText,
          disabled: input.disabled,
          label: input.label + (requiredMark ? ' \u00a0*' : ''),
          placeholder: input.placeholder || 'Choose an option',
          options: input.options || [],
        });

      case 'checkbox':
        return `
          <div class="mb-4 flex items-center ${layout === 'double' ? 'col-span-2' : ''}">
            <input
              type="checkbox"
              id="${inputId}"
              name="${input.name}"
              ${input.disabled ? 'disabled' : ''}
              class="w-4 h-4 text-primary-600 border-slate-300 rounded focus:ring-primary-500 cursor-pointer"
            />
            <label for="${inputId}" class="ml-2 text-sm text-slate-700 cursor-pointer">${input.label}</label>
          </div>
        `;

      case 'radio':
        return `
          <div class="mb-4 ${layout === 'double' ? 'col-span-2' : ''}">
            <label class="block text-sm font-medium text-slate-700 mb-2">${input.label}${requiredMark ? ' \u00a0*' : ''}</label>
            <div class="mt-2 space-y-2">
              ${input.options?.map((opt, index) => `
                <div class="flex items-center">
                  <input
                    type="radio"
                    id="${inputId}-${index}"
                    name="${input.name}"
                    value="${opt.value}"
                    ${input.disabled ? 'disabled' : ''}
                    class="w-4 h-4 text-primary-600 border-slate-300 focus:ring-primary-500 cursor-pointer"
                  />
                  <label for="${inputId}-${index}" class="ml-2 text-sm text-slate-700 cursor-pointer">${opt.label}</label>
                </div>
              `).join('') || ''}
            </div>
          </div>
        `;

      default:
        return createInput({
          as: input.type,
          size: size === 'small' ? 'small' : size === 'large' ? 'large' : 'default',
          isLabel: true,
          label: input.label + (requiredMark ? ' \u00a0*' : ''),
          placeholder: true,
          placeholderText: input.placeholder || '',
          helperText: !!input.helperText,
          helperLabel: input.helperText || '',
          isLeadIcon: false,
          leadingIcon: '',
          isTrailIcon: false,
          trailingIcon: '',
        });
    }
  };

  const headerHtml = showHeader && title
    ? `
      <div class="mb-6 pb-4 border-b border-slate-200">
        <h2 class="text-xl font-semibold text-slate-900">${title}</h2>
        ${description ? `<p class="mt-1 text-sm text-slate-600">${description}</p>` : ''}
      </div>
    `
    : '';

  const inputsHtml = inputs.map(renderInput).join('');

  const defaultActionsHtml = showActions
    ? `
      <div class="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3 ${layout === 'double' ? 'col-span-2' : ''}">
        <button type="submit" class="${buttonStyles.primary}">${submitLabel}</button>
        ${cancelLabel ? `<button type="button" class="${buttonStyles.secondary}">${cancelLabel}</button>` : ''}
        ${resetLabel ? `<button type="reset" class="${buttonStyles.secondary}">${resetLabel}</button>` : ''}
      </div>
    `
    : '';

  const customActionsHtml = actionButtons.length > 0
    ? `
      <div class="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3 ${layout === 'double' ? 'col-span-2' : ''}">
        ${actionButtons.map((btn) => `<button type="${btn.type}" class="${buttonStyles[btn.variant]}">${btn.label}</button>`).join('')}
      </div>
    `
    : '';

  return `
    <form class="bg-white p-6 rounded-lg shadow-sm border border-slate-200 max-w-2xl">
      ${headerHtml}
      <div class="${gridClass} ${gapClasses[gap]}">
        ${inputsHtml}
      </div>
      ${defaultActionsHtml}
      ${customActionsHtml}
    </form>
  `;
};

export const defaultInputs: FormInput[] = [
  {
    id: 'firstName',
    type: 'text',
    label: 'First Name',
    name: 'firstName',
    placeholder: 'John',
    required: true,
  },
  {
    id: 'lastName',
    type: 'text',
    label: 'Last Name',
    name: 'lastName',
    placeholder: 'Doe',
    required: true,
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email Address',
    name: 'email',
    placeholder: 'john.doe@example.com',
    required: true,
    helperText: 'We will never share your email.',
  },
  {
    id: 'phone',
    type: 'tel',
    label: 'Phone Number',
    name: 'phone',
    placeholder: '+1 (555) 000-0000',
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Message',
    name: 'message',
    placeholder: 'Write your message here...',
    rows: 4,
  },
];