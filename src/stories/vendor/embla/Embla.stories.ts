import type { Meta, StoryObj } from '@storybook/html-vite';
import type { EmblaProps } from './Embla';
import { createEmbla } from './Embla';

const meta: Meta<EmblaProps> = {
  title: 'Vendor / Embla Carousel',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Embla Carousel is a lightweight, dependency-free, and framework-agnostic carousel library with fluid motion and precise swipe handling. Visit https://www.embla-carousel.com for documentation.',
      },
    },
  },
  render: (args) => {
    const container = document.createElement('div');
    container.className = 'embla-wrapper';
    const embla = createEmbla(args);
    container.appendChild(embla);
    return container;
  },
  argTypes: {
    loop: {
      name: 'Loop',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Enable infinite loop scrolling.',
    },
    speed: {
      name: 'Speed',
      control: 'number',
      table: {
        category: 'Settings',
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
      defaultValue: 10,
      description: 'Animation speed (lower = faster).',
    },
    slidesPerPage: {
      name: 'Slides Per Page',
      control: 'number',
      table: {
        category: 'Settings',
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
      defaultValue: 1,
      description: 'Number of slides to show per page.',
    },
    dragFree: {
      name: 'Drag Free',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Enable drag-free scrolling without snapping.',
    },
    containScroll: {
      name: 'Contain Scroll',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Prevent scroll snapping gaps.',
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
    loop: true,
    speed: 10,
    slidesPerPage: 1,
    dragFree: false,
    containScroll: false,
    items: [
      '<div class="bg-blue-500 text-white p-8 text-center rounded-lg"><h3 class="text-2xl font-bold">Slide 1</h3><p class="mt-2">First slide content</p></div>',
      '<div class="bg-green-500 text-white p-8 text-center rounded-lg"><h3 class="text-2xl font-bold">Slide 2</h3><p class="mt-2">Second slide content</p></div>',
      '<div class="bg-purple-500 text-white p-8 text-center rounded-lg"><h3 class="text-2xl font-bold">Slide 3</h3><p class="mt-2">Third slide content</p></div>',
      '<div class="bg-red-500 text-white p-8 text-center rounded-lg"><h3 class="text-2xl font-bold">Slide 4</h3><p class="mt-2">Fourth slide content</p></div>',
      '<div class="bg-yellow-500 text-white p-8 text-center rounded-lg"><h3 class="text-2xl font-bold">Slide 5</h3><p class="mt-2">Fifth slide content</p></div>',
    ],
  },
};

export default meta;

type Story = StoryObj<typeof createEmbla>;

export const Default: Story = {
  name: 'Default',
  args: {
    loop: true,
    speed: 10,
    slidesPerPage: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default carousel with loop enabled and standard navigation.',
      },
    },
  },
};

export const WithMultipleSlides: Story = {
  name: 'Multiple Slides',
  args: {
    loop: true,
    speed: 10,
    slidesPerPage: 2,
    items: [
      '<div class="bg-blue-500 text-white p-4 text-center rounded-lg"><h3 class="text-xl font-bold">1</h3></div>',
      '<div class="bg-green-500 text-white p-4 text-center rounded-lg"><h3 class="text-xl font-bold">2</h3></div>',
      '<div class="bg-purple-500 text-white p-4 text-center rounded-lg"><h3 class="text-xl font-bold">3</h3></div>',
      '<div class="bg-red-500 text-white p-4 text-center rounded-lg"><h3 class="text-xl font-bold">4</h3></div>',
      '<div class="bg-yellow-500 text-white p-4 text-center rounded-lg"><h3 class="text-xl font-bold">5</h3></div>',
      '<div class="bg-pink-500 text-white p-4 text-center rounded-lg"><h3 class="text-xl font-bold">6</h3></div>',
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel showing 2 slides at a time with navigation arrows.',
      },
    },
  },
};

export const NoLoop: Story = {
  name: 'No Loop',
  args: {
    loop: false,
    speed: 10,
    slidesPerPage: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel without infinite loop - stops at first and last slides.',
      },
    },
  },
};

export const FastScroll: Story = {
  name: 'Fast Scroll',
  args: {
    loop: true,
    speed: 3,
    slidesPerPage: 1,
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel with faster scroll animation (speed: 3).',
      },
    },
  },
};

export const DragFree: Story = {
  name: 'Drag Free',
  args: {
    loop: true,
    speed: 10,
    slidesPerPage: 1,
    dragFree: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Drag-free scrolling allows smooth, unrestrained swiping without snap points.',
      },
    },
  },
};

export const Images: Story = {
  name: 'Image Carousel',
  args: {
    loop: true,
    speed: 10,
    slidesPerPage: 1,
    items: [
      '<img src="https://picsum.photos/id/237/800/400" alt="Image 1" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />',
      '<img src="https://picsum.photos/id/238/800/400" alt="Image 2" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />',
      '<img src="https://picsum.photos/id/239/800/400" alt="Image 3" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />',
      '<img src="https://picsum.photos/id/240/800/400" alt="Image 4" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />',
      '<img src="https://picsum.photos/id/241/800/400" alt="Image 5" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />',
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Carousel displaying a series of images with smooth transitions.',
      },
    },
  },
};