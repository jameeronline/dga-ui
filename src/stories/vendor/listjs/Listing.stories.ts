import type { Meta, StoryObj } from '@storybook/html-vite';
import type { ListJSProps } from './Listing';
import { createListJS } from './Listing';
import { listContent } from './data';

const meta: Meta<ListJSProps> = {
  title: 'Vendor/ListJS',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ListJS is a fast, vanilla JavaScript library for sorting, filtering, and pagination. Perfect for transforming static HTML lists into interactive, searchable, and sortable data tables. Visit https://listjs.com for documentation.',
      },
    },
  },
  render: createListJS,
  argTypes: {
    content: {
      name: 'Content',
      control: 'object',
      table: {
        category: 'Data',
        type: { summary: 'ListItemData[]' },
        defaultValue: { summary: '[]' },
      },
      description: 'Array of list item objects containing title, description, avatar, and image.',
    },
    pagination: {
      name: 'Pagination',
      control: 'boolean',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Enable or disable pagination for the list.',
    },
    search: {
      name: 'Search',
      control: 'boolean',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Enable or disable the search bar.',
    },
  },
  args: {
    content: listContent,
    pagination: false,
    search: true,
  },
};

export default meta;

type Story = StoryObj<typeof createListJS>;

export const BasicList: Story = {
  name: 'Basic List',
  args: {
    pagination: false,
    search: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic list with search functionality enabled. Users can filter items by typing in the search box.',
      },
    },
  },
};

export const WithPagination: Story = {
  name: 'With Pagination',
  args: {
    pagination: true,
    search: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'List with both search and pagination enabled. Shows 6 items per page with navigation controls.',
      },
    },
  },
};

export const SearchOnly: Story = {
  name: 'Search Only',
  args: {
    pagination: false,
    search: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Simple list with search functionality only for quick filtering.',
      },
    },
  },
};

export const PaginationOnly: Story = {
  name: 'Pagination Only',
  args: {
    pagination: true,
    search: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'List with pagination only - useful when you have many items but dont need search.',
      },
    },
  },
};