import { tv } from 'tailwind-variants';
export const createTab = ({ content, size = 'default', icon = true, fullwidth = false, pills = false }) => {
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

  const { base, tabWarpper, titleWrapper, titleDefault, activeTitle, iconWrapper, body } = tabClassNames({
    size: size,
    fullwidth: fullwidth,
    pills: pills,
    icon: icon,
  });

  const tabContainer = document.createElement('div');
  const tabContainerId = `tab-${Math.random().toString(36).substr(2, 9)}`; // Unique ID for each tab instance
  tabContainer.innerHTML = `
        <section class="${base()}" aria-multiselectable="false">
          <ul class="${tabWarpper()}" role="tablist">
            ${content
              .map(
                (tab, index) => `
              <li role="presentation" class="${titleWrapper()}">
                <button 
                  data-tab-target="${tabContainerId}-${index}" 
                  data-tab-group = "${tabContainerId}" 
                  class="${index === 0 ? activeTitle() : titleDefault()}" 
                  role="tab" 
                  aria-setsize="${content.length}" 
                  aria-posinset="${index + 1}" 
                  tabindex="${index === 0 ? '0' : '-1'}" 
                  aria-controls="tab-panel-${index}" 
                  aria-selected="${index === 0 ? 'true' : 'false'}"
                >
                  ${icon ? `<span class="relative"><i class="bi ${tab.icon} ${iconWrapper()}"></i></span>` : ''}
                  <span class="order-2">${tab.title}</span>
                </button>
              </li>
            `,
              )
              .join('')}
          </ul>
          <div>
            ${content
              .map(
                (tab, index) => `
              <div class="${body()} ${index === 0 ? '' : 'hidden'}" id="${tabContainerId}-${index}" data-tab-content="${tabContainerId}-${index}" data-tab-group="${tabContainerId}" aria-hidden="${index === 0 ? 'false' : 'true'}" role="tabpanel" tabindex="-1">
                <p>${tab.body}</p>
              </div>
            `,
              )
              .join('')}
          </div>
        </section>
      `;
  return tabContainer;
};
