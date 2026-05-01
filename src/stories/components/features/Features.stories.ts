import type { Meta, StoryObj } from '@storybook/html-vite';
import type { FeatureItemProps } from './Features';
import { createFeatureItem } from './Features';
import * as OptionsObj from '@/utils/index';

const meta: Meta<FeatureItemProps> = {
  title: 'Components/Feature Item',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The FeatureItem component displays features with icons and text, supporting various layouts and styles.',
      },
    },
  },
  render: createFeatureItem,
  argTypes: {
    type: {
      name: 'Type',
      control: { type: 'radio', labels: OptionsObj.featureTypeLabels },
      options: OptionsObj.featureTypeOptions,
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'one-line' },
      },
      defaultValue: 'one-line',
      description: 'Feature item type (One line or Title with text)',
    },
    iconPosition: {
      name: 'Icon Position',
      control: { type: 'select', labels: OptionsObj.featurePositionLabels },
      options: OptionsObj.featurePositionOptions,
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'left' },
      },
      defaultValue: 'left',
      description: 'Position of the icon relative to the content',
    },
    content: {
      name: 'Content',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
      description: 'An array of content objects, each containing title, description, and icon information.',
    },
    isSquare: {
      name: 'Square Icon',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Whether the icon should be square or not',
    },
  },
  args: {
    type: 'one-line',
    iconPosition: 'left',
    content: [
      {
        title: 'Responsive',
        description: 'Wind UI ensures your web application looks and functions flawlessly.',
        iconName: 'gift',
      },
      {
        title: 'Effortless Customization',
        description: "Easily customize the library's CSS to match your brand's unique aesthetics.",
        iconName: 'list',
      },
      {
        title: 'Community-Driven Support',
        description: 'Join a thriving community of developers and get regular updates.',
        iconName: 'people',
      },
    ],
    isSquare: false,
  },
};

export default meta;

type Story = StoryObj<typeof createFeatureItem>;

export const OneLineWithIconLeft: Story = {
  args: {
    type: 'one-line',
    iconPosition: 'left',
  },
};

export const TitleWithIconLeft: Story = {
  args: {
    type: 'title',
    iconPosition: 'left',
  },
};

export const OneLineWithSquareIconLeft: Story = {
  args: {
    type: 'one-line',
    iconPosition: 'left',
    isSquare: true,
  },
};

export const TitleWithSquareIconLeft: Story = {
  args: {
    type: 'title',
    iconPosition: 'left',
    isSquare: true,
  },
};

export const OneLineWithIconCenter: Story = {
  args: {
    type: 'one-line',
    iconPosition: 'center',
  },
};

export const TitleWithIconCenter: Story = {
  args: {
    type: 'title',
    iconPosition: 'center',
  },
};

export const OneLineWithSquareIconCenter: Story = {
  args: {
    type: 'one-line',
    iconPosition: 'center',
    isSquare: true,
  },
};

export const TitleWithSquareIconCenter: Story = {
  args: {
    type: 'title',
    iconPosition: 'center',
    isSquare: true,
  },
};

export const OneLineWithIconTop: Story = {
  args: {
    type: 'one-line',
    iconPosition: 'top',
  },
};

export const TitleWithIconTop: Story = {
  args: {
    type: 'title',
    iconPosition: 'top',
  },
};

export const OneLineWithSquareIconTop: Story = {
  args: {
    type: 'one-line',
    iconPosition: 'top',
    isSquare: true,
  },
};

export const TitleWithSquareIconTop: Story = {
  args: {
    type: 'title',
    iconPosition: 'top',
    isSquare: true,
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h4 style="margin-bottom: 12px;">One Line - Left</h4>
          ${createFeatureItem({ type: 'one-line', iconPosition: 'left' })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">Title - Center</h4>
          ${createFeatureItem({ type: 'title', iconPosition: 'center' })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">One Line - Square Icon - Top</h4>
          ${createFeatureItem({ type: 'one-line', iconPosition: 'top', isSquare: true })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all feature item variants: types, positions, and icon styles.',
      },
    },
  },
};