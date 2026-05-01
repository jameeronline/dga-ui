import type { Meta, StoryObj } from '@storybook/html-vite';
import type { LoaderProps } from './Loader';
import { createLoader } from './Loader';
import * as OptionsObj from '@/utils/index';

const ICON_OPTIONS = ['primary', 'secondary', 'tertiary', 'danger', 'success', 'info', 'warning'];

const meta: Meta<LoaderProps> = {
  title: 'Components/Loader',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The Loader (spinner) component displays a loading indicator with various sizes and color variants.',
      },
    },
  },
  render: createLoader,
  argTypes: {
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.loaderSizeLabels },
      options: OptionsObj.loaderSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
      defaultValue: 'medium',
      description: 'Size of the spinner',
    },
    type: {
      name: 'Type',
      control: { type: 'radio', labels: OptionsObj.loaderTypeLabels },
      options: OptionsObj.loaderTypeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'circle' },
      },
      defaultValue: 'circle',
      description: 'Shape of the spinner',
    },
    variant: {
      name: 'Variant',
      control: { type: 'select' },
      options: ICON_OPTIONS,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      defaultValue: 'primary',
      description: 'Color variant of the spinner',
    },
  },
  args: {
    size: 'medium',
    type: 'circle',
    variant: 'primary',
  },
};

export default meta;

type Story = StoryObj<typeof createLoader>;

export const Circle: Story = {
  args: {
    type: 'circle',
  },
};

export const Square: Story = {
  args: {
    type: 'square',
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

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const AllVariants: Story = {
  render: () => {
    const sizes = ['small', 'medium', 'large', 'xl'] as const;
    const variants = ['primary', 'secondary', 'success', 'danger', 'info', 'warning'] as const;
    const types = ['circle', 'square'] as const;

    let html = '<div style="display: flex; flex-direction: column; gap: 24px;">';

    html += '<div style="display: flex; gap: 16px; align-items: center;"><strong>Sizes</strong>';
    for (const s of sizes) {
      html += createLoader({ size: s, type: 'circle', variant: 'primary' });
    }
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: center;"><strong>Variants</strong>';
    for (const v of variants) {
      html += createLoader({ size: 'medium', type: 'circle', variant: v });
    }
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: center;"><strong>Types</strong>';
    for (const t of types) {
      html += createLoader({ size: 'medium', type: t, variant: 'primary' });
    }
    html += '</div>';

    html += '</div>';
    return html;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all loader variants: sizes, types, and color variants.',
      },
    },
  },
};