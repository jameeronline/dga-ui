//library
import type { Meta, StoryObj } from '@storybook/html-vite';
import type { BadgeProps } from './Badge';

//component
import { createBadge } from './Badge';

//utils
import * as OptionsObj from '../../../utils/index';

//meta
const meta: Meta<BadgeProps> = {
  title: 'UI/Badge',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A badge component that can display text or icons with various styles and colors.',
      },
    },
  },
  render: createBadge,
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'badge' },
      },
      defaultValue: 'badge',
      description: 'The text label to be displayed inside the badge.',
    },
    type: {
      name: 'Type',
      control: { type: 'select', labels: OptionsObj.baseColorLabels },
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      options: OptionsObj.baseColorOptions,
      defaultValue: 'primary',
      description: 'The type of badge to display, which determines its color.',
    },
    rounded: {
      name: 'Rounded',
      control: { type: 'boolean' },
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Determines if the badge should be fully rounded or have standard rounded corners.',
    },
    iconOnly: {
      name: 'Icon Only',
      control: { type: 'boolean' },
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'If true, the badge will only display an icon instead of text.',
    },
  },
  args: {
    type: 'primary',
    rounded: false,
    iconOnly: false,
    label: 'Badge',
  },
};

export default meta;

//badge story type
type Story = StoryObj<typeof createBadge>;

// Variants
export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A primary badge with text.',
      },
    },
  },
  args: {
    type: 'primary',
    rounded: false,
    iconOnly: false,
  },
};

export const SecondaryRounded: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A secondary badge with rounded corners.',
      },
    },
  },
  args: {
    type: 'secondary',
    rounded: true,
    iconOnly: false,
  },
};

export const DangerNotRounded: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A danger badge with standard rounded corners.',
      },
    },
  },
  args: {
    type: 'danger',
    rounded: false,
    iconOnly: false,
  },
};

export const SuccessIconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A success badge displaying only an icon.',
      },
    },
  },
  args: {
    type: 'success',
    rounded: true,
    iconOnly: true,
  },
};

export const InfoNotRoundedIconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An info badge with standard corners displaying only an icon.',
      },
    },
  },
  args: {
    type: 'info',
    rounded: false,
    iconOnly: true,
  },
};

export const WarningRoundedIconOnly: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A warning badge with rounded corners displaying only an icon.',
      },
    },
  },
  args: {
    type: 'warning',
    rounded: true,
    iconOnly: true,
  },
};

export const Light: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A light badge with text.',
      },
    },
  },
  args: {
    type: 'light',
    rounded: true,
    iconOnly: false,
  },
};

export const DarkNotRounded: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A dark badge with standard rounded corners.',
      },
    },
  },
  args: {
    type: 'dark',
    rounded: false,
    iconOnly: false,
  },
};

export const AllVariants: Story = {
  render: () => {
    const types = ['primary', 'secondary', 'tertiary', 'success', 'danger', 'info', 'warning', 'light', 'dark'] as const;
    const badges: string[] = [];
    const roundedBadges: string[] = [];
    const iconOnlyBadges: string[] = [];
    const roundedIconOnlyBadges: string[] = [];
    for (const t of types) {
      const label = t.charAt(0).toUpperCase() + t.slice(1);
      badges.push(createBadge({ label, type: t, rounded: false, iconOnly: false }));
      roundedBadges.push(createBadge({ label, type: t, rounded: true, iconOnly: false }));
      iconOnlyBadges.push(createBadge({ type: t, rounded: false, iconOnly: true }));
      roundedIconOnlyBadges.push(createBadge({ type: t, rounded: true, iconOnly: true }));
    }
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <strong>Default</strong>
          ${badges.join('')}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <strong>Rounded</strong>
          ${roundedBadges.join('')}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <strong>Icon Only</strong>
          ${iconOnlyBadges.join('')}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <strong>Rounded + Icon Only</strong>
          ${roundedIconOnlyBadges.join('')}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all badge types in default, rounded, icon-only, and rounded icon-only states.',
      },
    },
  },
};
