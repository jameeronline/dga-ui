export const createList = ({
  content = [], // Array of objects: title, description, icon, avatar, image
  withDescription = false,
  isLeadingItem = true,
  isLeadingItemType = 'avatar', // Options: 'icon', 'avatar', 'image', 'checkbox'
  isTrailingItem = true,
  isTrailingItemType = 'badge', // Options: 'badge', 'text', 'icon', 'checkbox'
}) => {
  // Helper function for leading item
  const renderLeadingItem = (item) => {
    if (!isLeadingItem) return '';

    switch (isLeadingItemType) {
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

  // Helper function for trailing item
  const renderTrailingItem = (item) => {
    if (!isTrailingItem) return '';

    switch (isTrailingItemType) {
      case 'badge':
        return `<span class="inline-flex items-center justify-center h-5 w-5 bg-pink-600 text-xs text-white rounded-full">${item.trailText}</span>`;
      case 'text':
        return `<span class="text-xs text-slate-500">${item.trailText}</span>`;
      case 'icon':
        return `<i class="bi bi-three-dots-vertical text-lg text-slate-400"></i>`;
      case 'checkbox':
        return `<input type="checkbox" class="form-checkbox h-4 w-4 text-primary-800">`;
      default:
        return '';
    }
  };

  // Create list items
  const listItems = content
    .map(
      (item) => `
          <li class="flex items-center gap-4 px-4 py-3">
            <div class="self-start shrink-0">
              ${renderLeadingItem(item)}
            </div>
            <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-center w-full min-w-0">
              <h4 class="w-full text-base truncate text-slate-700">${item.title}</h4>
              ${withDescription ? `<p class="w-full text-sm text-slate-500">${item.description}</p>` : ''}
            </div>
            <div class="text-xs text-slate-400">
              ${renderTrailingItem(item)}
            </div>
          </li>
        `,
    )
    .join('');

  // Return the final component
  return `<ul class="divide-y divide-slate-100">${listItems}</ul>`;
};
