import { createFeatureItem } from './Features';

// Stories configuration
export default {
  title: 'Components/Feature Item',
  tags: ['autodocs'],
  component: createFeatureItem,
  parameters: {
    docs: {
      description: {
        component:
          'The FeatureItem component displays a feature with an icon and text, supporting various layouts and styles. The content argument is an array of objects, with each object containing title, description, and icon information.',
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['one-line', 'title'],
      defaultValue: 'one-line',
      description: 'Feature item type (One line or Title with text)',
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'center', 'top'],
      defaultValue: 'left',
      description: 'Position of the icon relative to the content',
    },
    content: {
      control: 'object',
      description: 'An array of content objects, each containing title, description, and icon information.',
    },
    isSquare: {
      control: 'boolean',
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
        description: "Easily customize the library's CSS to match your brand's unique aesthetics without the need for extensive coding.",
        iconName: 'list',
      },
      {
        title: 'Community-Driven Support',
        description: 'Join a thriving community of developers and get access to regular updates, tutorials, and responsive support for your projects.',
        iconName: 'people',
      },
    ],
    isSquare: false,
  },
};

// Template function for rendering stories
export const OneLineWithIconLeft = {
  args: {
    type: 'one-line',
    iconPosition: 'left',
  },
};

export const TitleWithIconLeft = {
  args: {
    type: 'title',
    iconPosition: 'left',
  },
};

export const OnelineWithSquereIconLeft = {
  args: {
    type: 'one-line',
    iconPosition: 'left',
    isSquare: true,
  },
};

export const TitleWithSquereIconLeft = {
  args: {
    type: 'title',
    iconPosition: 'left',
    isSquare: true,
  },
};

export const OnlineWithIconTopCenter = {
  args: {
    type: 'one-line',
    iconPosition: 'center',
  },
};

export const TitleWithIconTopCenter = {
  args: {
    type: 'title',
    iconPosition: 'center',
  },
};

export const OneLineWithSquareIconLeft = {
  args: {
    type: 'one-line',
    iconPosition: 'center',
    isSquare: true,
  },
};

export const TitleLineWithSquareIconLeft = {
  args: {
    type: 'title',
    iconPosition: 'center',
    isSquare: true,
  },
};

export const OneLineWithIconCenter = {
  args: {
    type: 'one-line',
    iconPosition: 'top',
  },
};

export const TitleLineWithIconCenter = {
  args: {
    type: 'title',
    iconPosition: 'top',
  },
};

export const OneLineWithSquareIconCenter = {
  args: {
    type: 'one-line',
    iconPosition: 'top',
    isSquare: true,
  },
};

export const TitleLineWithSquareIconCenter = {
  args: {
    type: 'title',
    iconPosition: 'top',
    isSquare: true,
  },
};
