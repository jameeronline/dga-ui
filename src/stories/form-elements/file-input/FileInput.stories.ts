import type { Meta, StoryObj } from '@storybook/html-vite';
import type { FileInputProps } from './FileInput';
import { createFileUpload } from './FileInput';
import * as OptionsObj from '@/utils/index';

const meta: Meta<FileInputProps> = {
  title: 'Form Elements/File Input',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The File Input component allows users to upload files.',
      },
    },
  },
  render: createFileUpload,
  argTypes: {
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.fileInputSizeLabels },
      options: OptionsObj.fileInputSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'Size of the file input.',
    },
    variant: {
      name: 'Variant',
      control: { type: 'select', labels: OptionsObj.dropdownVariantLabels },
      options: OptionsObj.dropdownVariantOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      defaultValue: 'primary',
      description: 'Color variant of the file input.',
    },
    onlyIcon: {
      name: 'Icon Only',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show only an icon instead of text.',
    },
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Upload a file' },
      },
      defaultValue: 'Upload a file',
      description: 'Label for the file input.',
    },
  },
  args: {
    size: 'default',
    variant: 'primary',
    onlyIcon: false,
    label: 'Upload a file',
  },
};

export default meta;

type Story = StoryObj<typeof createFileUpload>;

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

export const IconOnly: Story = {
  args: {
    onlyIcon: true,
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <h4 style="margin-bottom: 12px;">Sizes</h4>
          ${createFileUpload({ size: 'small' })}
          ${createFileUpload({ size: 'default' })}
          ${createFileUpload({ size: 'large' })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Colors</h4>
          ${createFileUpload({ variant: 'primary' })}
          ${createFileUpload({ variant: 'secondary' })}
          ${createFileUpload({ variant: 'danger' })}
          ${createFileUpload({ variant: 'success' })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Icon Only</h4>
          ${createFileUpload({ onlyIcon: true })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of file input variants: sizes, colors, and icon only.',
      },
    },
  },
};