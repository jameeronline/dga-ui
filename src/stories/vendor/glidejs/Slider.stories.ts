import type { Meta, StoryObj } from '@storybook/html-vite';
import type { SliderProps } from './Slider';
import { createSlider } from './Slider';

const meta: Meta<SliderProps> = {
  title: 'Vendor / Glide JS',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Glide.js is a lightweight, dependency-free JavaScript ES6 slider and carousel. Its lightweight, flexible and fast. Visit https://glidejs.com for documentation.',
      },
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    container.classList.add('test-slider');
    const slider = createSlider(args);
    container.appendChild(slider);
    return container;
  },
  argTypes: {
    autoplay: {
      name: 'Autoplay',
      control: 'boolean',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Enable automatic slide transitions.',
    },
    animationDuration: {
      name: 'Animation Duration',
      control: 'number',
      table: {
        category: 'Settings',
        type: { summary: 'number' },
        defaultValue: { summary: '2500' },
      },
      defaultValue: 2500,
      description: 'Duration of slide transition in milliseconds.',
    },
    perView: {
      name: 'Per View',
      control: 'number',
      table: {
        category: 'Settings',
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
      defaultValue: 1,
      description: 'Number of slides to show at once.',
    },
    type: {
      name: 'Type',
      control: 'radio',
      options: ['slider', 'carousel'],
      table: {
        category: 'Settings',
        type: { summary: 'string' },
        defaultValue: { summary: 'carousel' },
      },
      defaultValue: 'carousel',
      description: 'Type of slider component.',
    },
    startAt: {
      name: 'Start At',
      control: 'number',
      table: {
        category: 'Settings',
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      defaultValue: 0,
      description: 'Initial slide index to display.',
    },
    gap: {
      name: 'Gap',
      control: 'number',
      table: {
        category: 'Settings',
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
      defaultValue: 10,
      description: 'Gap between slides in pixels.',
    },
    bound: {
      name: 'Bound',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Stop navigation at first/last slide.',
    },
    rewind: {
      name: 'Rewind',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Enable rewinding to first slide after reaching end.',
    },
    keyboard: {
      name: 'Keyboard',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Enable keyboard navigation (arrow keys).',
    },
    hoverpause: {
      name: 'Hover Pause',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Pause autoplay when hovering.',
    },
    items: {
      name: 'Items',
      control: 'object',
      table: {
        category: 'Data',
        type: { summary: 'string[]' },
        defaultValue: { summary: '[]' },
      },
      description: 'Array of HTML content for each slide.',
    },
  },
  args: {
    autoplay: false,
    animationDuration: 2500,
    perView: 1,
    type: 'carousel',
    startAt: 0,
    gap: 10,
    bound: false,
    rewind: true,
    keyboard: true,
    hoverpause: true,
    items: [
      '<img src="https://picsum.photos/id/237/1000/300" alt="" />',
      '<img src="https://picsum.photos/id/227/1000/300" alt="" />',
      '<img src="https://picsum.photos/id/217/1000/300" alt="" />',
      '<img src="https://picsum.photos/id/247/1000/300" alt="" />',
      '<img src="https://picsum.photos/id/257/1000/300" alt="" />',
    ],
  },
};

export default meta;

type Story = StoryObj<typeof createSlider>;

export const Default: Story = {
  name: 'Default',
  args: {
    autoplay: false,
    animationDuration: 2500,
    perView: 1,
    type: 'carousel',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default carousel with navigation arrows.',
      },
    },
  },
};

export const BasicSlider: Story = {
  name: 'Basic Slider',
  args: {
    autoplay: false,
    perView: 1,
    type: 'slider',
    items: [
      'Simple image Slider: Glide.js is a dependency-free JavaScript ES6 slider and carousel. Its lightweight, flexible and fast. Designed to slide. No less, no more',
      'Simple image Slider: Glide.js is a dependency-free JavaScript ES6 slider and carousel. Its lightweight, flexible and fast. Designed to slide. No less, no more',
      'Simple image Slider: Glide.js is a dependency-free JavaScript ES6 slider and carousel. Its lightweight, flexible and fast. Designed to slide. No less, no more',
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple slider type without carousel wrapping.',
      },
    },
  },
};

export const AutoplaySlider: Story = {
  name: 'Autoplay',
  args: {
    autoplay: true,
    animationDuration: 2500,
    perView: 1,
    type: 'carousel',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with automatic slide transitions every 2.5 seconds.',
      },
    },
  },
};

export const MultiSlide: Story = {
  name: 'Multiple Per View',
  args: {
    autoplay: false,
    perView: 2,
    type: 'carousel',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel showing 2 slides at a time.',
      },
    },
  },
};

export const WithGap: Story = {
  name: 'With Gap',
  args: {
    autoplay: false,
    perView: 2,
    gap: 20,
    type: 'carousel',
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with 20px gap between slides.',
      },
    },
  },
};

export const Keyboard: Story = {
  name: 'Keyboard Navigation',
  args: {
    autoplay: false,
    perView: 1,
    type: 'carousel',
    keyboard: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel that responds to keyboard arrow keys for navigation.',
      },
    },
  },
};

export const NoRewind: Story = {
  name: 'No Rewind',
  args: {
    autoplay: false,
    perView: 1,
    type: 'carousel',
    rewind: false,
    bound: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel that stops at first/last slide without rewinding.',
      },
    },
  },
};