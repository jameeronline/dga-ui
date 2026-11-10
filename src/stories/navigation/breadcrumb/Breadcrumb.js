export const createBreadcrumb = ({ links, withLeadingIcon, isElevated, isOnlyLeadingIcon }) => {
  //const elevationClass = isElevated ? 'shadow-md shadow-slate-200' : '';
  const baseBreadcrumbClasses = `flex items-stretch gap-2 px-4 list-none rounded h-14`;

  const arrowIcon = `<i class="hgi hgi-stroke hgi-rounded hgi-arrow-right-01"></i>`;

  const linkWithIcon = (link) => `
      <a href="${link.url}" class="flex items-center gap-2 truncate whitespace-nowrap text-slate-700 transition-colors hover:text-primary-hover">
        <i class="hgi hgi-stroke hgi-rounded hgi-home-07"></i>
        <span class="hidden md:block">${link.name}</span>
      </a>`;

  const linkWithoutIcon = (link) => `
      <a href="${link.url}" class="truncate whitespace-nowrap text-slate-700 transition-colors hover:text-primary-hover">
        ${link.name}
      </a>`;

  const linkOnlyIcon = () => `
      <a href="#" class="w-5 h-5 text-slate-700 hover:text-primary-hover inline-flex items-center justify-center">
        <i class="hgi hgi-stroke hgi-rounded hgi-home-07"></i>
      </a>`;

  const breadcrumbItems = links
    .map((link, index) => {
      // For last item, return plain text instead of a link
      if (index === links.length - 1) {
        return `
          <li class="flex items-center text-sm">
            <span class="text-primary truncate">${link.name}</span>
          </li>`;
      }

      // For first item, apply leading icon or icon-only conditions
      let linkMarkup =
        index === 0 ? (isOnlyLeadingIcon ? linkOnlyIcon() : withLeadingIcon ? linkWithIcon(link) : linkWithoutIcon(link)) : linkWithoutIcon(link);

      return `
        <li class="flex items-center text-sm ${index !== links.length - 1 ? 'gap-2' : ''}">
          ${linkMarkup}
          ${index !== links.length - 1 ? arrowIcon : ''}
        </li>`;
    })
    .join('');

  return `
      <nav aria-label="Breadcrumb">
        <ol class="${baseBreadcrumbClasses}">
          ${breadcrumbItems}
        </ol>
      </nav>
    `;
};
