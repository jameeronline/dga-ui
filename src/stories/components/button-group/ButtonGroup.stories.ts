import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ButtonGroupProps } from './ButtonGroup';
import { createButtonGroup } from './ButtonGroup';
import * as OptionsObj from '@/utils/index';

const meta: Meta<ButtonGroupProps> = {
  title: 'Components/Button Group',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Button Group component displays multiple buttons grouped together with configurable spacing.',
      },
    },
  },
  render: createButtonGroup,
  argTypes: {
    numberOfButtons: {
      name: 'Number of Buttons',
      control: { type: 'number' },
      table: {
        category: 'Content',
        type: { summary: 'number' },
        defaultValue: { summary: 3 },
      },
      defaultValue: 3,
      description: 'The number of buttons in the group.',
    },
    buttonTypes: {
      name: 'Button Types',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
      description: 'An array defining the types for each button.',
    },
    iconsOnly: {
      name: 'Icons Only',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'If true, all buttons will display only icons.',
    },
    spacing: {
      name: 'Spacing',
      control: { type: 'select', labels: OptionsObj.buttonGroupSpacingLabels },
      options: OptionsObj.buttonGroupSpacingOptions,
      table: {
        category: 'Layout',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
      defaultValue: 'medium',
      description: 'The spacing between buttons.',
    },
    buttonLabels: {
      name: 'Button Labels',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
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

export default meta;

type Story = StoryObj<typeof createButtonGroup>;

export const Default: Story = {};

export const PrimaryGroup: Story = {
  args: {
    numberOfButtons: 3,
    buttonTypes: ['primary', 'primary', 'primary'],
    spacing: 'medium',
    buttonLabels: ['Primary 1', 'Primary 2', 'Primary 3'],
  },
};

export const MixedGroup: Story = {
  args: {
    numberOfButtons: 3,
    buttonTypes: ['primary', 'secondary', 'tertiary'],
    spacing: 'large',
    buttonLabels: ['Primary', 'Secondary', 'Tertiary'],
  },
};

export const IconOnlyGroup: Story = {
  args: {
    numberOfButtons: 3,
    buttonTypes: ['primary', 'success', 'danger'],
    iconsOnly: true,
    spacing: 'small',
    buttonLabels: ['', '', ''],
  },
};

export const SpacedGroup: Story = {
  args: {
    numberOfButtons: 4,
    buttonTypes: ['info', 'warning', 'success', 'danger'],
    spacing: 'xlarge',
    buttonLabels: ['Info', 'Warning', 'Success', 'Danger'],
  },
};

export const CompactGroup: Story = {
  args: {
    numberOfButtons: 2,
    buttonTypes: ['light', 'dark'],
    spacing: 'none',
    buttonLabels: ['Light', 'Dark'],
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 12px;">Primary Group</h4>
          ${createButtonGroup({
            numberOfButtons: 3,
            buttonTypes: ['primary', 'primary', 'primary'],
            spacing: 'medium',
            buttonLabels: ['One', 'Two', 'Three'],
          })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Mixed Colors</h4>
          ${createButtonGroup({
            numberOfButtons: 3,
            buttonTypes: ['primary', 'secondary', 'tertiary'],
            spacing: 'medium',
            buttonLabels: ['Primary', 'Secondary', 'Tertiary'],
          })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Icons Only</h4>
          ${createButtonGroup({
            numberOfButtons: 3,
            buttonTypes: ['primary', 'success', 'danger'],
            iconsOnly: true,
            spacing: 'small',
            buttonLabels: ['', '', ''],
          })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Semantic Colors</h4>
          ${createButtonGroup({
            numberOfButtons: 4,
            buttonTypes: ['info', 'warning', 'success', 'danger'],
            spacing: 'medium',
            buttonLabels: ['Info', 'Warning', 'Success', 'Danger'],
          })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all button group variants: colors, spacing, and icon-only.',
      },
    },
  },
};