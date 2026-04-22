import { createButton } from '../button/Button';
import { createButtonTv } from '../../test/button/buttonTv';

//console.log(createButtonTv());

export const createCard = ({ title, subtitle, description, withImage, imageUrl, withAvatar, withActionButton, horizontal, type }) => {
  // console.log(
  //   createButton({
  //     as: "button",
  //     label: primaryButtonLabel,
  //     type: type,
  //     size: "small",
  //   }),
  // );

  const cardTypeClasses = {
    basic: 'bg-white text-slate-500',
    eCommerce: 'bg-white text-slate-500',
    socialStory: 'bg-white text-slate-500',
    userProfile: 'bg-white text-slate-500',
    form: 'bg-white text-slate-500',
    imageOverlay: 'bg-gray-700 text-white',
  };

  const layoutClasses = horizontal ? 'flex-row' : 'flex-col';

  const avatar = withAvatar
    ? `<a href="#" class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
            <img src="https://i.pravatar.cc/48" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
          </a>`
    : '';

  const actionButton = withActionButton
    ? `<div class="flex justify-end gap-2 p-2 pt-0">
            <button class="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-emerald-500 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700">
              <span>Read more</span>
            </button>
          </div>`
    : '';

  const image = withImage
    ? `<figure>
          <img src="${imageUrl}" alt="card image" class="aspect-video w-full" />
        </figure>`
    : '';

  // Define card layout for each type
  let cardContent = '';

  switch (type) {
    case 'eCommerce':
      cardContent = `
          ${image}
          <div class="p-6">
            <header class="mb-4">
              <h3 class="text-xl font-medium">${title}</h3>
              <p class="text-slate-400">${subtitle}</p>
            </header>
            <p>${description}</p>
          </div>
          <div class="flex justify-end p-6 pt-0">
            <button class="inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700">
              <span>Order now!</span>
            </button>
          </div>`;
      break;

    case 'socialStory':
      cardContent = `
          <div class="p-6">
            <header class="flex gap-4">
              ${avatar}
              <div>
                <h3 class="text-xl font-medium">${title}</h3>
                <p class="text-sm text-slate-400">${subtitle}</p>
              </div>
            </header>
          </div>
          ${image}
          <div class="p-6">
            <p>${description}</p>
          </div>
          ${actionButton}`;
      break;

    case 'userProfile':
      cardContent = `
          <figure class="p-6 pb-0">
            ${avatar}
          </figure>
          <div class="p-6 text-center">
            <h3 class="text-xl font-medium">${title}</h3>
            <p class="text-slate-400">${subtitle}</p>
          </div>
          <div class="flex justify-end gap-2 p-6 pt-0">
            <button class="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium transition duration-300 rounded bg-emerald-50 text-emerald-500 hover:bg-emerald-100">
              Send message
            </button>
            <button class="inline-flex items-center justify-center flex-1 h-10 gap-2 px-5 text-sm font-medium text-white transition duration-300 rounded bg-emerald-500 hover:bg-emerald-600">
              Add friend
            </button>
          </div>`;
      break;

    case 'basic':
    default:
      cardContent = `
          ${image}
          <div class="p-6">
            <header>
              <h3 class="text-xl font-medium">${title}</h3>
              <p class="text-sm text-slate-400">${subtitle}</p>
            </header>
          </div>`;
      break;
  }

  // Return the full card structure
  return `
      <div class="overflow-hidden rounded shadow-md ${cardTypeClasses[type]} ${layoutClasses}">
        ${cardContent}
      </div>`;
};
