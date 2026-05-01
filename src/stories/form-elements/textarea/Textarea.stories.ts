import type { Meta, StoryObj } from '@storybook/html-vite';
import type { TextareaProps } from './Textarea';
import { createTextarea } from './Textarea';
import * as OptionsObj from '@/utils/index';

const meta: Meta<TextareaProps> = {
  title: 'Form Elements/Textarea',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Textarea component allows users to enter multi-line text data.',
      },
    },
  },
  render: createTextarea,
  argTypes: {
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.textareaSizeLabels },
      options: OptionsObj.textareaSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'Controls the size of the textarea.',
    },
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Write your message' },
      },
      defaultValue: 'Write your message',
      description: 'Custom label for the textarea.',
    },
    placeholderText: {
      name: 'Placeholder',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
      },
      defaultValue: 'Write your message',
      description: 'Custom placeholder text for the textarea.',
    },
    helpText: {
      name: 'Helper Text',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Displays help text below the textarea.',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Disables the textarea.',
    },
    isError: {
      name: 'Error State',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Displays an error state for the textarea.',
    },
    isTextCounter: {
      name: 'Text Counter',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Displays a text counter value for the textarea.',
    },
  },
  args: {
    size: 'default',
    helpText: false,
    disabled: false,
    isError: false,
    isTextCounter: false,
    label: 'Write your message',
    placeholderText: 'Write your message',
  },
};

export default meta;

type Story = StoryObj<typeof createTextarea>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithHelperText: Story = {
  args: {
    helpText: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Textarea',
    placeholderText: 'Cannot type here',
    disabled: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Error Textarea',
    placeholderText: 'Enter valid input',
    isError: true,
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        ${createTextarea({ label: 'Default Textarea' })}
        ${createTextarea({ label: 'With Helper Text', helpText: true })}
        ${createTextarea({ label: 'Error State', isError: true })}
        ${createTextarea({ label: 'Disabled', disabled: true })}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of textarea variants: default, helper text, error, and disabled states.',
      },
    },
  },
};