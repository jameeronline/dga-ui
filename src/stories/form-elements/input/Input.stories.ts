import type { Meta, StoryObj } from '@storybook/html-vite';
import type { InputProps } from './Input';
import { createInput } from './Input';
import * as OptionsObj from '@/utils/index';

const ICON_OPTIONS = ['person', 'envelope', 'lock', 'telephone', 'calendar', 'credit-card'];

const meta: Meta<InputProps> = {
  title: 'Form Elements/Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Input component allows users to enter text data in a form.',
      },
    },
  },
  render: createInput,
  argTypes: {
    as: {
      name: 'Type',
      control: { type: 'select', labels: OptionsObj.inputTypeLabels },
      options: OptionsObj.inputTypeOptions,
      table: {
        category: 'General',
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
      defaultValue: 'text',
      description: 'The type of input field.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.inputSizeLabels },
      options: OptionsObj.inputSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'The size of the input.',
    },
    isLabel: {
      name: 'Show Label',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Toggle the visibility of the label.',
    },
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Your Name' },
      },
      defaultValue: 'Your Name',
      description: 'The text for the label.',
      if: { arg: 'isLabel', truthy: true },
    },
    placeholder: {
      name: 'Placeholder',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Toggle the visibility of the placeholder.',
    },
    placeholderText: {
      name: 'Placeholder Text',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Enter your name' },
      },
      defaultValue: 'Enter your name',
      description: 'The text for the placeholder.',
      if: { arg: 'placeholder', truthy: true },
    },
    helperText: {
      name: 'Helper Text',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Toggle the visibility of the helper text.',
    },
    helperLabel: {
      name: 'Helper Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
      },
      defaultValue: 'Text field with helper text',
      description: 'The text for the helper label.',
      if: { arg: 'helperText', truthy: true },
    },
    isLeadIcon: {
      name: 'Leading Icon',
      control: 'boolean',
      table: {
        category: 'Icon',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Toggle the visibility of the leading icon.',
    },
    leadingIcon: {
      name: 'Leading Icon Name',
      control: { type: 'select' },
      options: ICON_OPTIONS,
      table: {
        category: 'Icon',
        type: { summary: 'string' },
      },
      defaultValue: 'person',
      description: 'Select the leading icon for the input field.',
      if: { arg: 'isLeadIcon', truthy: true },
    },
    isTrailIcon: {
      name: 'Trailing Icon',
      control: 'boolean',
      table: {
        category: 'Icon',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Toggle the visibility of the trailing icon.',
    },
    trailingIcon: {
      name: 'Trailing Icon Name',
      control: { type: 'select' },
      options: ICON_OPTIONS,
      table: {
        category: 'Icon',
        type: { summary: 'string' },
      },
      defaultValue: 'calendar',
      description: 'Select the trailing icon for the input field.',
      if: { arg: 'isTrailIcon', truthy: true },
    },
  },
  args: {
    as: 'text',
    size: 'default',
    isLabel: true,
    label: 'Your Name',
    placeholder: true,
    placeholderText: 'Enter your name',
    helperText: false,
    helperLabel: 'Text field with helper text',
    isLeadIcon: false,
    leadingIcon: 'person',
    isTrailIcon: false,
    trailingIcon: 'calendar',
  },
};

export default meta;

type Story = StoryObj<typeof createInput>;

export const TextInput: Story = {
  args: {
    as: 'text',
  },
};

export const PasswordInput: Story = {
  args: {
    as: 'password',
    label: 'Password',
    leadingIcon: 'lock',
    trailingIcon: 'eye-slash',
    isLeadIcon: true,
    isTrailIcon: true,
  },
};

export const EmailInput: Story = {
  args: {
    as: 'email',
    label: 'Email',
    placeholderText: 'Enter your email',
    helperText: true,
    helperLabel: 'Please provide a valid email address',
  },
};

export const NumberInput: Story = {
  args: {
    as: 'number',
    label: 'Phone Number',
    leadingIcon: 'telephone',
    isLeadIcon: true,
  },
};

export const DateInput: Story = {
  args: {
    as: 'date',
    label: 'Date of Birth',
    leadingIcon: 'calendar',
    isLeadIcon: true,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Username',
    isLeadIcon: true,
    leadingIcon: 'person',
    isTrailIcon: true,
    trailingIcon: 'envelope',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'large',
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        ${createInput({ as: 'text', label: 'Text Input' })}
        ${createInput({ as: 'email', label: 'Email Input', helperText: true, helperLabel: 'Enter valid email' })}
        ${createInput({ as: 'password', label: 'Password', isLeadIcon: true, isTrailIcon: true })}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of input variants: text, email, and password types.',
      },
    },
  },
};