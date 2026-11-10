import type { Meta, StoryObj } from '@storybook/html-vite';
import type { DropdownProps } from './Dropdown';
import { createDropdown } from './Dropdown';
import * as OptionsObj from '@/utils/index';

const meta: Meta<DropdownProps> = {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  parameters: {
    // Center the story in the canvas
    layout: 'centered',
    docs: {
      // Keep the decorator wrapper out of the code panel snippet
      source: { excludeDecorators: true },
      description: {
        component: 'The Dropdown component displays a button that opens a popover menu of items, anchored to the trigger.',
      },
    },
  },
  decorators: [
    // Give the canvas a predefined minimum height so the trigger stays centered
    (Story) => `<div style="display: flex; align-items: center; justify-content: center; width: 100%; min-height: 600px;">${Story()}</div>`,
  ],
  render: createDropdown,
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Dropdown Menu' },
      },
      defaultValue: 'Dropdown Menu',
      description: 'The label for the dropdown button.',
    },
    menuItems: {
      name: 'Menu Items',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
      description: 'An array of menu items with title, description, and icon.',
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
      description: 'The color variant of the dropdown.',
    },
    withIcon: {
      name: 'With Icon',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Show icons next to menu items.',
    },
    withDescription: {
      name: 'With Description',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Show descriptions below menu item titles.',
    },
  },
  args: {
    label: 'Dropdown Menu',
    variant: 'primary',
    withIcon: true,
    withDescription: true,
    menuItems: [
      {
        title: 'Dashboard Overview',
        description: 'Quick overview of all basic metrics and settings',
        icon: 'hgi hgi-stroke hgi-rounded hgi-pie-chart',
      },
      {
        title: 'Metrics and analytics',
        description: 'Detailed analytic data reviews management',
        icon: 'hgi hgi-stroke hgi-rounded hgi-chart-03',
      },
      {
        title: 'User settings',
        description: 'User settings allow you to configure your email preferences',
        icon: 'hgi hgi-stroke hgi-rounded hgi-setting-07',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof createDropdown>;

export const Default: Story = {};

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

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
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

export const NoIcons: Story = {
  args: {
    withIcon: false,
    withDescription: true,
  },
};

export const NoDescriptions: Story = {
  args: {
    withIcon: true,
    withDescription: false,
  },
};

export const Simple: Story = {
  args: {
    withIcon: false,
    withDescription: false,
    menuItems: [
      { title: 'Dashboard', icon: 'ri-pie-chart-line' },
      { title: 'Analytics', icon: 'ri-line-chart-line' },
      { title: 'Settings', icon: 'ri-settings-4-line' },
    ],
  },
};

export const AllVariants: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'tertiary', 'danger', 'success', 'info', 'warning'] as const;
    let html = '<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start;">';
    for (const v of variants) {
      html += createDropdown({ variant: v });
    }
    html += '</div>';
    return html;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all dropdown color variants.',
      },
    },
  },
};
