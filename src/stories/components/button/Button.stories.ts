import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ButtonProps } from './Button';
import { createButton } from './Button';
import * as OptionsObj from '@/utils/index';

const ICON_OPTIONS = ['bi-alarm', 'bi-bag', 'bi-bell', 'bi-book', 'bi-camera', 'bi-cloud', 'bi-gear', 'bi-heart', 'bi-house', 'bi-star'];

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A versatile button component that supports multiple variants, sizes, and configurations. The button can be rendered as a standard button element, an input element for forms, or an anchor link for navigation. It includes options for different color schemes, sizes, outline styles, and icon integration.',
      },
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
      description: 'Select the type of element to render.',
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
      description: 'The URL when rendering as a link (anchor element).',
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
      description: 'The visual style variant of the button (determines color and background).',
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
      description: 'The size of the button (affects height, padding, and font size).',
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
      description: 'Renders the button as a text link with underline on hover.',
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
      description: 'Fully rounded corners (pill shape) when enabled.',
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
      description: 'Transparent background with border. Useful for secondary actions.',
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
      description: 'Disables the button and prevents interaction.',
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
      description: 'Display an icon inside the button.',
    },
    iconName: {
      name: 'Icon Name',
      control: { type: 'select' },
      options: ICON_OPTIONS,
      table: {
        category: 'Icon',
        type: { summary: 'string' },
        defaultValue: { summary: 'bi-star' },
      },
      defaultValue: 'bi-star',
      description: 'Bootstrap icon class name to display.',
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
      description: 'Position of the icon relative to the button label.',
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
      description: 'Display only the icon without text label. Button becomes square.',
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
      description: 'Button takes full width of its container.',
    },
  },
  args: {
    as: 'button',
    href: '#',
    label: 'Button',
    type: 'primary',
    size: 'medium',
    outline: false,
    rounded: false,
    disabled: false,
    link: false,
    icon: false,
    iconName: 'bi-star',
    iconPosition: 'left',
    iconOnly: false,
    full: false,
  },
};

export default meta;

type Story = StoryObj<typeof createButton>;

export const Primary: Story = {
  args: {
    type: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons are used for the main action on a page (e.g., Submit, Save, Continue).',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons are used for complementary actions to the primary action (e.g., Cancel, Back).',
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary buttons are used for low-priority actions or when a minimal style is needed (e.g., Learn more).',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'Danger buttons are used for destructive or irreversible actions (e.g., Delete, Remove).',
      },
    },
  },
};

export const Success: Story = {
  args: {
    type: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success buttons are used for positive confirmations (e.g., Confirm, Approve, Publish).',
      },
    },
  },
};

export const Info: Story = {
  args: {
    type: 'info',
  },
  parameters: {
    docs: {
      description: {
        story: 'Info buttons are used for informational actions or neutral prompts (e.g., View details).',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning buttons are used for cautionary actions that require attention (e.g., Review, Verify).',
      },
    },
  },
};

export const Light: Story = {
  args: {
    type: 'light',
  },
  parameters: {
    docs: {
      description: {
        story: 'Light buttons work well on dark backgrounds or when a subtle appearance is needed.',
      },
    },
  },
};

export const Dark: Story = {
  args: {
    type: 'dark',
  },
  parameters: {
    docs: {
      description: {
        story: 'Dark buttons provide high contrast on light backgrounds for prominent actions.',
      },
    },
  },
};

export const Sizes: Story = {
  render: () => {
    return `
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        ${createButton({ label: 'Small', type: 'primary', size: 'small' })}
        ${createButton({ label: 'Medium', type: 'primary', size: 'medium' })}
        ${createButton({ label: 'Large', type: 'primary', size: 'large' })}
        ${createButton({ label: 'Extra Large', type: 'primary', size: 'xl' })}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Available button sizes: small (32px), medium (40px), large (48px), and extra large (64px).',
      },
    },
  },
};

export const OutlineVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        ${createButton({ label: 'Primary', type: 'primary', outline: true })}
        ${createButton({ label: 'Secondary', type: 'secondary', outline: true })}
        ${createButton({ label: 'Danger', type: 'danger', outline: true })}
        ${createButton({ label: 'Success', type: 'success', outline: true })}
        ${createButton({ label: 'Warning', type: 'warning', outline: true })}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline style buttons have transparent backgrounds with colored borders. Use for secondary actions.',
      },
    },
  },
};

export const LinkStyle: Story = {
  args: {
    as: 'a',
    link: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Link-style buttons appear as text with underline on hover. Use for navigation or less prominent actions.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    icon: true,
    iconName: 'bi-star',
    iconPosition: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include Bootstrap Icons. Position icons on the left or right side of the label.',
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    icon: true,
    iconOnly: true,
    iconName: 'bi-heart',
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons display just the icon without text. Useful for toolbar actions or favorite buttons.',
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Rounded buttons have fully rounded (pill) corners for a softer appearance.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    full: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-width buttons span the entire width of their container. Common in mobile interfaces or forms.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons prevent user interaction and appear visually muted.',
      },
    },
  },
};

export const AsInput: Story = {
  args: {
    as: 'input',
    label: 'Click Me',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button can render as an input element for use in forms.',
      },
    },
  },
};

export const AsLink: Story = {
  args: {
    as: 'a',
    href: 'https://example.com',
    label: 'Visit Site',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button can render as an anchor (link) element for navigation.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => {
    const types = ['primary', 'secondary', 'tertiary', 'danger', 'success', 'info', 'warning', 'light', 'dark'] as const;
    const buttons: string[] = [];
    const outlineButtons: string[] = [];
    const disabledButtons: string[] = [];
    for (const t of types) {
      const label = t.charAt(0).toUpperCase() + t.slice(1);
      buttons.push(createButton({ label, type: t }));
      outlineButtons.push(createButton({ label, type: t, outline: true }));
      disabledButtons.push(createButton({ label, type: t, disabled: true }));
    }
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${buttons.join('')}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${outlineButtons.join('')}
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          ${disabledButtons.join('')}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all button types in filled, outline, and disabled states.',
      },
    },
  },
};
