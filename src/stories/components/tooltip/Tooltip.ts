import { tv } from 'tailwind-variants';

import type { TooltipPosition, TooltipVariant, TooltipSizeVariant } from '@/types/index';
import { createButton } from '@/stories/components/button/Button';
import { formatHtml } from '@/utils/code-format';

export interface TooltipProps {
  variant?: TooltipVariant;
  onlyIcon?: boolean;
  position?: TooltipPosition;
  size?: TooltipSizeVariant;
  label?: string;
  tooltipText?: string;
  tooltipDescription?: string;
}

const tooltipClassNames = tv({
  slots: {
    trigger: 'relative inline-flex items-center justify-center cursor-pointer peer overflow-visible',
    item: 'text-sm p-4 absolute z-10 rounded opacity-0 transition-opacity duration-200 pointer-events-none peer-hover:opacity-100 peer-focus-within:opacity-100 [position-anchor:auto] [position-try-options:flip-block flip-inline]',
    arrow: 'absolute w-2 h-2 bg-inherit rotate-45',
  },
  variants: {
    variant: {
      light: { item: 'bg-gray-200 text-gray-800' },
      dark: { item: 'bg-gray-600 text-white' },
    },
    position: {
      top: { item: '[bottom:anchor(top)] [left:anchor(50%)] -translate-x-1/2' },
      bottom: { item: '[top:anchor(bottom)] [left:anchor(50%)] -translate-x-1/2' },
      left: { item: '[right:anchor(left)] [top:anchor(50%)] -translate-y-1/2' },
      right: { item: '[left:anchor(right)] [top:anchor(50%)] -translate-y-1/2' },
    },
  },
  defaultVariants: {
    variant: 'light',
    position: 'top',
  },
});

// const sizeMap: Record<TooltipSizeVariant, 'small' | 'medium' | 'large'> = {
//   small: 'small',
//   default: 'medium',
//   large: 'large',
// };

const arrowPlacement: Record<TooltipPosition, string> = {
  top: 'bottom: -4px; left: 50%; transform: translateX(-50%);',
  bottom: 'top: -4px; left: 50%; transform: translateX(-50%);',
  left: 'right: -4px; top: 50%; transform: translateY(-50%);',
  right: 'left: -4px; top: 50%; transform: translateY(-50%);',
};

let tooltipInstanceId = 0;

function generateIds(): { anchorName: string; tooltipId: string } {
  tooltipInstanceId += 1;
  return {
    anchorName: `--tooltip-trigger-${tooltipInstanceId}`,
    tooltipId: `tooltip-${tooltipInstanceId}`,
  };
}

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createTooltip = ({
  variant = 'light',
  onlyIcon = false,
  position = 'top',
  label = 'Hover me',
  tooltipText = "I'm a tooltip",
  tooltipDescription = 'Max width of tooltips is 240px - text will wrap automatically',
}: TooltipProps): string => {
  const { anchorName, tooltipId } = generateIds();
  const { trigger, item, arrow } = tooltipClassNames({ variant, position });

  const escapedTooltipText = escapeHtml(tooltipText);
  const escapedLabel = escapeHtml(label);
  const escapedTooltipDescription = escapeHtml(tooltipDescription);

  // Render the trigger using the Button component so it is a native,
  // keyboard-focusable <button> with consistent button styling.
  let triggerHtml = createButton({
    label,
    type: 'dark',
    size: 'medium',
    icon: onlyIcon,
    iconOnly: onlyIcon,
    iconName: 'ri-information-line',
  });

  // Add the tooltip's base classes (relative, group, cursor-pointer) to the button.
  triggerHtml = triggerHtml.replace('class="', `class="${trigger()} `);

  // Assign anchor-name and aria attributes to the button.
  const buttonAria = onlyIcon ? `aria-label="${escapedLabel}" aria-describedby="${tooltipId}" ` : `aria-describedby="${tooltipId}" `;
  triggerHtml = triggerHtml.replace('<button ', `<button style="anchor-name: ${anchorName}" ${buttonAria}`);

  // Hide the icon-only icon from assistive technology.
  if (onlyIcon) {
    triggerHtml = triggerHtml.replace('<i class="', '<i aria-hidden="true" class="');
  }

  // Arrow: a rotated square that inherits the tooltip's background color,
  // placed at the outer edge of the tooltip facing the anchor (trigger).
  const arrowHtml = `<span class="${arrow()}" style="${arrowPlacement[position]}"></span>`;

  const tooltipHtml = `<div
    role="tooltip"
    id="${tooltipId}"
    class="${item()}"
    style="position-anchor: ${anchorName}"
  >
    ${arrowHtml}
    ${escapedTooltipText}
    <p class="text-sm text-muted">${escapedTooltipDescription}</p>
  </div>`;

  // Return the trigger and tooltip item as separate sibling elements.
  return formatHtml(`
    <!-- Tooltip Trigger Button -->
    ${triggerHtml}
    <!-- Tooltip Item -->
    ${tooltipHtml}`);
};
