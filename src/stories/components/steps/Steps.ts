import { formatHtml } from '@/utils/code-format';

export interface StepItem {
  label: string;
  completed?: boolean;
  current?: boolean;
}

export interface StepsProps {
  steps?: StepItem[];
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createStepProgressBar = ({ steps = [] }: StepsProps): string => {
  if (steps.length === 0) {
    steps = [
      { label: 'Enter Details', completed: true },
      { label: 'Confirmation', completed: true },
      { label: 'Payment', current: true },
      { label: 'Success' },
    ];
  }

  const stepsHtml = steps
    .map((step) => {
      const escapedLabel = escapeHtml(step.label);
      let statusClass = 'bg-gray-200 text-slate-500';
      let icon = `<span class="font-bold">${step.label.charAt(0)}</span>`;

      if (step.completed) {
        statusClass = 'bg-primary-800 border-2 border-primary-800 text-white';
        icon = '<i class="ri-check-line text-xl leading-none"></i>';
      } else if (step.current) {
        statusClass = 'bg-primary-800 border-2 border-primary-800 text-white';
        icon = '<i class="ri-check-line text-xl leading-none"></i>';
      }

      return `
        <li class="relative flex flex-col items-center justify-center">
          <span class="shrink-0 rounded-full ${statusClass} w-10 h-10 flex justify-center items-center">
            ${icon}
          </span>
          <span class="hidden sm:block">${escapedLabel}</span>
        </li>`;
    })
    .join('');

  return formatHtml(`
    <div>
      <h2 class="sr-only">Steps</h2>
      <div class="after:mt-4 after:block after:h-1 after:absolute after:top-0 after:w-full after:rounded-lg after:bg-gray-200">
        <ol class="grid grid-cols-4 text-sm font-medium text-gray-500">
          ${stepsHtml}
        </ol>
      </div>
    </div>`);
};
