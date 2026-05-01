import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ToggleProps } from './Toggle';
import { createToggleComponent } from './Toggle';
import * as OptionsObj from '@/utils/index';

const meta: Meta<ToggleProps> = {
  title: 'Form Elements/Toggle',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Toggle component allows users to switch between on and off states.',
      },
    },
  },
  render: createToggleComponent,
  argTypes: {
    variant: {
      name: 'Variant',
      control: { type: 'select', labels: OptionsObj.toggleVariantLabels },
      options: OptionsObj.toggleVariantOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      defaultValue: 'primary',
      description: 'Color variant of the toggle.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.toggleSizeLabels },
      options: OptionsObj.toggleSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'Size of the toggle.',
    },
    content: {
      name: 'Content',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
      description: 'Array of toggle items with title, description, and icon.',
    },
    isIcon: {
      name: 'Icon',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show an icon next to the label.',
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
      description: 'Show helper text below the toggle.',
    },
  },
  args: {
    variant: 'primary',
    size: 'default',
    content: [{ title: 'Toggle', description: '', iconName: '' }],
    isIcon: false,
    helpText: false,
  },
};

export default meta;

type Story = StoryObj<typeof createToggleComponent>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const WithIcon: Story = {
  args: {
    isIcon: true,
    content: [{ title: 'Toggle', description: '', iconName: 'wifi' }],
  },
};

export const WithHelpText: Story = {
  args: {
    helpText: true,
    content: [{ title: 'Toggle', description: 'Toggle can also have helper text', iconName: '' }],
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

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const AllVariants: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'danger', 'success', 'info', 'warning'] as const;
    let html = '<div style="display: flex; flex-direction: column; gap: 16px;">';
    for (const v of variants) {
      html += createToggleComponent({ variant: v });
    }
    html += '</div>';
    return html;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of toggle color variants.',
      },
    },
  },
};