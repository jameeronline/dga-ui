import { fn } from 'storybook/test';

//types
import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ButtonProps } from './Button';

//utils
import * as OptionsObj from '../utils/index';

//element
import { createButton } from './Button';

//default
const meta = {
  title: 'Example/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A simple button component that can be used to trigger actions or navigate users.',
      },
    },
  },
  render: (args: ButtonProps) => createButton(args),
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'The color variant of the button',
      options: OptionsObj.buttonColorOptions,
      control: { type: 'select', labels: OptionsObj.buttonColorLabels },
      table: {
        category: 'Appearance',
        type: {
          summary: OptionsObj.buttonColorOptions.join('|'),
          detail: 'The available color variants for the button',
        },
        defaultValue: { summary: 'primary', detail: "The default color variant is 'primary'" },
      },
    },
    backgroundColor: {
      name: 'Background Color',
      description: 'The background color of the button',
      control: { type: 'color' },
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: '#AAFF00' },
      },
    },
    label: {
      name: 'Label',
      description: 'The text content of the button',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
      },
      control: { type: 'text' },
    },
    onClick: {
      name: 'onClick',
      description: 'The click handler for the button',
      action: 'onClick',
      table: { category: 'Events' },
    },
    primary: {
      name: 'Primary',
      description: 'Whether the button is primary or secondary',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      options: [true, false],
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'Size',
      description: 'The size of the button',
      options: OptionsObj.buttonSizeOptions,
      control: {
        type: 'select',
        labels: OptionsObj.buttonSizeLabels,
      },
      table: {
        category: 'Appearance',
        type: { summary: OptionsObj.buttonSizeOptions.join('|') },
        defaultValue: { summary: 'medium' },
      },
    },
    direction: {
      name: 'Direction',
      description: 'The direction of the button',
      options: OptionsObj.directionOptions,
      control: { type: 'radio', labels: OptionsObj.directionLabels },
      table: {
        category: 'Appearance',
        type: { summary: OptionsObj.directionOptions.join('|') },
        defaultValue: { summary: 'ltr' },
      },
    },
    themes: {
      name: 'Theme',
      description: 'The theme of the button',
      options: OptionsObj.themeOptions,
      control: { type: 'radio', labels: OptionsObj.themeLabels },
      table: {
        category: 'Appearance',
        type: { summary: OptionsObj.themeOptions.join('|') },
        defaultValue: { summary: 'light' },
      },
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;

//button story type
type Story = StoryObj<ButtonProps>;

// Stories for the Button component
export const Primary: Story = {
  args: {
    label: 'Button',
    primary: true,
    variant: 'primary',
    size: 'medium',
    direction: 'ltr',
    themes: 'light',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
