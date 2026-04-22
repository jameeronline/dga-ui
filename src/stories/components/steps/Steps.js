export const createStepProgressBar = () => {
  return `<div>
  <h2 class="sr-only">Steps</h2>

  <div class="after:mt-4 after:block after:h-1 after:absolute after:top-0 after:w-full after:rounded-lg after:bg-gray-200">
    <ol class="grid grid-cols-4 text-sm font-medium text-gray-500">
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
            <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Enter Details </span>
      </li>
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
          <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Confirmation </span>
      </li>
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
          <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Payment </span>
      </li>
      <li class="relative flex flex-col items-center justify-center">
        <span class="shrink-0 rounded-full bg-primary-800 border-2 border-primary-800 text-white w-10 h-10 flex justify-center items-center">
          <i class="bi bi-check text-3xl leading-none"></i>
        </span>
        <span class="hidden sm:block"> Success </span>
      </li>
    </ol>
  </div>
</div>`;
};
