import type { Meta, StoryObj } from '@storybook/html-vite';
import type { RangeProps } from './Range';
import { createRangeSelect } from './Range';
import * as OptionsObj from '@/utils/index';

const meta: Meta<RangeProps> = {
  title: 'Form Elements/Range',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Range component allows users to select a value from a range of values.',
      },
    },
  },
  render: createRangeSelect,
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Default Range' },
      },
      defaultValue: 'Default Range',
      description: 'Label for the range input.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.rangeSizeLabels },
      options: OptionsObj.rangeSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'Size of the range input.',
    },
    type: {
      name: 'Type',
      control: { type: 'select', labels: OptionsObj.rangeTypeLabels },
      options: OptionsObj.rangeTypeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'Type of range input configuration.',
    },
  },
  args: {
    label: 'Default Range',
    size: 'default',
    type: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof createRangeSelect>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const MinMax: Story = {
  args: {
    type: 'minMax',
  },
};

export const Steps: Story = {
  args: {
    type: 'steps',
  },
};

export const Advanced: Story = {
  args: {
    type: 'advanced',
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        ${createRangeSelect({ label: 'Small', size: 'small' })}
        ${createRangeSelect({ label: 'Default', size: 'default' })}
        ${createRangeSelect({ label: 'Large', size: 'large' })}
        ${createRangeSelect({ label: 'Min/Max', type: 'minMax' })}
        ${createRangeSelect({ label: 'Steps', type: 'steps' })}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of range variants: sizes and types.',
      },
    },
  },
};