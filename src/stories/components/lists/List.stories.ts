import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ListProps } from './List';
import { createList } from './List';
import * as OptionsObj from '@/utils/index';

const meta: Meta<ListProps> = {
  title: 'Components/List',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'The List component displays a list of items with leading and trailing content options.',
      },
    },
  },
  render: createList,
  argTypes: {
    content: {
      name: 'Content',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
      description: 'Array of objects defining the list items.',
    },
    withDescription: {
      name: 'With Description',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Toggle to show or hide the description.',
    },
    isLeadingItem: {
      name: 'Leading Item',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Toggle to show or hide the leading item.',
    },
    isLeadingItemType: {
      name: 'Leading Item Type',
      control: { type: 'select', labels: OptionsObj.listLeadingItemLabels },
      options: OptionsObj.listLeadingItemOptions,
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'avatar' },
      },
      defaultValue: 'avatar',
      description: 'Select the type of leading item.',
      if: { arg: 'isLeadingItem', truthy: true },
    },
    isTrailingItem: {
      name: 'Trailing Item',
      control: 'boolean',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Toggle to show or hide the trailing item.',
    },
    isTrailingItemType: {
      name: 'Trailing Item Type',
      control: { type: 'select', labels: OptionsObj.listTrailingItemLabels },
      options: OptionsObj.listTrailingItemOptions,
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'badge' },
      },
      defaultValue: 'badge',
      description: 'Select the type of trailing item.',
      if: { arg: 'isTrailingItem', truthy: true },
    },
  },
  args: {
    content: [
      {
        icon: 'ri-palette-line',
        title: 'System Architect',
        description: 'Leads the overall structure.',
        avatar: 'https://i.pravatar.cc/40?img=3',
        image: '',
        trailText: '97',
        status: 'online',
      },
      {
        icon: 'ri-brush-line',
        title: 'Design System Manager',
        description: 'Oversees component libraries.',
        avatar: 'https://i.pravatar.cc/40?img=4',
        image: '',
        trailText: '92',
        status: 'offline',
      },
      {
        icon: 'ri-pen-line',
        title: 'UI Component Designer',
        description: 'Creates reusable UI components.',
        avatar: 'https://i.pravatar.cc/40?img=5',
        image: '',
        trailText: '85',
        status: 'online',
      },
    ],
    withDescription: false,
    isLeadingItem: true,
    isLeadingItemType: 'avatar',
    isTrailingItem: true,
    isTrailingItemType: 'badge',
  },
};

export default meta;

type Story = StoryObj<typeof createList>;

export const Default: Story = {
  args: {},
};

export const WithDescriptions: Story = {
  args: {
    withDescription: true,
  },
};

export const LeadingWithIcon: Story = {
  args: {
    isLeadingItemType: 'icon',
  },
};

export const LeadingWithImage: Story = {
  args: {
    isLeadingItemType: 'image',
  },
};

export const LeadingWithCheckbox: Story = {
  args: {
    isLeadingItemType: 'checkbox',
  },
};

export const TrailingWithText: Story = {
  args: {
    isTrailingItemType: 'text',
  },
};

export const TrailingWithIcon: Story = {
  args: {
    isTrailingItemType: 'icon',
  },
};

export const NoLeadingOrTrailingItems: Story = {
  args: {
    isLeadingItem: false,
    isTrailingItem: false,
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 400px; margin: 0 auto;" class="shadow-md border">
        <div>
          <h4 style="padding: 12px 12px 0;">With Avatar + Badge</h4>
          ${createList({
            isLeadingItem: true,
            isLeadingItemType: 'avatar',
            isTrailingItem: true,
            isTrailingItemType: 'badge',
          })}
        </div>
        <div>
          <h4 style="padding: 12px 12px 0;">With Icon + Text</h4>
          ${createList({
            isLeadingItem: true,
            isLeadingItemType: 'icon',
            isTrailingItem: true,
            isTrailingItemType: 'text',
          })}
        </div>
        <div>
          <h4 style="padding: 12px 12px 0;">With Checkbox</h4>
          ${createList({
            isLeadingItem: true,
            isLeadingItemType: 'checkbox',
            isTrailingItem: true,
            isTrailingItemType: 'checkbox',
          })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all list variants: leading/trailing item types and combinations.',
      },
    },
  },
};
