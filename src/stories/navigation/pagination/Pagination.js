// paginationComponent.js
export const createPagination = ({
  type = "default", // minimal, default, full option, with help text
  varient = "primary", // primary, overline, underline, outline
  onlyIcon = false, // Only visible if type is 'minimal'
  rounded = false, // True/false
}) => {
  let classes =
    "flex items-center justify-center text-sm list-none md:gap-1 text-slate-700 ";
  let iconOnlyClass = onlyIcon && type === "minimal" ? "hidden" : "";
  let roundedClass = rounded ? "rounded-full" : "rounded";

  let pageItemOuterClasses =
    "inline-flex items-center justify-center h-10 gap-4 px-4 text-sm font-medium transition duration-300 rounded focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-primary-50 hover:text-primary-500 hover:stroke-primary-500 focus:bg-primary-50 focus:text-primary-600 focus:stroke-primary-600";

  let defaultPageItemClasses =
    "items-center justify-center hidden h-10 px-4 text-sm font-medium transition duration-300 rounded focus-visible:outline-none stroke-slate-700 text-slate-700 hover:bg-primary-50 hover:text-primary-500 hover:stroke-primary-500 focus:bg-primary-50 focus:text-primary-600 focus:stroke-primary-600 md:inline-flex";

  let varientClasses = "";

  switch (varient) {
    case "primary":
      varientClasses = "";
      break;
    case "overline":
      varientClasses = " border-t border-t-primary-500 ";
      break;
    case "underline":
      varientClasses = " border-b border-b-primary-500 ";
      break;
    case "outline":
      varientClasses =
        "border divide-x rounded divide-slate-200 border-slate-200 ";
      break;
    default:
      break;
  }

  const pagiantionDefaultMarkup = `
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 1" class="${defaultPageItemClasses}">1</a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Current Page, Page 2" aria-current="true" class="items-center justify-center hidden h-10 px-4 text-sm font-medium text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-primary-500 ring-offset-2 hover:bg-primary-600 hover:stroke-primary-500 focus:bg-primary-700 md:inline-flex">2</a>
    </li>
    <li>
        <a href="javascript:void(0)" class="${defaultPageItemClasses}" aria-label="Goto Page 3">3</a>
    </li>
    <li>
        <span href="javascript:void(0)" class="items-center justify-center hidden h-10 px-4 text-sm font-medium rounded pointer-events-none focus-visible:outline-none text-slate-700 md:inline-flex">...</span>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 97" class="${defaultPageItemClasses}">97</a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 98" class="${defaultPageItemClasses}">98</a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 99" class="${defaultPageItemClasses}">99</a>
    </li>`;

  const paginationWithPrevNextMarkup = `
    <li>
        <a href="javascript:void(0)" aria-label="Goto Previous Page" class="${pageItemOuterClasses}"><span class="sr-only">Previous</span>
            <i class="ri-arrow-left-line"></i>
        </a>
    </li>
    ${pagiantionDefaultMarkup}
    <li>
        <a href="javascript:void(0)" aria-label="Goto Next Page" class="${pageItemOuterClasses}"><span class="sr-only">Next</span>
            <i class="ri-arrow-right-line"></i>
        </a>
    </li>`;

  const fullOptionMarkup = `
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 1" class="${pageItemOuterClasses}"><span class="sr-only">First</span>
            <i class="ri-double-left-line"></i>
        </a>
    </li>
    ${paginationWithPrevNextMarkup}
    <li>
        <a href="javascript:void(0)" aria-label="Goto Next Page 99" class="${pageItemOuterClasses}"><span class="sr-only">Last</span>
            <i class="ri-double-right-line"></i>
        </a>
    </li>`;

  const minimalpagination = `
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 1" class="${pageItemOuterClasses}">
            ${!onlyIcon ? '<span class="order-2">Prev</span>' : ""}
            <i class="ri-arrow-left-line"></i>
        </a>
    </li>
    <li>
        <a href="javascript:void(0)" aria-label="Goto Page 3" class="${pageItemOuterClasses}">
            ${!onlyIcon ? "<span>Next</span>" : ""}
            <i class="ri-arrow-right-line"></i>
        </a>
    </li>`;

  let finalPaginationMarkup = "";

  switch (type) {
    case "minimal":
      finalPaginationMarkup = minimalpagination;
      break;
    case "default":
      finalPaginationMarkup = pagiantionDefaultMarkup;
      break;
    case "with prev next":
      finalPaginationMarkup = paginationWithPrevNextMarkup;
      break;
    case "full option":
      finalPaginationMarkup = fullOptionMarkup;
      break;
    // case "helptext":
    //   finalPaginationMarkup = helptextMarkup;
    //   break;
  }

  // Pagination HTML with options
  return `
    <nav role="navigation" aria-label="Pagination Navigation">
        <ul class="${type == "minimal" ? "inline-flex" : "flex"} items-center justify-center text-sm list-none md:gap-1 text-slate-700 ${varient === "outline" ? varientClasses : ""}">
            ${finalPaginationMarkup}
        </ul>
    </nav>
    `;
};
