import { createList } from './List';

export default {
  title: 'Components/List',
  tags: ['autodocs'],
  render: (args) => createList(args),
  decorators: [
    (Story) => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('max-w-sm');
      wrapper.classList.add('mx-auto');
      wrapper.classList.add('shadow-md');
      wrapper.classList.add('border');
      wrapper.innerHTML = Story();
      return wrapper;
    },
  ],
  argTypes: {
    content: {
      control: 'object',
      description: 'Array of objects defining the list items.',
      defaultValue: [],
    },
    withDescription: {
      control: 'boolean',
      description: 'Toggle to show or hide the leading item.',
      defaultValue: false,
    },
    isLeadingItem: {
      control: 'boolean',
      description: 'Toggle to show or hide the leading item.',
      defaultValue: true,
    },
    isLeadingItemType: {
      control: { type: 'select' },
      options: ['icon', 'avatar', 'image', 'checkbox'],
      description: 'Select the type of leading item.',
      defaultValue: 'avatar',
      if: { arg: 'isLeadingItem', truthy: true }, // Only show if action buttons are true
    },
    isTrailingItem: {
      control: 'boolean',
      description: 'Toggle to show or hide the trailing item.',
      defaultValue: true,
    },
    isTrailingItemType: {
      control: { type: 'select' },
      options: ['badge', 'text', 'icon', 'checkbox'],
      description: 'Select the type of trailing item.',
      defaultValue: 'badge',
      if: { arg: 'isTrailingItem', truthy: true }, // Only show if action buttons are true
    },
  },
};

// List variations
export const Default = {
  args: {
    content: [
      {
        icon: 'bi bi-palette',
        title: 'System Architect',
        description: 'Leads the overall structure and architecture of the design system.',
        avatar: 'https://i.pravatar.cc/40?img=3',
        image: '',
        trailText: 97,
        status: 'online',
      },
      {
        icon: 'bi bi-brush',
        title: 'Design System Manager',
        description: 'Oversees component libraries and ensures design consistency across teams.',
        avatar: 'https://i.pravatar.cc/40?img=4',
        image: '',
        trailText: 92,
        status: 'offline',
      },
      {
        icon: 'bi bi-pen',
        title: 'UI Component Designer',
        description: 'Creates reusable UI components for the design system.',
        avatar: 'https://i.pravatar.cc/40?img=5',
        image: '',
        trailText: 85,
        status: 'online',
      },
      {
        icon: 'bi bi-braces',
        title: 'Accessibility Specialist',
        description: 'Ensures all components meet accessibility standards.',
        avatar: 'https://i.pravatar.cc/40?img=6',
        image: '',
        trailText: 93,
        status: 'offline',
      },
      {
        icon: 'bi bi-vector-pen',
        title: 'Design Token Engineer',
        description: 'Manages design tokens for color, spacing, and typography in the system.',
        avatar: 'https://i.pravatar.cc/40?img=7',
        image: '',
        trailText: 89,
        status: 'online',
      },
      {
        icon: 'bi bi-layers',
        title: 'Pattern Librarian',
        description: 'Organizes design patterns and documents usage guidelines.',
        avatar: 'https://i.pravatar.cc/40?img=8',
        image: '',
        trailText: 94,
        status: 'offline',
      },
      {
        icon: 'bi bi-layout-text-sidebar',
        title: 'Content Strategist',
        description: 'Develops clear and consistent content guidelines for the design system.',
        avatar: 'https://i.pravatar.cc/40?img=9',
        image: '',
        trailText: 87,
        status: 'online',
      },
      {
        icon: 'bi bi-fonts',
        title: 'Typography Specialist',
        description: 'Manages and standardizes typography choices within the design system.',
        avatar: 'https://i.pravatar.cc/40?img=10',
        image: '',
        trailText: 90,
        status: 'offline',
      },
    ],
    withDescription: false,
    isLeadingItem: true,
    isLeadingItemType: 'avatar',
    isTrailingItem: true,
    isTrailingItemType: 'badge',
  },
};

export const LeadingWithIcon = {
  args: {
    ...Default.args,
    isLeadingItemType: 'icon',
  },
};

export const TrailingWithText = {
  args: {
    ...Default.args,
    isTrailingItemType: 'text',
  },
};

export const NoLeadingOrTrailingItems = {
  args: {
    ...Default.args,
    isLeadingItem: false,
    isTrailingItem: false,
  },
};
