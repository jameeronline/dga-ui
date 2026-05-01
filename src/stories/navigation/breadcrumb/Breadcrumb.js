export const createBreadcrumb = ({
  links,
  withLeadingIcon,
  isElevated,
  isOnlyLeadingIcon,
}) => {
  const elevationClass = isElevated ? "shadow-md shadow-slate-200" : "";
  const baseBreadcrumbClasses = `flex items-stretch gap-2 px-4 list-none rounded h-14 bg-white ${elevationClass}`;

  const arrowIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" class="flex-none w-4 h-4 transition-transform stroke-slate-700 md:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
      </svg>`;

  const linkWithIcon = (link) => `
      <a href="${link.url}" class="flex max-w-[20ch] items-center gap-1 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="hidden md:block">${link.name}</span>
      </a>`;

  const linkWithoutIcon = (link) => `
      <a href="${link.url}" class="max-w-[20ch] truncate whitespace-nowrap text-slate-700 transition-colors hover:text-emerald-500">
        ${link.name}
      </a>`;

  const linkOnlyIcon = () => `
      <a href="#" class="w-5 h-5 text-slate-700 hover:text-emerald-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </a>`;

  const breadcrumbItems = links
    .map((link, index) => {
      // For last item, return plain text instead of a link
      if (index === links.length - 1) {
        return `
          <li class="flex items-center">
            <span class="text-slate-400 font-semibold truncate">${link.name}</span>
          </li>`;
      }

      // For first item, apply leading icon or icon-only conditions
      let linkMarkup =
        index === 0
          ? isOnlyLeadingIcon
            ? linkOnlyIcon()
            : withLeadingIcon
              ? linkWithIcon(link)
              : linkWithoutIcon(link)
          : linkWithoutIcon(link);

      return `
        <li class="flex items-center ${index !== links.length - 1 ? "gap-2" : ""}">
          ${linkMarkup}
          ${index !== links.length - 1 ? arrowIcon : ""}
        </li>`;
    })
    .join("");

  return `
      <nav aria-label="Breadcrumb">
        <ol class="${baseBreadcrumbClasses}">
          ${breadcrumbItems}
        </ol>
      </nav>
    `;
};
