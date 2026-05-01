import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ButtonSwitchProps } from './ButtonSwitch';
import { createButtonSwitch } from './ButtonSwitch';
import * as OptionsObj from '@/utils/index';

const meta: Meta<ButtonSwitchProps> = {
  title: 'Components/ButtonSwitch',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A toggle switch component that allows users to switch between two options (e.g., Code mode vs Visual mode).',
      },
    },
  },
  render: createButtonSwitch,
  argTypes: {
    elementId: {
      name: 'Element ID',
      control: 'text',
      table: {
        category: 'General',
        type: { summary: 'string' },
        defaultValue: { summary: 'toggle-component' },
      },
      defaultValue: 'toggle-component',
      description: 'Unique identifier for the switch component.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.buttonSizeLabels },
      options: OptionsObj.buttonSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
      defaultValue: 'medium',
      description: 'Size of the switch buttons.',
    },
    leadingIcon: {
      name: 'Leading Icon',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show icons before the label.',
    },
    trailIcon: {
      name: 'Trail Icon',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show icons after the label.',
    },
    rounded: {
      name: 'Rounded',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Fully rounded buttons.',
    },
  },
  args: {
    elementId: 'toggle-component',
    size: 'medium',
    leadingIcon: false,
    trailIcon: false,
    rounded: true,
  },
};

export default meta;

type Story = StoryObj<typeof createButtonSwitch>;

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

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
};

export const NotRounded: Story = {
  args: {
    rounded: false,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: true,
  },
};

export const WithTrailIcon: Story = {
  args: {
    trailIcon: true,
  },
};

export const CustomLabels: Story = {
  args: {
    labels: [
      { label: 'On', icon: 'ri-toggle-fill' },
      { label: 'Off', icon: 'ri-toggle-line' },
    ],
  },
};

export const AllVariants: Story = {
  render: () => {
    const sizes = ['small', 'medium', 'large', 'xl'] as const;
    const switchContainer = (size: string, label: string) => {
      return `<div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;"><strong>${label}</strong>${createButtonSwitch({ size: size as 'small' | 'medium' | 'large' | 'xl', elementId: `switch-${size}` })}</div>`;
    };
    return `
      <div style="display: flex; flex-direction: column;">
        ${sizes.map((s) => switchContainer(s, s.charAt(0).toUpperCase() + s.slice(1))).join('')}
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <strong>Variants</strong>
          ${createButtonSwitch({ rounded: true, elementId: 'switch-rounded' })}
          ${createButtonSwitch({ rounded: false, elementId: 'switch-not-rounded' })}
        </div>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <strong>With Icons</strong>
          ${createButtonSwitch({ leadingIcon: true, elementId: 'switch-leading' })}
          ${createButtonSwitch({ trailIcon: true, elementId: 'switch-trail' })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all button switch variants: sizes, rounded, and icon options.',
      },
    },
  },
};
