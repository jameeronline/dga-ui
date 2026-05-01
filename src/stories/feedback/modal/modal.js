export function createModal() {
  return `
   <button data-micromodal-trigger="modal-1">
      <span>Open Modal</span>
   </button>
   <div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
    <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-500/50" tabindex="-1" data-micromodal-close>
      <div class="bg-white p-8 max-h-screen rounded overflow-y-auto box-border max-w-[500px]" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <header class="flex justify-between items-center">
          <h2 class="mt-0 mb-0 font-semibold text-xl leading-tight text-blue-800 box-border" id="modal-1-title">
            Micromodal
          </h2>
          <button class="bg-transparent border-none" aria-label="Close modal" data-micromodal-close></button>
        </header>
        <main class="mt-8 mb-8 leading-normal" id="modal-1-content">
          <p>
            Try hitting the <code>tab</code> key and notice how the focus stays within the modal itself. Also, <code>esc</code> to close modal.
          </p>
        </main>
        <footer class="modal__footer">
          <button class="modal__btn modal__btn-primary">Continue</button>
          <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
        </footer>
      </div>
    </div>
  </div>
`;
}
