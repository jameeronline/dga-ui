import { formatHtml } from '@/utils/code-format';

export interface ModalProps {
  title?: string;
  content?: string;
  showFooter?: boolean;
  primaryButtonText?: string;
  footerButtonText?: string;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createModal = ({
  title = 'Modal Title',
  content = 'This is the modal content. You can add any HTML content here.',
  showFooter = true,
  primaryButtonText = 'Continue',
  footerButtonText = 'Close',
}: ModalProps): string => {
  const escapedTitle = escapeHtml(title);
  const escapedContent = escapeHtml(content);
  const escapedPrimaryText = escapeHtml(primaryButtonText);
  const escapedFooterText = escapeHtml(footerButtonText);

  const footerHtml = showFooter
    ? `
        <footer class="modal__footer">
          <button class="px-4 py-2 text-sm font-medium text-white bg-primary-800 hover:bg-primary-900 rounded">${escapedPrimaryText}</button>
          <button class="px-4 py-2 text-sm font-medium text-slate-700 bg-gray-100 hover:bg-gray-200 rounded" data-micromodal-close>${escapedFooterText}</button>
        </footer>`
    : '';

  return formatHtml(`
    <button class="px-4 py-2 text-sm font-medium text-white bg-primary-800 hover:bg-primary-900 rounded">
      <span>Open Modal</span>
    </button>
    <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
      <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500/50" tabindex="-1" data-micromodal-close>
        <div class="bg-white p-8 max-h-screen rounded overflow-y-auto box-border max-w-[500px]" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
          <header class="flex justify-between items-center">
            <h2 class="mt-0 mb-0 font-semibold text-xl leading-tight text-blue-800 box-border" id="modal-1-title">
              ${escapedTitle}
            </h2>
            <button class="bg-transparent border-none cursor-pointer text-2xl" aria-label="Close modal" data-micromodal-close>&times;</button>
          </header>
          <main class="mt-8 mb-8 leading-normal" id="modal-1-content">
            <p>${escapedContent}</p>
          </main>
          ${footerHtml}
        </div>
      </div>
    </div>
  `);
};