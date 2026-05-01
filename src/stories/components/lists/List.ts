import { formatHtml } from '@/utils/code-format';
import type { ListLeadingItemType, ListTrailingItemType } from '@/types/index';

export interface ListItem {
  title: string;
  description?: string;
  icon?: string;
  avatar?: string;
  image?: string;
  trailText?: string;
  status?: 'online' | 'offline';
}

export interface ListProps {
  content?: ListItem[];
  withDescription?: boolean;
  isLeadingItem?: boolean;
  isLeadingItemType?: ListLeadingItemType;
  isTrailingItem?: boolean;
  isTrailingItemType?: ListTrailingItemType;
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

const renderLeadingItem = (item: ListItem, type: ListLeadingItemType): string => {
  switch (type) {
    case 'icon':
      return `<i class="${item.icon} text-2xl text-primary-800"></i>`;
    case 'avatar':
      return `
            <a href="#" class="relative flex items-center justify-center w-10 h-10 text-white rounded-full">
              <img src="${item.avatar}" alt="${item.title}" title="${item.title}" class="w-full h-full rounded-full" />
              <span class="absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-${item.status === 'online' ? 'emerald' : 'pink'}-500 p-1 text-sm text-white">
                <span class="sr-only">${item.status}</span>
              </span>
            </a>`;
    case 'image':
      return `<img src="${item.image}" alt="${item.title}" class="w-10 h-10 rounded-full" />`;
    case 'checkbox':
      return `<input type="checkbox" class="form-checkbox h-4 w-4 text-primary-800">`;
    default:
      return '';
  }
};

const renderTrailingItem = (item: ListItem, type: ListTrailingItemType): string => {
  switch (type) {
    case 'badge':
      return `<span class="inline-flex items-center justify-center h-5 w-5 bg-pink-600 text-xs text-white rounded-full">${item.trailText}</span>`;
    case 'text':
      return `<span class="text-xs text-slate-500">${item.trailText}</span>`;
    case 'icon':
      return `<i class="ri-more-2-line text-lg text-slate-400"></i>`;
    case 'checkbox':
      return `<input type="checkbox" class="form-checkbox h-4 w-4 text-primary-800">`;
    default:
      return '';
  }
};

export const createList = ({
  content = [],
  withDescription = false,
  isLeadingItem = true,
  isLeadingItemType = 'avatar',
  isTrailingItem = true,
  isTrailingItemType = 'badge',
}: ListProps): string => {
  const listItems = content
    .map((item) => {
      const escapedTitle = escapeHtml(item.title);
      const escapedDescription = item.description ? escapeHtml(item.description) : '';
      return `
          <li class="flex items-center gap-4 px-4 py-3">
            <div class="self-start shrink-0">
              ${isLeadingItem ? renderLeadingItem(item, isLeadingItemType) : ''}
            </div>
            <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
              <h4 class="w-full text-base truncate text-slate-700">${escapedTitle}</h4>
              ${withDescription ? `<p class="w-full text-sm text-slate-500">${escapedDescription}</p>` : ''}
            </div>
            <div class="text-xs text-slate-400">
              ${isTrailingItem ? renderTrailingItem(item, isTrailingItemType) : ''}
            </div>
          </li>`;
    })
    .join('');

  return formatHtml(`<ul class="divide-y divide-slate-100">${listItems}</ul>`);
};
