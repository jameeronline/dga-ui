import type { Meta, StoryObj } from '@storybook/html-vite';
import type { AvatarProps } from './Avatar';
import { createAvatar } from './Avatar';
import * as OptionsObj from '@/utils/index';

const meta: Meta<AvatarProps> = {
  title: 'UI/Avatar',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "Avatar displays a user's profile image, icon, or initials in a circular or rounded container.",
      },
    },
  },
  render: createAvatar,
  argTypes: {
    as: {
      name: 'Type',
      control: { type: 'select' },
      options: ['image', 'icon', 'text'],
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'image' },
      },
      defaultValue: 'image',
      description: 'Type of content to display.',
    },
    type: {
      name: 'Color',
      control: { type: 'select', labels: OptionsObj.avatarColorLabels },
      options: OptionsObj.avatarColorOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      defaultValue: 'primary',
      description: 'Background color variant.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.avatarSizeLabels },
      options: OptionsObj.avatarSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
      defaultValue: 'large',
      description: 'Size of the avatar.',
    },
    rounded: {
      name: 'Rounded',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Fully rounded (circle) appearance.',
    },
    outline: {
      name: 'Outline',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Add white border around the avatar.',
    },
    badge: {
      name: 'Badge',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show a status indicator badge.',
    },
    badgePosition: {
      name: 'Badge Position',
      control: { type: 'radio' },
      options: ['top', 'bottom'],
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
      defaultValue: 'top',
      description: 'Position of the badge indicator.',
      if: { arg: 'badge', truthy: true },
    },
  },
  args: {
    as: 'image',
    type: 'primary',
    size: 'large',
    rounded: false,
    outline: false,
    badge: false,
    badgePosition: 'top',
  },
};

export default meta;

type Story = StoryObj<typeof createAvatar>;

export const Image: Story = {
  args: {
    as: 'image',
  },
};

export const Icon: Story = {
  args: {
    as: 'icon',
  },
};

export const Text: Story = {
  args: {
    as: 'text',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const WithBadge: Story = {
  args: {
    badge: true,
    badgePosition: 'top',
  },
};

export const Primary: Story = {
  args: {
    type: 'primary',
    as: 'text',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    as: 'text',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    as: 'text',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    as: 'text',
  },
};

export const Sizes: Story = {
  render: () => {
    return `
      <div style="display: flex; gap: 16px; align-items: center;">
        <!-- Using text type to clearly show size differences -->
        <!-- Small -->
        ${createAvatar({ size: 'small', as: 'text' })}
        <!-- Medium -->
        ${createAvatar({ size: 'medium', as: 'text' })}
        <!-- Large -->
        ${createAvatar({ size: 'large', as: 'text' })}
        <!-- Extra Large -->
        ${createAvatar({ size: 'xl', as: 'text' })}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'All available sizes: small, medium, large, and extra large.',
      },
    },
  },
};

export const Colors: Story = {
  render: () => {
    const colors = ['primary', 'secondary', 'success', 'danger', 'info', 'warning'] as const;
    return `
      <div style="display: flex; gap: 16px; align-items: center;">
        ${colors.map((c) => createAvatar({ type: c, size: 'large', as: 'text' })).join('')}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'All available color variants.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => {
    const colors = ['primary', 'secondary', 'tertiary', 'success', 'danger', 'info', 'warning', 'light', 'dark'] as const;
    const sizes = ['small', 'medium', 'large', 'xl'] as const;
    return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <strong>Types</strong>
          ${createAvatar({ as: 'image' })}
          ${createAvatar({ as: 'icon' })}
          ${createAvatar({ as: 'text' })}
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <strong>Sizes</strong>
          ${sizes.map((s) => createAvatar({ size: s, as: 'text' })).join('')}
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <strong>Colors</strong>
          ${colors.map((c) => createAvatar({ type: c, size: 'large', as: 'text' })).join('')}
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <strong>Variants</strong>
          ${createAvatar({ rounded: true, as: 'text' })}
          ${createAvatar({ outline: true, as: 'text' })}
          ${createAvatar({ badge: true, badgePosition: 'top', as: 'text' })}
          ${createAvatar({ badge: true, badgePosition: 'bottom', as: 'text' })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all avatar variants: types, sizes, colors, and states.',
      },
    },
  },
};
