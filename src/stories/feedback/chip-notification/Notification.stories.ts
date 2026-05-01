import type { Meta, StoryObj } from '@storybook/html-vite';
import type { NotificationProps } from './Notification';
import { createNotificationChip } from './Notification';
import * as OptionsObj from '@/utils/index';

const meta: Meta<NotificationProps> = {
  title: 'Feedback/Notification Chip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Notification Chip component displays update information with a call-to-action link.',
      },
    },
  },
  render: createNotificationChip,
  argTypes: {
    description: {
      name: 'Description',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'With 20 new components!' },
      },
      defaultValue: 'With 20 new components!',
      description: 'Text shown next to the button.',
    },
    isTrail: {
      name: 'Trail Position',
      control: 'boolean',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Position the button at the end.',
    },
    leadingButton: {
      name: 'Leading Button',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Show the leading button.',
    },
    leadingButtonText: {
      name: 'Button Text',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Version 3.40' },
      },
      defaultValue: 'Version 3.40',
      description: 'Text displayed on the leading button.',
      if: { arg: 'leadingButton', truthy: true },
    },
    buttonStyle: {
      name: 'Button Variant',
      control: { type: 'select', labels: OptionsObj.notificationVariantLabels },
      options: OptionsObj.notificationVariantOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      defaultValue: 'primary',
      description: 'Style of the leading button.',
      if: { arg: 'leadingButton', truthy: true },
    },
    anchorText: {
      name: 'Link Text',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
      },
      defaultValue: "Check what's new",
      description: 'Text for the anchor link.',
    },
    link: {
      name: 'Link URL',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
      defaultValue: '#',
      description: 'URL for the anchor link.',
    },
    rounded: {
      name: 'Rounded Button',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Make the button rounded.',
      if: { arg: 'leadingButton', truthy: true },
    },
  },
  args: {
    description: 'With 20 new components!',
    leadingButton: true,
    leadingButtonText: 'Version 3.40',
    buttonStyle: 'primary',
    rounded: false,
    anchorText: "Check what's new",
    link: '#',
    isTrail: false,
  },
};

export default meta;

type Story = StoryObj<typeof createNotificationChip>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    buttonStyle: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    buttonStyle: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    buttonStyle: 'danger',
  },
};

export const Success: Story = {
  args: {
    buttonStyle: 'success',
  },
};

export const Info: Story = {
  args: {
    buttonStyle: 'info',
  },
};

export const Warning: Story = {
  args: {
    buttonStyle: 'warning',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const TrailPosition: Story = {
  args: {
    isTrail: true,
  },
};

export const AllVariants: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'info', 'success', 'danger', 'warning'] as const;
    let html = '<div style="display: flex; flex-direction: column; gap: 16px;">';
    for (const v of variants) {
      html += createNotificationChip({ buttonStyle: v });
    }
    html += '</div>';
    return html;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of notification chip variants.',
      },
    },
  },
};