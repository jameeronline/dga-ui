import { tv } from 'tailwind-variants';

import type { TabsSizeVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface TabItem {
  icon: string;
  title: string;
  body: string;
}

export interface TabsProps {
  content?: TabItem[];
  size?: TabsSizeVariant;
  icon?: boolean;
  fullwidth?: boolean;
  pills?: boolean;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const tabClassNames = tv({
  slots: {
    base: 'max-w-full',
    tabWarpper: 'flex items-center border-b border-slate-200',
    titleWrapper: 'w-auto',
    titleDefault:
      'inline-flex items-center justify-center gap-2 px-6 -mb-px font-medium tracking-wide transition duration-300 border-b-2 rounded-t focus-visible:outline-none whitespace-nowrap hover:border-primary-800 hover:text-primary-800 hover:bg-primary-50 focus:border-primary-900 focus:text-primary-600 focus:bg-primary-50 focus:stroke-primary-800 disabled:cursor-not-allowed disabled:text-slate-500 border-transparen text-slate-700 stroke-slate-700 hover:stroke-primary-800',
    activeTitle:
      'inline-flex items-center justify-center gap-2 px-6 -mb-px font-medium tracking-wide transition duration-300 border-b-2 rounded-t focus-visible:outline-none whitespace-nowrap hover:border-primary-900 hover:text-primary-900 hover:bg-primary-50 focus:border-primary-950 focus:text-primary-950 focus:bg-primary-50 focus:stroke-primary-700 disabled:cursor-not-allowed disabled:border-slate-500',
    iconWrapper: 'w-6 h-6 hidden sm:block',
    body: 'px-6 py-4',
  },
  variants: {
    size: {
      sm: {
        titleDefault: 'h-10 text-sm',
        activeTitle: 'h-10 text-sm',
      },
      default: {
        titleDefault: 'h-12 text-base',
        activeTitle: 'h-12 text-md',
      },
      lg: {
        titleDefault: 'h-16 text-lg',
        activeTitle: 'h-16 text-base',
      },
    },
    fullwidth: {
      true: {
        titleDefault: 'w-full',
        titleWrapper: 'w-full',
        activeTitle: 'w-full',
      },
    },
    pills: {
      true: {
        titleDefault: 'border-none',
        activeTitle:
          'gap-2 px-6 text-white rounded focus-visible:outline-none bg-primary-800 hover:text-white hover:bg-primary-600 focus:bg-primary-700 disabled:cursor-not-allowed disabled:bg-primary-300',
        tabWarpper: 'gap-2 border-none',
      },
      false: { titleDefault: 'rounded-t' },
    },
  },
});

export const createTab = ({
  content = [],
  size = 'default',
  icon = true,
  fullwidth = false,
  pills = false,
}: TabsProps): string => {
  if (content.length === 0) {
    content = [
      {
        icon: 'ri-user-fill',
        title: 'User Profile',
        body: 'The User Profile section allows you to manage all your personal information.',
      },
      {
        icon: 'ri-calendar-event-line',
        title: 'Event Schedule',
        body: 'The Event Schedule section provides a comprehensive overview of your upcoming events.',
      },
      {
        icon: 'ri-camera-fill',
        title: 'Media Gallery',
        body: 'The Media Gallery is your centralized hub for managing all multimedia assets.',
      },
    ];
  }

  const { base, tabWarpper, titleWrapper, titleDefault, activeTitle, iconWrapper, body } = tabClassNames({
    size: size,
    fullwidth: fullwidth,
    pills: pills,
  });

  const tabContainerId = `tab-${Math.random().toString(36).substr(2, 9)}`;

  const tabsHtml = content
    .map((tab, index) => {
      const escapedTitle = escapeHtml(tab.title);
      return `
          <li role="presentation" class="${titleWrapper()}">
            <button 
              data-tab-target="${tabContainerId}-${index}" 
              data-tab-group="${tabContainerId}" 
              class="${index === 0 ? activeTitle() : titleDefault()}" 
              role="tab" 
              aria-setsize="${content.length}" 
              aria-posinset="${index + 1}" 
              tabindex="${index === 0 ? '0' : '-1'}" 
              aria-controls="tab-panel-${index}" 
              aria-selected="${index === 0 ? 'true' : 'false'}"
            >
              ${icon ? `<span class="relative"><i class="${tab.icon} ${iconWrapper()}"></i></span>` : ''}
              <span class="order-2">${escapedTitle}</span>
            </button>
          </li>`;
    })
    .join('');

  const panelsHtml = content
    .map((tab, index) => {
      const escapedBody = escapeHtml(tab.body);
      return `
          <div class="${body()} ${index === 0 ? '' : 'hidden'}" id="${tabContainerId}-${index}" data-tab-content="${tabContainerId}-${index}" data-tab-group="${tabContainerId}" aria-hidden="${index === 0 ? 'false' : 'true'}" role="tabpanel" tabindex="-1">
            <p>${escapedBody}</p>
          </div>`;
    })
    .join('');

  return formatHtml(`
      <section class="${base()}" aria-multiselectable="false">
        <ul class="${tabWarpper()}" role="tablist">
          ${tabsHtml}
        </ul>
        <div>
          ${panelsHtml}
        </div>
      </section>
    `);
};
