import { createButton } from '../button/Button';
import type { ButtonGroupSpacing, ButtonColorVariant } from '@/types/index';
import { formatHtml } from '@/utils/code-format';

export interface ButtonGroupProps {
  numberOfButtons?: number;
  buttonTypes?: ButtonColorVariant[];
  iconsOnly?: boolean;
  spacing?: ButtonGroupSpacing;
  buttonLabels?: string[];
}

const spacingClasses: Record<string, string> = {
  none: 'space-x-0',
  small: 'space-x-2',
  medium: 'space-x-4',
  large: 'space-x-6',
  xlarge: 'space-x-8',
};

export const createButtonGroup = ({
  numberOfButtons = 3,
  buttonTypes = ['primary', 'secondary', 'tertiary'],
  iconsOnly = false,
  spacing = 'medium',
  buttonLabels = ['Button 1', 'Button 2', 'Button 3'],
}: ButtonGroupProps): string => {
  const buttons = Array.from({ length: numberOfButtons }).map((_, index) => {
    return createButton({
      label: buttonLabels[index] || `Button ${index + 1}`,
      type: buttonTypes[index] || 'primary',
      iconOnly: iconsOnly,
      iconName: 'ri-star-line',
      iconPosition: 'left',
      size: 'medium',
      rounded: false,
      outline: false,
      full: false,
    });
  });

  return formatHtml(`
    <div class="inline-flex ${spacingClasses[spacing]}">
      ${buttons.join('')}
    </div>
  `);
};
