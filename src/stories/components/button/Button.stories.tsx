//types
import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ButtonProps } from './Button';

//element
import { createButton } from './Button';

//utils
import * as OptionsObj from '../../../utils/index';

// Meta configuration
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The button <a href="https://google.com" target="_blank" rel="noopener noreferrer">google.com</a> component is a versatile UI element that supports multiple types, sizes, and configurations. It can be rendered as a button, link, or input and allows for customization with icons, labels, full-width styles, and more.',
      },
      guidelines: (
        <>
          <p>Choose a button style based on the importance of the action.</p>

          <h3>Do</h3>
          <ul>
            <li>Use clear, action-oriented labels.</li>
            <li>Reserve the primary style for the main action.</li>
          </ul>

          <h3>Don't</h3>
          <ul>
            <li>Use buttons for navigation; use a link instead.</li>
          </ul>
        </>
      ),
      accessibility: (
        <>
          <p>Make sure the button has an accessible name that describes its action.</p>
          <ul>
            <li>Ensure it can be operated with a keyboard.</li>
            <li>Keep the keyboard focus indicator visible.</li>
          </ul>
        </>
      ),
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
  },
  render: createButton,
  argTypes: {
    as: {
      name: 'Element Type',
      control: { type: 'select' },
      options: ['button', 'input', 'a'],
      table: {
        category: 'General',
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
      defaultValue: 'button',
      description: 'Select the type of element.',
    },
    href: {
      name: 'Href',
      control: 'text',
      table: {
        category: 'General',
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
      defaultValue: '#',
      description: 'The URL if the button is rendered as a link.',
      if: { arg: 'as', eq: 'a' },
    },
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
      defaultValue: 'Button',
      description: 'The text label displayed inside the button.',
    },
    type: {
      name: 'Type',
      control: { type: 'select', labels: OptionsObj.buttonColorLabels },
      options: OptionsObj.buttonColorOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      defaultValue: 'primary',
      description: 'The style type of the button, which determines its color and background.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.buttonSizeLabels },
      options: OptionsObj.buttonSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
      defaultValue: 'large',
      description: 'The size of the button (affects height, padding, and font).',
    },
    link: {
      name: 'Link Style',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Change the look of the button to a link style.',
      if: { arg: 'as', eq: 'a' },
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
      description: 'Fully rounded corners (rounded-full) or standard rounded corners.',
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
      description: 'If true, the button will have an outline style with a transparent background.',
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
      description: 'If true, the button will be disabled and non-interactive.',
      if: { arg: 'as', neq: 'a' },
    },
    icon: {
      name: 'With Icon',
      control: 'boolean',
      table: {
        category: 'Icon',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'If true, an icon will be displayed inside the button.',
    },
    iconName: {
      name: 'Icon Name',
      control: { type: 'select' },
      options: [
        'hgi hgi-stroke hgi-rounded hgi-home-07',
        'hgi hgi-stroke hgi-rounded hgi-check',
        'hgi hgi-stroke hgi-rounded hgi-trash',
        'hgi hgi-stroke hgi-rounded hgi-notification-01',
        'hgi hgi-stroke hgi-rounded hgi-arrow-down-01',
        'hgi hgi-stroke hgi-rounded hgi-camera-01',
        'hgi hgi-stroke hgi-rounded hgi-cloud',
        'hgi hgi-stroke hgi-rounded hgi-setting-07',
        'hgi hgi-stroke hgi-rounded hgi-heart',
        'hgi hgi-stroke hgi-rounded hgi-home-07',
        'hgi hgi-stroke hgi-rounded hgi-star',
      ],
      table: {
        category: 'Icon',
        type: { summary: 'string' },
        defaultValue: { summary: 'hgi hgi-stroke hgi-rounded hgi-arrow-down-01' },
      },
      defaultValue: 'hgi hgi-stroke hgi-rounded hgi-arrow-down-01',
      description: 'The name of the Huge icon class to be displayed inside the button.',
      if: { arg: 'icon', truthy: true },
    },
    iconPosition: {
      name: 'Icon Position',
      control: { type: 'radio' },
      options: ['left', 'right'],
      table: {
        category: 'Icon',
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
      defaultValue: 'left',
      description: 'Position of the icon relative to the button label (left or right).',
      if: { arg: 'icon', truthy: true },
    },
    iconOnly: {
      name: 'Icon Only',
      control: 'boolean',
      table: {
        category: 'Icon',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'If true, the button will display only an icon with no text label.',
      if: { arg: 'icon', truthy: true },
    },
    full: {
      name: 'Full Width',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'If true, the button will take up the full width of its container.',
    },
  },
  args: {
    type: 'primary',
    size: 'large',
    label: 'Button',
    outline: false,
    rounded: false,
    disabled: false,
    link: false,
    icon: false,
    iconName: 'ri-check-fill',
    iconPosition: 'left',
    iconOnly: false,
    full: false,
    as: 'button',
    href: '#',
  },
};

export default meta;

// Story type
type Story = StoryObj<typeof createButton>;

// Variants
export const Default: Story = {
  args: {
    type: 'primary',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'A large primary button for prominent actions.',
      },
    },
  },
};

export const PrimaryMedium: Story = {
  args: {
    type: 'primary',
    size: 'medium',
  },
};

export const PrimarySmall: Story = {
  args: {
    type: 'primary',
    size: 'small',
  },
};

export const SecondaryLarge: Story = {
  args: {
    type: 'secondary',
    size: 'large',
  },
};

export const TertiaryLarge: Story = {
  args: {
    type: 'tertiary',
    size: 'large',
  },
};

export const DangerLarge: Story = {
  args: {
    type: 'danger',
    size: 'large',
  },
};

export const SuccessLarge: Story = {
  args: {
    type: 'success',
    size: 'large',
  },
};

export const InfoLarge: Story = {
  args: {
    type: 'info',
    size: 'large',
  },
};

export const WarningLarge: Story = {
  args: {
    type: 'warning',
    size: 'large',
  },
};

export const LightLarge: Story = {
  args: {
    type: 'light',
    size: 'large',
  },
};

export const DarkLarge: Story = {
  args: {
    type: 'dark',
    size: 'large',
  },
};

export const LinkLarge: Story = {
  args: {
    size: 'large',
    link: true,
  },
};

export const FullwidthPrimary: Story = {
  args: {
    type: 'primary',
    size: 'large',
    full: true,
  },
};

export const FullwidthDanger: Story = {
  args: {
    type: 'danger',
    size: 'large',
    full: true,
  },
};

export const IconOnlySuccess: Story = {
  args: {
    type: 'success',
    size: 'large',
    icon: true,
    iconOnly: true,
    iconName: 'ri-heart-line',
  },
};

export const OutlineWarning: Story = {
  args: {
    type: 'warning',
    size: 'large',
    outline: true,
  },
};

export const RoundedLight: Story = {
  args: {
    type: 'light',
    size: 'large',
    rounded: true,
  },
};
