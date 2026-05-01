import type { Meta, StoryObj } from '@storybook/html-vite';
import type { TooltipProps } from './Tooltip';
import { createTooltip } from './Tooltip';
import * as OptionsObj from '@/utils/index';

const VARIANT_OPTIONS = [
  'primary',
  'secondary',
  'tertiary',
  'danger',
  'success',
  'info',
  'warning',
  'light',
  'dark',
];

const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Tooltip component displays contextual information on hover, with various positions, sizes, and color variants.',
      },
    },
  },
  render: createTooltip,
  argTypes: {
    variant: {
      name: 'Variant',
      control: { type: 'select' },
      options: VARIANT_OPTIONS,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' },
      },
      defaultValue: 'primary',
      description: 'Color variant of the tooltip.',
    },
    position: {
      name: 'Position',
      control: { type: 'select', labels: OptionsObj.tooltipPositionLabels },
      options: OptionsObj.tooltipPositionOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
      defaultValue: 'top',
      description: 'Position of the tooltip relative to the trigger.',
    },
    size: {
      name: 'Size',
      control: { type: 'select', labels: OptionsObj.tooltipSizeLabels },
      options: OptionsObj.tooltipSizeOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
      defaultValue: 'default',
      description: 'Size of the tooltip.',
    },
    onlyIcon: {
      name: 'Icon Only',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show only an icon as the trigger.',
    },
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Hover me' },
      },
      defaultValue: 'Hover me',
      description: 'The trigger label text.',
      if: { arg: 'onlyIcon', neq: true },
    },
    tooltipText: {
      name: 'Tooltip Text',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: "I'm a tooltip" },
      },
      defaultValue: "I'm a tooltip",
      description: 'The text content of the tooltip.',
    },
  },
  args: {
    variant: 'primary',
    position: 'top',
    size: 'default',
    onlyIcon: false,
    label: 'Hover me',
    tooltipText: "I'm a tooltip",
  },
};

export default meta;

type Story = StoryObj<typeof createTooltip>;

export const Top: Story = {
  args: {
    position: 'top',
  },
};

export const Right: Story = {
  args: {
    position: 'right',
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
};

export const Left: Story = {
  args: {
    position: 'left',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Default: Story = {
  args: {
    size: 'default',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
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

export const IconOnly: Story = {
  args: {
    onlyIcon: true,
  },
};

export const AllVariants: Story = {
  render: () => {
    const positions = ['top', 'right', 'bottom', 'left'] as const;
    const variants = ['primary', 'secondary', 'success', 'danger', 'info', 'warning'] as const;

    let html = '<div style="display: flex; flex-direction: column; gap: 24px;">';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Positions</strong>';
    for (const p of positions) {
      html += createTooltip({ position: p });
    }
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Variants</strong>';
    for (const v of variants) {
      html += createTooltip({ variant: v });
    }
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Sizes</strong>';
    html += createTooltip({ size: 'small' });
    html += createTooltip({ size: 'default' });
    html += createTooltip({ size: 'large' });
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Icon Only</strong>';
    html += createTooltip({ onlyIcon: true });
    html += '</div>';

    html += '</div>';
    return html;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all tooltip variants: positions, sizes, colors, and icon only.',
      },
    },
  },
};