import { formatHtml } from '@/utils/code-format';

export interface RadioProps {
  radios?: string[];
  name?: string;
  isVertical?: boolean;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createRadio = ({ radios = ['Option 1'], name = 'radio-group', isVertical = false }: RadioProps): string => {
  const layoutClass = isVertical ? 'flex-col gap-2' : 'flex-row gap-6 flex-wrap';

  const radiosMarkup = radios
    .map((radioText, index) => {
      const id = `${name}-radio-${index}`;
      const escapedText = escapeHtml(radioText);
      return `
        <div class="relative flex items-center mt-2">
          <input 
            class="w-6 h-6 transition-colors bg-white border-2 rounded-full appearance-none cursor-pointer peer border-slate-500 checked:border-primary-500 checked:bg-primary-500 checked:hover:border-primary-600 checked:hover:bg-primary-600 focus:outline-none checked:focus:border-primary-700 checked:focus:bg-primary-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50" 
            type="radio" 
            value="${radioText.toLowerCase()}" 
            id="${id}" 
            name="${name}" 
          />
          <label 
            class="pl-2 cursor-pointer text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400" 
            for="${id}">
            ${escapedText}
          </label>
          <svg 
            class="absolute left-0 w-6 h-6 transition-all duration-300 scale-50 opacity-0 pointer-events-none fill-white peer-checked:scale-100 peer-checked:opacity-100 peer-disabled:cursor-not-allowed" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            aria-labelledby="title-${index}" 
            role="graphics-symbol"
          >
            <title id="title-${index}">Circle Shape</title>
            <desc>Circle shape to indicate whether the radio input is checked or not.</desc>
            <circle cx="8" cy="8" r="4" />
          </svg>
        </div>`;
    })
    .join('');

  return formatHtml(`<fieldset class="flex ${layoutClass}">${radiosMarkup}</fieldset>`);
};