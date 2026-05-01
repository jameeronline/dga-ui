import type { Meta, StoryObj } from '@storybook/html-vite';
import type { CardProps } from './Card';
import { createCard } from './Card';
import * as OptionsObj from '@/utils/index';

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Card component is flexible and supports various configurations including title, subtitle, description, image, avatar, action buttons, and different layout options.',
      },
    },
  },
  render: createCard,
  argTypes: {
    type: {
      name: 'Type',
      control: { type: 'select', labels: OptionsObj.cardLabels },
      options: OptionsObj.cardOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'basic' },
      },
      defaultValue: 'basic',
      description: 'The type of card which affects the overall style.',
    },
    title: {
      name: 'Title',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Card Title' },
      },
      defaultValue: 'Card Title',
      description: 'The main title of the card.',
    },
    subtitle: {
      name: 'Subtitle',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      defaultValue: '',
      description: 'The subtitle or meta information below the title.',
    },
    description: {
      name: 'Description',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      defaultValue: '',
      description: 'The content or body of the card.',
    },
    withImage: {
      name: 'With Image',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show or hide the image in the card.',
    },
    imageUrl: {
      name: 'Image URL',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'https://picsum.photos/id/1081/800/600' },
      },
      defaultValue: 'https://picsum.photos/id/1081/800/600',
      description: 'The URL of the image displayed on the card.',
      if: { arg: 'withImage', truthy: true },
    },
    withAvatar: {
      name: 'With Avatar',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show or hide the avatar in the card.',
    },
    withActionButton: {
      name: 'With Action Button',
      control: 'boolean',
      table: {
        category: 'Actions',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show or hide the action button at the bottom of the card.',
    },
    horizontal: {
      name: 'Horizontal',
      control: 'boolean',
      table: {
        category: 'Layout',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Set to true for a horizontal card layout.',
    },
  },
  args: {
    type: 'basic',
    title: 'Card Title',
    subtitle: 'By Mary Jay, June 3, 2023',
    description: 'There\'s nothing better than hiking along the rocky footpaths.',
    withImage: false,
    imageUrl: 'https://picsum.photos/id/1081/800/600',
    withAvatar: false,
    withActionButton: false,
    horizontal: false,
  },
};

export default meta;

type Story = StoryObj<typeof createCard>;

export const Basic: Story = {
  args: {
    type: 'basic',
    title: 'Simple Card',
    subtitle: 'By Mary Jay',
    description: 'A basic card with a title and subtitle.',
  },
};

export const ECommerce: Story = {
  args: {
    type: 'eCommerce',
    title: 'Exclusive Offer',
    subtitle: '$8.99',
    description: 'Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries + Granola + Honey.',
  },
};

export const SocialStory: Story = {
  args: {
    type: 'socialStory',
    title: 'Life in the City',
    subtitle: '2 hours ago',
    description: 'A vibrant social life awaits you in the urban jungle.',
    withAvatar: true,
    withActionButton: true,
  },
};

export const UserProfile: Story = {
  args: {
    type: 'userProfile',
    title: 'Jane Doe',
    subtitle: 'Full Stack Developer',
    description: 'Lover of code, cats, and coffee.',
    withAvatar: true,
    withActionButton: true,
  },
};

export const Form: Story = {
  args: {
    type: 'form',
    title: 'Sign Up',
    description: 'Join our community by filling out the form.',
    withActionButton: true,
  },
};

export const ImageOverlay: Story = {
  args: {
    type: 'imageOverlay',
    title: 'Discover Nature',
    subtitle: 'Explore the wilderness',
    description: 'An immersive experience in the wilderness.',
    withImage: true,
    imageUrl: 'https://picsum.photos/id/1082/800/600',
    withAvatar: false,
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px;">
        ${createCard({ type: 'basic', title: 'Basic Card', subtitle: 'Subtitle', description: 'Card description.' })}
        ${createCard({ type: 'eCommerce', title: 'Product Title', subtitle: '$29.99', description: 'Product description here.' })}
        ${createCard({ type: 'userProfile', title: 'John Doe', subtitle: 'Developer', withAvatar: true, withActionButton: true })}
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all card types: basic, eCommerce, social story, and user profile.',
      },
    },
  },
};