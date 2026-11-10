import { tv } from 'tailwind-variants';

import { createButton } from '@/stories/components/button/Button';
import { createCheckbox } from '@/stories/form-elements/checkbox/Checkbox';
import { createInput } from '@/stories/form-elements/input/Input';
import { formatHtml } from '@/utils/code-format';

export type ModalSize = 'sm' | 'md' | 'lg';
export type ModalFormFieldType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'search' | 'date' | 'checkbox';

export interface ModalFormField {
  /** Field name submitted with the form. Also used to build a unique id when `id` is omitted. */
  name: string;
  label: string;
  type?: ModalFormFieldType;
  /** Optional id. Defaults to a unique id derived from the dialog and field name. */
  id?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  /** Helper text rendered below the field. */
  helpText?: string;
}

export interface ModalFormConfig {
  /** Fields rendered inside the form, top to bottom. */
  fields: ModalFormField[];
  /** Submission method. `dialog` closes the modal without reloading the page. */
  method?: 'dialog' | 'get' | 'post';
  /** URL the form is submitted to. */
  action?: string;
}

export interface ModalProps {
  title?: string;
  content?: string;
  showFooter?: boolean;
  primaryButtonText?: string;
  footerButtonText?: string;
  /** Label of the button that opens the dialog. */
  triggerLabel?: string;
  /** When provided, the dialog body is rendered as a form instead of plain text. */
  form?: ModalFormConfig;
  size?: ModalSize;
  scrollable?: boolean;
  fullscreen?: boolean;
  animated?: boolean;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function escapeAttribute(text: string): string {
  return escapeHtml(text).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Used to keep dialog ids unique when several modals share a page.
let modalIdCounter = 0;

const modalClassNames = tv({
  slots: {
    dialog:
      'fixed inset-0 m-auto max-h-[calc(100dvh-4rem)] w-[calc(100%-2rem)] overflow-y-auto rounded-lg border-0 bg-white p-8 text-slate-800 shadow-xl backdrop:bg-slate-900/50',
    header: 'flex items-start justify-between gap-4',
    title: 'm-0 text-xl font-semibold leading-tight text-slate-900',
    closeButton:
      '-m-2 inline-flex size-9 shrink-0 items-center justify-center rounded text-2xl leading-none text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-natural-800',
    content: 'mt-6 text-sm leading-relaxed text-slate-600',
    footer: 'mt-8 flex flex-wrap justify-end gap-3',
    form: 'space-y-1',
  },
  variants: {
    size: {
      sm: { dialog: 'max-w-[300px]' },
      md: { dialog: 'max-w-[500px]' },
      lg: { dialog: 'max-w-[800px]' },
    },
    scrollable: {
      true: {
        // Keep the header and footer fixed while the body scrolls.
        // `open:flex` keeps the closed dialog hidden (an unconditional `flex`
        // would override the browser's `dialog:not([open]) { display: none }`).
        dialog: 'flex-col overflow-y-hidden open:flex',
        header: 'shrink-0',
        content: 'min-h-0 overflow-y-auto',
        footer: 'shrink-0',
      },
    },
    fullscreen: {
      true: {
        // Cover the whole viewport and let the body scroll inside it
        dialog: 'm-0 h-dvh max-h-dvh w-full max-w-none flex-col overflow-y-hidden rounded-none open:flex',
        header: 'shrink-0',
        content: 'min-h-0 flex-1 overflow-y-auto',
        footer: 'shrink-0',
      },
    },
    animated: {
      true: {
        dialog: 'open:animate-modal-in backdrop:animate-modal-fade-in motion-reduce:animate-none',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const createModal = ({
  title = 'Modal Title',
  content = 'This is the modal content. You can add any HTML content here.',
  showFooter = true,
  primaryButtonText = 'Continue',
  footerButtonText = 'Close',
  triggerLabel = 'Open Modal',
  form,
  size = 'md',
  scrollable = false,
  fullscreen = false,
  animated = false,
}: ModalProps = {}): string => {
  const modalId = `modal-${++modalIdCounter}`;
  const formId = `${modalId}-form`;
  const escapedTitle = escapeHtml(title);
  const escapedContent = escapeHtml(content);
  const {
    dialog,
    header,
    title: titleEl,
    closeButton,
    content: contentEl,
    footer,
    form: formEl,
  } = modalClassNames({
    size,
    scrollable,
    fullscreen,
    animated,
  });

  const renderField = (formField: ModalFormField, index: number): string => {
    const fieldId = formField.id ?? `${modalId}-${formField.name}`;

    if (formField.type === 'checkbox') {
      return createCheckbox({
        checkboxes: [formField.label],
        isVertical: true,
        id: fieldId,
        name: formField.name,
        required: formField.required,
        helperText: formField.helpText ?? '',
      });
    }

    return createInput({
      as: formField.type ?? 'text',
      id: fieldId,
      name: formField.name,
      label: formField.label,
      required: formField.required,
      autoComplete: formField.autoComplete,
      autoFocus: index === 0,
      placeholder: true,
      placeholderText: formField.placeholder ?? '',
      helperText: Boolean(formField.helpText),
      helperLabel: formField.helpText ?? '',
    });
  };

  const bodyHtml = form
    ? `<form id="${formId}" method="${form.method ?? 'dialog'}"${form.action ? ` action="${escapeAttribute(form.action)}"` : ''} class="${formEl()}">
        ${form.fields.map((formField, index) => renderField(formField, index)).join('')}
      </form>`
    : `<p>${escapedContent}</p>`;

  const triggerHtml = createButton({
    label: triggerLabel,
    type: 'primary',
    size: 'large',
    command: 'show-modal',
    commandfor: modalId,
  });
  const footerHtml = showFooter
    ? `
        <footer class="${footer()}">
          ${createButton({
            label: primaryButtonText,
            type: 'primary',
            size: 'medium',
            htmlType: form ? 'submit' : 'button',
            form: form ? formId : '',
            command: form ? '' : 'close',
            commandfor: form ? '' : modalId,
          })}
          ${createButton({
            label: footerButtonText,
            type: 'light',
            size: 'medium',
            command: 'close',
            commandfor: modalId,
          })}
        </footer>`
    : '';

  return formatHtml(`
    <!-- Modal Trigger Button -->
    ${triggerHtml}

    <!-- Modal Dialog -->
    <dialog
      id="${modalId}"
      closedby="any"
      aria-labelledby="${modalId}-title"
      class="${dialog()}"
    >
      <!-- Modal Header -->
      <header class="${header()}">
      <!-- Modal Header Title-->
        <h2 id="${modalId}-title" class="${titleEl()}">
          ${escapedTitle}
        </h2>
        <!-- Modal Close Button -->
        <button type="button" commandfor="${modalId}" command="close" aria-label="Close modal" class="${closeButton()}">
          &times;
        </button>
      </header>
      <!-- Modal Content -->
      <div class="${contentEl()}">
        ${bodyHtml}
      </div>
      <!-- Modal Footer -->
      ${footerHtml}
    </dialog>
  `);
};
