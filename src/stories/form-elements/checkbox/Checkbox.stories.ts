import type { Meta, StoryObj } from '@storybook/html-vite';
import type { CheckboxProps } from './Checkbox';
import { createCheckbox } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'Form Elements/Checkbox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Checkbox component allows users to select one or multiple options from a set of choices.',
      },
    },
  },
  render: createCheckbox,
  argTypes: {
    checkboxes: {
      name: 'Checkboxes',
      control: { type: 'array' },
      table: {
        category: 'Content',
        type: { summary: 'string[]' },
      },
      description: 'Array of checkbox labels.',
    },
    isVertical: {
      name: 'Vertical',
      control: 'boolean',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Arranges checkboxes vertically when true.',
    },
  },
  args: {
    checkboxes: ['Primary Checkbox', 'Secondary Checkbox', 'Tertiary Checkbox'],
    isVertical: false,
  },
};

export default meta;

type Story = StoryObj<typeof createCheckbox>;

export const Horizontal: Story = {
  args: {
    isVertical: false,
  },
};

export const Vertical: Story = {
  args: {
    isVertical: true,
  },
};

export const Single: Story = {
  args: {
    checkboxes: ['Primary Checkbox'],
    isVertical: false,
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 12px;">Horizontal</h4>
          ${createCheckbox({ checkboxes: ['Option 1', 'Option 2', 'Option 3'], isVertical: false })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Vertical</h4>
          ${createCheckbox({ checkboxes: ['Option 1', 'Option 2', 'Option 3'], isVertical: true })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of checkbox layouts: horizontal and vertical.',
      },
    },
  },
};