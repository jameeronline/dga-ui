import type { Meta, StoryObj } from '@storybook/html-vite';
import type { RadioProps } from './Radio';
import { createRadio } from './Radio';

const meta: Meta<RadioProps> = {
  title: 'Form Elements/Radio',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Radio component allows users to select only one option from a set of choices.',
      },
    },
  },
  render: createRadio,
  argTypes: {
    radios: {
      name: 'Radio Options',
      control: { type: 'array' },
      table: {
        category: 'Content',
        type: { summary: 'string[]' },
      },
      description: 'Array of radio option labels.',
    },
    name: {
      name: 'Name',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'radio-group' },
      },
      defaultValue: 'radio-group',
      description: 'Name attribute for the radio buttons group.',
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
      description: 'Arranges radio buttons vertically when true.',
    },
  },
  args: {
    radios: ['Option 1', 'Option 2', 'Option 3'],
    name: 'radio-group',
    isVertical: false,
  },
};

export default meta;

type Story = StoryObj<typeof createRadio>;

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
    radios: ['Option 1'],
    isVertical: false,
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 12px;">Horizontal</h4>
          ${createRadio({ radios: ['Huey', 'Dewey', 'Louie'], name: 'horizontal', isVertical: false })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Vertical</h4>
          ${createRadio({ radios: ['Huey', 'Dewey', 'Louie'], name: 'vertical', isVertical: true })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of radio layouts: horizontal and vertical.',
      },
    },
  },
};