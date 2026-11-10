import type { Meta, StoryObj } from '@storybook/html-vite';
import type { IconProps } from './Icon';
import { createIcon, iconNames } from './Icon';

const meta: Meta<IconProps> = {
  title: 'Icon/Icon',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A versatile icon component that renders SVG icons from the remixicon collection with customizable size, color, and accessible titles.',
      },
    },
  },
  render: createIcon,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: iconNames,
      description: 'Icon name from the curated list',
    },
    size: {
      control: 'number',
      description: 'Size in pixels',
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
    },
    title: {
      control: 'text',
      description: 'Accessible title for the icon',
    },
  },
  args: {
    name: 'settings-4-line',
    size: 24,
    color: '#333333',
  },
};

export default meta;
type Story = StoryObj<typeof createIcon>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Default icon with standard size and color.',
      },
    },
  },
};

export const Small: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A smaller icon variant (16px).',
      },
    },
  },
  args: {
    name: 'check-line',
    size: 16,
    color: '#22c55e',
  },
};

export const Large: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A larger icon variant (48px).',
      },
    },
  },
  args: {
    name: 'add-line',
    size: 48,
    color: '#3b82f6',
  },
};

export const WithTitle: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon with an accessible title for screen readers.',
      },
    },
  },
  args: {
    name: 'user-line',
    size: 24,
    title: 'User Profile',
  },
};

export const Colored: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Icon with custom color and accessible title.',
      },
    },
  },
  args: {
    name: 'heart-fill',
    size: 24,
    color: '#ef4444',
    title: 'Likes',
  },
};

// export const AllIcons: Story = {
//   render: () => {
//     const container = document.createElement('div');
//     container.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 16px; padding: 20px;';

//     iconNames.forEach((name: string) => {
//       const item = document.createElement('div');
//       item.style.cssText = 'display: flex; flex-direction: column; align-items: center; padding: 12px; border: 1px solid #e5e7eb; border-radius: 8px;';
//       item.innerHTML = `
//         ${createIcon({ name, size: 24 })}
//         <span style="margin-top: 8px; font-size: 12px; color: #6b7280;">${name}</span>
//       `;
//       container.appendChild(item);
//     });

//     return container;
//   },
// };
