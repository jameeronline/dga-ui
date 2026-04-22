import { tv } from 'tailwind-variants';
import { createButton } from '../button/Button';

export function createDropdown({ label = 'Choose One', menuItems = [], varient = 'primary', withIcon = true, withDescription = true }) {
  const dropdownClassNames = tv({
    slots: {
      base: 'relative inline-flex',
      buttonEl:
        'inline-flex items-center justify-center h-12 gap-2 px-5 text-md font-medium tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap disabled:cursor-not-allowed disabled:shadow-none',
      menuEl: 'absolute z-20 flex flex-col py-2 mt-1 list-none bg-white rounded shadow-md w-72 top-full shadow-slate-500/10',
      menuItemEl: 'flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 focus:outline-none focus-visible:outline-none',
    },
    variants: {
      varient: {
        primary: {
          buttonEl: 'text-white bg-primary-800 hover:bg-primary-900 focus:bg-primary-950 disabled:border-primary-300 disabled:bg-primary-300',
          menuItemEl: 'hover:bg-primary-50 hover:text-primary-800 focus:bg-primary-50 focus:text-primary-900',
        },
        secondary: {
          buttonEl: 'text-white bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-700 disabled:border-secondary-300 disabled:bg-secondary-300',
          menuItemEl: 'hover:bg-secondary-50 hover:text-secondary-500 focus:bg-secondary-50 focus:text-secondary-600',
        },
        tertiary: {
          buttonEl: 'text-white bg-tertiary-500 hover:bg-tertiary-600 focus:bg-tertiary-700 disabled:border-tertiary-300 disabled:bg-tertiary-300',
          menuItemEl: 'hover:bg-tertiary-50 hover:text-tertiary-500 focus:bg-tertiary-50 focus:text-tertiary-700',
        },
        danger: {
          buttonEl: 'text-white bg-danger-500 hover:bg-danger-600 focus:bg-danger-700 disabled:border-danger-300 disabled:bg-danger-300',
          menuItemEl: 'hover:bg-danger-50 hover:text-danger-500 focus:bg-danger-50 focus:text-danger-700',
        },
        success: {
          buttonEl: 'text-white bg-success-500 hover:bg-success-600 focus:bg-success-700 disabled:border-success-300 disabled:bg-success-300',
          menuItemEl: 'hover:bg-success-50 hover:text-success-500 focus:bg-success-50 focus:text-success-700',
        },
        info: {
          buttonEl: 'text-white bg-info-500 hover:bg-info-600 focus:bg-info-700 disabled:border-info-300 disabled:bg-info-300',
          menuItemEl: 'hover:bg-info-50 hover:text-info-500 focus:bg-info-50 focus:text-info-700',
        },
        warning: {
          buttonEl: 'text-white bg-warning-500 hover:bg-warning-600 focus:bg-warning-700 disabled:border-warning-300 disabled:bg-warning-300',
          menuItemEl: 'hover:bg-warning-50 hover:text-warning-500 focus:bg-warning-50 focus:text-warning-700',
        },
      },
    },
  });

  //  const dropdownContainer = document.createElement("div");
  //dropdownContainer.className = "relative inline-flex";
  const dropdownId = `dropdown-${Math.random().toString(36).substr(2, 9)}`; // Unique ID for each dropdown instance

  const { base, buttonEl, menuEl, menuItemEl } = dropdownClassNames({
    varient: varient,
    withIcon: withIcon,
    withDescription: withDescription,
  });

  // Create button
  const dropdownEl = `<div class="${base()}">
  <button data-dropdown-toggle="${dropdownId}" class="${buttonEl()}">
  <span>${label}</span>
    <span class="relative only:-mx-5">
      <i class="bi bi-chevron-down text-xl"></i>
    </span>
  </button>
  <ul data-dropdown-menu="${dropdownId}" class="${menuEl()}">
    ${menuItems
      .map(
        (item) =>
          `
        <li><a class="${menuItemEl()}" href="javascript: void(0)">
          ${withIcon ? `<i class="bi ${item.icon}"></i>` : ''}
          <span class="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
            <span class="leading-5 truncate">${item.title}</span>
            ${withDescription ? `<span class="text-sm whitespace-normal opacity-70">${item.description}</span>` : ''}
          </span>
        </a></li>
      `,
      )
      .join('')}
      </ul>
  </div>
  `;

  // button.className =
  //   "inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary-500 hover:bg-primary-600 focus:bg-primary-700 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 disabled:shadow-none";
  // button.innerHTML = `
  //   <span>${label}</span>
  //   <span class="relative only:-mx-5">
  //     <i class="bi bi-chevron-down"></i>
  //   </span>
  // `;
  // button.setAttribute("data-dropdown-toggle", dropdownId); // Use `data-` attribute for toggling

  // Create dropdown menu
  // const dropdownMenu = document.createElement("ul");
  // dropdownMenu.className =
  //   "absolute z-20 flex flex-col py-2 mt-1 list-none bg-white rounded shadow-md w-72 top-full shadow-slate-500/10 hidden"; // Hidden by default
  // dropdownMenu.setAttribute("data-dropdown-menu", dropdownId); // Use `data-` attribute to identify the menu

  // Add menu items
  // menuItems.map((item) =>
  //   `
  //     <a class="flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 text-slate-500 hover:bg-primary-50 hover:text-primary-500 focus:bg-primary-50 focus:text-primary-600 focus:outline-none focus-visible:outline-none" href="javascript: void(0)">
  //       ${withIcon ? `<i class="bi ${item.icon}"></i>` : ""}
  //       <span class="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
  //         <span class="leading-5 truncate">${item.title}</span>
  //         ${
  //           withDescription
  //             ? `<span class="text-sm whitespace-normal opacity-70">${item.description}</span>`
  //             : ""
  //         }
  //       </span>
  //     </a>
  //   `.join(""),
  // );

  // Append the button and menu to the container
  //dropdownContainer.appendChild(button);
  //dropdownContainer.appendChild(dropdownMenu);

  return dropdownEl;
}
