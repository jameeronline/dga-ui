import { tv } from 'tailwind-variants';

import type { FeatureType, FeaturePosition } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface FeatureItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FeatureItemProps {
  type?: FeatureType;
  iconPosition?: FeaturePosition;
  content?: FeatureItem[];
  isSquare?: boolean;
}

const featuresClassNames = tv({
  slots: {
    itemWrapper: 'col-span-4',
    itemEl: 'flex gap-4',
    icon: 'text-primary-800 text-2xl leading-none',
    itemBody: 'flex flex-col justify-center w-full min-w-0 text-base',
    itemTitle: 'pb-2 mb-2 text-lg font-medium text-slate-700',
    itemDescription: 'text-slate-500',
    iconSubTitle: 'font-medium text-slate-700',
  },
  variants: {
    position: {
      left: { itemEl: 'lg:flex-row items-start' },
      center: { itemEl: 'flex-col items-center text-center' },
      top: { itemEl: 'flex-col items-start' },
    },
    isSquare: {
      true: {
        icon: 'flex items-center justify-center w-10 h-10 shrink-0 p-2 text-white rounded bg-primary-800',
      },
    },
  },
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createFeatureItem = ({
  type = 'one-line',
  iconPosition = 'left',
  content = [],
  isSquare = false,
}: FeatureItemProps): string => {
  if (!content || content.length < 3) {
    throw new Error('Content must contain at least 3 items.');
  }

  const { itemWrapper, itemEl, icon, itemBody, itemTitle, itemDescription, iconSubTitle } = featuresClassNames({
    position: iconPosition,
    isSquare: isSquare,
  });

  const textMarkup = content
    .map((item) => {
      const escapedTitle = escapeHtml(item.title);
      const escapedDescription = escapeHtml(item.description);
      return `
          <div class="${itemWrapper()}">
            <div class="${itemEl()}">
              <div class="${icon()}">
                <i class="${item.iconName}"></i>
              </div>
              <div class="${itemBody()}">
                ${
                  type === 'title'
                    ? `
                        <h3 class="${itemTitle()}">${escapedTitle}</h3>
                        <p class="${itemDescription()}">${escapedDescription}</p>
                      `
                    : `
                        <p class="${itemDescription()}">
                          <strong class="${iconSubTitle()}">${escapedTitle}:</strong>
                          ${escapedDescription}
                        </p>
                      `
                }
              </div>
            </div>
          </div>`;
    })
    .join('');

  return formatHtml(`
      <div class="container px-6 mx-auto">
        <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          ${textMarkup}
        </div>
      </div>`);
};
