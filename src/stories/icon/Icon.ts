import { iconsMap, icons } from '@/icons/icons.generated';

export interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
  title?: string;
  className?: string;
}

export function createIcon(props: IconProps): string {
  const { name, size = 16, color = 'currentColor', title, className = '' } = props;
  const svg = iconsMap[name];

  if (!svg) {
    return `<span style="color: red;">Icon not found: ${name}</span>`;
  }

  const style = `width: ${size}px; height: ${size}px; color: ${color}; display: inline-flex; align-items: center; justify-content: center;`;
  const ariaHidden = title ? 'false' : 'true';
  const ariaLabel = title || name;

  if (title) {
    const id = `icon-title-${name}`;
    const svgWithTitle = svg.replace('<svg', `<svg aria-labelledby="${id}"`).replace('>', `><title id="${id}">${title}</title>`);
    return `<span class="${className}" style="${style}" aria-hidden="${ariaHidden}" role="img" aria-label="${ariaLabel}">${svgWithTitle}</span>`;
  }

  return `<span class="${className}" style="${style}" aria-hidden="${ariaHidden}" role="img" aria-label="${ariaLabel}">${svg}</span>`;
}

export const iconNames = icons.map((icon) => icon.name);

export default { createIcon, iconNames };