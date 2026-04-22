import { createButton } from '../button/Button';

export default {
  title: 'Components / Button Group',
  tags: ['autodocs'],
  render: ({ numberOfButtons, buttonTypes, iconsOnly, spacing, buttonLabels }) => {
    // Define spacing classes based on user selection
    const spacingClasses = {
      none: 'space-x-0',
      small: 'space-x-2',
      medium: 'space-x-4',
      large: 'space-x-6',
      xlarge: 'space-x-8',
    };

    // Generate buttons based on user inputs
    const buttons = Array.from({ length: numberOfButtons }).map((_, index) => {
      return createButton({
        label: buttonLabels[index] || `Button ${index + 1}`,
        type: buttonTypes[index] || 'primary',
        iconOnly: iconsOnly,
        iconName: 'bi-star', // Default icon, can be customized further if needed
        iconPosition: 'left', // Default, can be customizable if needed
        size: 'medium', // Default, can be customizable if needed
        rounded: false, // Default, can be customizable if needed
        outline: false, // Default, can be customizable if needed
        fullwidth: false, // Default, can be customizable if needed
      });
    });

    return `
      <div class="inline-flex ${spacingClasses[spacing]}">
        ${buttons.join('')}
      </div>
    `;
  },
  argTypes: {
    numberOfButtons: {
      control: { type: 'number' },
      defaultValue: 3,
      description: 'The number of buttons in the group.',
    },
    buttonTypes: {
      control: { type: 'object' },
      defaultValue: ['primary', 'secondary', 'tertiary'],
      description: 'An array defining the types for each button.',
    },
    iconsOnly: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, all buttons will display only icons.',
    },
    spacing: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large', 'xlarge'],
      defaultValue: 'medium',
      description: 'The spacing between buttons.',
    },
    buttonLabels: {
      control: { type: 'object' },
      defaultValue: ['Button 1', 'Button 2', 'Button 3'],
      description: 'An array defining the labels for each button.',
    },
  },
  args: {
    numberOfButtons: 3,
    buttonTypes: ['primary', 'secondary', 'tertiary'],
    iconsOnly: false,
    spacing: 'medium',
    buttonLabels: ['Button 1', 'Button 2', 'Button 3'],
  },
};

export const PrimaryGroup = {
  args: {
    numberOfButtons: 3,
    buttonTypes: ['primary', 'primary', 'primary'],
    spacing: 'medium',
    buttonLabels: ['Primary 1', 'Primary 2', 'Primary 3'],
  },
};

export const MixedGroup = {
  args: {
    numberOfButtons: 3,
    buttonTypes: ['primary', 'secondary', 'tertiary'],
    spacing: 'large',
    buttonLabels: ['Primary', 'Secondary', 'Tertiary'],
  },
};

export const IconOnlyGroup = {
  args: {
    numberOfButtons: 3,
    buttonTypes: ['primary', 'success', 'danger'],
    iconsOnly: true,
    spacing: 'small',
    buttonLabels: ['', '', ''], // Labels are empty as this is icon-only
  },
};

export const SpacedGroup = {
  args: {
    numberOfButtons: 4,
    buttonTypes: ['info', 'warning', 'success', 'danger'],
    spacing: 'xlarge',
    buttonLabels: ['Info', 'Warning', 'Success', 'Danger'],
  },
};

export const CompactGroup = {
  args: {
    numberOfButtons: 2,
    buttonTypes: ['light', 'dark'],
    spacing: 'none',
    buttonLabels: ['Light', 'Dark'],
  },
};
