import type { FileInputSizeVariant, DropdownVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface FileInputProps {
  size?: FileInputSizeVariant;
  onlyIcon?: boolean;
  variant?: DropdownVariant;
  label?: string;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const sizeStyles: Record<string, string> = {
  small: 'h-8 px-4 text-xs',
  default: 'h-12 px-6 text-sm',
  large: 'h-16 px-8 text-lg',
};

const variantStyles: Record<string, string> = {
  primary: 'bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 peer-disabled:bg-primary-300',
  secondary: 'bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 peer-disabled:bg-secondary-300',
  tertiary: 'bg-tertiary-500 hover:bg-tertiary-600 focus:bg-tertiary-700 peer-disabled:bg-tertiary-300',
  danger: 'bg-danger-500 hover:bg-danger-600 focus:bg-danger-700 peer-disabled:bg-danger-300',
  success: 'bg-success-500 hover:bg-success-600 focus:bg-success-700 peer-disabled:bg-success-300',
  info: 'bg-info-500 hover:bg-info-600 focus:bg-info-700 peer-disabled:bg-info-300',
  warning: 'bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 peer-disabled:bg-warning-300',
};

const iconSize: Record<string, string> = {
  small: 'text-sm',
  default: 'text-xl',
  large: 'text-3xl',
};

export const createFileUpload = ({
  size = 'default',
  onlyIcon = false,
  variant = 'primary',
  label = 'Upload a file',
}: FileInputProps): string => {
  const escapedLabel = escapeHtml(label);

  const iconHtml = `<i class="ri-upload-line ${iconSize[size]}"></i>`;

  return formatHtml(`
      <div class="relative inline-flex items-center w-full gap-2 my-6 text-sm border rounded border-slate-200 text-slate-500">
        <input id="file-upload" name="file-upload" type="file" class="peer order-2 [&::file-selector-button]:hidden" />
        <label for="file-upload"
          class="inline-flex items-center justify-center ${sizeStyles[size]} ${variantStyles[variant]} gap-3 text-white font-medium tracking-wide transition duration-300 rounded rounded-e-none cursor-pointer whitespace-nowrap focus-visible:outline-none peer-disabled:cursor-not-allowed ">
          ${onlyIcon ? iconHtml : `<span class="order-2">${escapedLabel}</span>`}
          ${onlyIcon ? '' : `<span class="relative">${iconHtml}</span>`}
        </label>
      </div>
    `);
};
