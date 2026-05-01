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
    docs: {
      description: {
        component:
          'The button component is a versatile UI element that supports multiple types, sizes, and configurations. It can be rendered as a button, link, or input and allows for customization with icons, labels, full-width styles, and more.',
      },
      guidelines: (
        <div>
          <h3>When to Use</h3>
          <ul>
            <li>Use buttons to trigger actions, submit forms, or navigate within the application</li>
            <li>Primary buttons for main actions (Save, Submit, Continue)</li>
            <li>Secondary buttons for alternative actions (Cancel, Back)</li>
            <li>Tertiary buttons for less prominent actions</li>
          </ul>
          
          <h3>Dos</h3>
          <ul>
            <li>Use clear, action-oriented labels (e.g., "Save", "Delete", "Submit")</li>
            <li>Maintain consistent button placement across similar contexts</li>
            <li>Use icon-only buttons only when the icon meaning is universally understood</li>
            <li>Ensure sufficient color contrast for accessibility</li>
          </ul>
          
          <h3>Don'ts</h3>
          <ul>
            <li>Don't use multiple primary buttons in the same view</li>
            <li>Don't use buttons for navigation - use links instead (or set as="a")</li>
            <li>Don't disable buttons without providing feedback on why they're disabled</li>
            <li>Don't use vague labels like "Click here" or "OK"</li>
          </ul>
        </div>
      ),
      accessibility: (
        <div>
          <h3>Accessibility Requirements</h3>
          <ul>
            <li>Buttons must have accessible names - either through text content or aria-label</li>
            <li>Maintain minimum touch target size of 44x44 pixels</li>
            <li>Ensure color contrast ratio of at least 4.5:1 for normal text</li>
            <li>Use semantic &lt;button&gt; element by default, or &lt;a&gt; for links</li>
          </ul>
          
          <h3>Keyboard Navigation</h3>
          <ul>
            <li>Buttons are focusable and can be activated with Enter or Space key</li>
            <li>Tab order should follow logical reading order</li>
            <li>Disabled buttons should remain focusable but not interactive</li>
          </ul>
          
          <h3>ARIA Considerations</h3>
          <ul>
            <li>Use aria-disabled="true" instead of the disabled attribute if you need to maintain focus</li>
            <li>Add aria-describedby if additional context is needed</li>
            <li>For icon-only buttons, always provide aria-label with descriptive text</li>
          </ul>
        </div>
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
        defaultValue: { summary: 'medium' },
      },
      defaultValue: 'medium',
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
        'ri-alarm-line',
        'ri-shopping-bag-line',
        'ri-notification-line',
        'ri-book-open-line',
        'ri-camera-line',
        'ri-cloud-line',
        'ri-settings-4-line',
        'ri-heart-line',
        'ri-home-line',
        'ri-star-line',
      ],
      table: {
        category: 'Icon',
        type: { summary: 'string' },
        defaultValue: { summary: 'ri-star-line' },
      },
      defaultValue: 'ri-star-line',
      description: 'The name of the Remix icon class to be displayed inside the button.',
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
    size: 'medium',
    outline: false,
    rounded: false,
    disabled: false,
    link: false,
    icon: false,
    iconName: 'ri-star-line',
    iconPosition: 'left',
    iconOnly: false,
    full: false,
    label: 'Button',
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
    size: 'medium',
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
