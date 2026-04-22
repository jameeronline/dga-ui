import { createCard } from './Card';

export default {
  title: 'Components / Card',
  tags: ['autodocs'],
  render: createCard,
  // decorators: [
  //   (Story) => {
  //     const wrapper = document.createElement("div");
  //     wrapper.classList.add("max-w-sm");
  //     wrapper.innerHTML = Story();
  //     return wrapper;
  //   },
  // ],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The card component is flexible and supports various configurations including title, subtitle, description, image, avatar, action buttons, and different layout options.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['basic', 'eCommerce', 'socialStory', 'userProfile', 'form', 'imageOverlay'],
      defaultValue: 'basic',
      description: 'The type of card which affects the overall style.',
    },
    title: {
      control: 'text',
      defaultValue: 'In the Urban Jungle',
      description: 'The main title of the card.',
    },
    subtitle: {
      control: 'text',
      defaultValue: 'By Mary Jay, June 3, 2023',
      description: 'The subtitle or meta information below the title.',
    },
    description: {
      control: 'text',
      defaultValue: 'A simple, yet beautiful way of life that explains the sunny outlook.',
      description: 'The content or body of the card.',
    },
    withImage: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show or hide the image in the card.',
    },
    imageUrl: {
      control: 'text',
      defaultValue: 'https://picsum.photos/id/1081/800/600',
      description: 'The URL of the image displayed on the card.',
      if: { arg: 'withImage', truthy: true },
    },
    withAvatar: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show or hide the avatar in the card.',
    },
    withActionButton: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show or hide the action button at the bottom of the card.',
    },
    horizontal: {
      control: 'boolean',
      defaultValue: false,
      description: 'Set to true for a horizontal card layout.',
    },
  },
  args: {
    type: 'basic',
    title: 'Simple: Card Title',
    subtitle: 'By Mary Jay, June 3, 2023',
    description:
      'There’s nothing better than hiking along the rocky footpaths, accompanied only by the noise of cicadas. As the boat docks in the harbor, gaze upon white and blue houses, craggy cliffs, sweeping olive groves, and the dazzling blues of the Aegean sea.',
    withImage: false,
    imageUrl: 'https://picsum.photos/id/1081/800/600',
    withAvatar: false,
    withActionButton: false,
    horizontal: false,
  },
};

// Example stories
export const BasicCard = {
  args: {},
};

export const ECommerceCard = {
  args: {
    type: 'eCommerce',
    title: 'Exclusive Offer',
    subtitle: '$8.99',
    description: 'Blueberry Superpower: Vanilla Greek Yogurt + Fresh Blueberries + Granola + Honey.',
  },
};

export const SocialStoryCard = {
  args: {
    type: 'socialStory',
    title: 'Life in the City',
    description: 'A vibrant social life awaits you in the urban jungle.',
  },
};

export const UserProfileCard = {
  args: {
    type: 'userProfile',
    title: 'Jane Doe',
    subtitle: 'Full Stack Developer',
    description: 'Lover of code, cats, and coffee.',
  },
};

export const FormCard = {
  args: {
    type: 'form',
    title: 'Sign Up',
    description: 'Join our community by filling out the form.',
    withActionButton: false,
  },
};

export const ImageOverlayCard = {
  args: {
    type: 'imageOverlay',
    title: 'Discover Nature',
    description: 'An immersive experience in the wilderness.',
    imageUrl: 'https://picsum.photos/id/1082/800/600',
    withAvatar: false,
  },
};
