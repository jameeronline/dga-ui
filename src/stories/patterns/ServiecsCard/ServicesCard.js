// CardComponent.js
export function createCardComponent({
  title,
  description,
  showIcon,
  iconName,
}) {
  const icons = {
    default: `
        <svg class="ab-card_head--icon-stroke" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 7H16.3373C16.5818 7 16.7041 7 16.8192 7.02763C16.9213 7.05213 17.0188 7.09253 17.1083 7.14736C17.2092 7.2092 17.2957 7.29568 17.4686 7.46863L21.5314 11.5314C21.7043 11.7043 21.7908 11.7908 21.8526 11.8917C21.9075 11.9812 21.9479 12.0787 21.9724 12.1808C22 12.2959 22 12.4182 22 12.6627V15.5C22 15.9659 22 16.1989 21.9239 16.3827C21.8224 16.6277 21.6277 16.8224 21.3827 16.9239C21.1989 17 20.9659 17 20.5 17M15.5 17H14M14 17V7.2C14 6.0799 14 5.51984 13.782 5.09202C13.5903 4.71569 13.2843 4.40973 12.908 4.21799C12.4802 4 11.9201 4 10.8 4H5.2C4.0799 4 3.51984 4 3.09202 4.21799C2.71569 4.40973 2.40973 4.71569 2.21799 5.09202C2 5.51984 2 6.0799 2 7.2V15C2 16.1046 2.89543 17 4 17M14 17H10M10 17C10 18.6569 8.65685 20 7 20C5.34315 20 4 18.6569 4 17M10 17C10 15.3431 8.65685 14 7 14C5.34315 14 4 15.3431 4 17M20.5 17.5C20.5 18.8807 19.3807 20 18 20C16.6193 20 15.5 18.8807 15.5 17.5C15.5 16.1193 16.6193 15 18 15C19.3807 15 20.5 16.1193 20.5 17.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      `,
    // Add more icons as needed
  };

  return `
      <div class="group flex flex-col justify-start gap-4 p-6 rounded-2xl border bg-white border-slate-200 shadow-xl shadow-slate-100 hover:shadow-2xl hover:shadow-slate-200 relative transition-all duration-300">
        ${showIcon ? `<div class="w-10 h-10 bg-primary-50 inline-flex justify-center items-center rounded-full text-primary-700">${icons[iconName]}</div>` : ""}
        <div class="flex flex-col mt-4 gap-2 line-clamp-2">
          <div class="text-base">
            <h3 class="my-0 font-medium">${title}</h3>
          </div>
          <div class="text-sm text-slate-600">
            <p class="my-0">${description}</p>
          </div>
        </div>
        <div class="flex justify-end">
          <a href="#" class="flex items-center text-primary-800 hover:text-primary-900 no-underline gap-2 font-semibold relative transition-all left-0 duration-300 group-hover:left-2">
            Read More
              <i class="ri-arrow-right-line"></i>
          </a>
        </div>
      </div>
    `;
}
