import type { Meta, StoryObj } from '@storybook/html-vite';
import type { TabsProps } from './Tabs';
import { createTab } from './Tabs';
import * as OptionsObj from '@/utils/index';

const meta: Meta<TabsProps> = {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Tabs component displays a tabbed interface for organizing content into separate views.',
      },
    },
  },
  render: createTab,
  argTypes: {
    content: {
      name: 'Content',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
      description: 'The content for each tab, including icon, title, and body.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.tabsSizeLabels },
      options: OptionsObj.tabsSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'The size of the tabs.',
    },
    icon: {
      name: 'Icon',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Show or hide icons in the tabs.',
    },
    fullwidth: {
      name: 'Full Width',
      control: 'boolean',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'If true, tabs will stretch to full width.',
    },
    pills: {
      name: 'Pills',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'If true, tabs will be styled as pills.',
    },
  },
  args: {
    size: 'default',
    icon: true,
    fullwidth: false,
    pills: false,
    content: [
      {
        icon: 'ri-user-fill',
        title: 'User Profile',
        body: 'The User Profile section allows you to manage all your personal information and account settings.',
      },
      {
        icon: 'ri-calendar-event-line',
        title: 'Event Schedule',
        body: 'The Event Schedule section provides a comprehensive overview of your upcoming events.',
      },
      {
        icon: 'ri-camera-fill',
        title: 'Media Gallery',
        body: 'The Media Gallery is your centralized hub for managing all multimedia assets.',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof createTab>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const FullWidth: Story = {
  args: {
    fullwidth: true,
  },
};

export const Pills: Story = {
  args: {
    pills: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    icon: false,
  },
};

export const SmallPills: Story = {
  args: {
    size: 'sm',
    pills: true,
  },
};

export const LargePills: Story = {
  args: {
    size: 'lg',
    pills: true,
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h4 style="margin-bottom: 12px;">Default Tabs</h4>
          ${createTab({})}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Small Tabs</h4>
          ${createTab({ size: 'sm' })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Large Tabs</h4>
          ${createTab({ size: 'lg' })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Pills Style</h4>
          ${createTab({ pills: true })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all tab variants: sizes, styles, and layout options.',
      },
    },
  },
};
