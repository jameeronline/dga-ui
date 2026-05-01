import type { Meta, StoryObj } from '@storybook/html-vite';
import type { DataTablesProps } from './DataTables';
import { createDataTable } from './DataTables';
import { tableData, tableColumns } from './data';

const meta: Meta<DataTablesProps> = {
  title: 'Vendor/DataTables',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'DataTables is a powerful jQuery plugin for creating interactive data tables with pagination, instant search, and multi-column sorting. Visit https://datatables.net for documentation.',
      },
    },
  },
  render: createDataTable,
  argTypes: {
    data: {
      name: 'Data',
      control: 'object',
      table: {
        category: 'Data',
        type: { summary: 'DataTablesRow[]' },
        defaultValue: { summary: '[]' },
      },
      description: 'Array of data objects for table rows.',
    },
    columns: {
      name: 'Columns',
      control: 'object',
      table: {
        category: 'Data',
        type: { summary: 'DataTablesColumn[]' },
        defaultValue: { summary: '[]' },
      },
      description: 'Array of column definitions with title and data keys.',
    },
    search: {
      name: 'Search',
      control: 'boolean',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Enable or disable search functionality.',
    },
    pagination: {
      name: 'Pagination',
      control: 'boolean',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Enable or disable pagination.',
    },
    ordering: {
      name: 'Ordering',
      control: 'boolean',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Enable or disable column ordering/sorting.',
    },
    select: {
      name: 'Row Selection',
      control: 'boolean',
      table: {
        category: 'Features',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Enable row selection.',
    },
    pageLength: {
      name: 'Page Length',
      control: 'number',
      table: {
        category: 'Settings',
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
      defaultValue: 10,
      description: 'Number of rows to display per page.',
    },
    info: {
      name: 'Show Info',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Show table information display.',
    },
    lengthChange: {
      name: 'Length Change',
      control: 'boolean',
      table: {
        category: 'Settings',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Allow users to change page length.',
    },
  },
  args: {
    data: tableData,
    columns: tableColumns,
    search: false,
    pagination: true,
    ordering: true,
    select: false,
    pageLength: 10,
    info: true,
    lengthChange: true,
  },
};

export default meta;

type Story = StoryObj<typeof createDataTable>;

export const BasicTable: Story = {
  name: 'Basic Table',
  args: {
    search: false,
    pagination: true,
    ordering: true,
    select: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table with pagination and ordering enabled. No search functionality.',
      },
    },
  },
};

export const WithSearch: Story = {
  name: 'With Search',
  args: {
    search: true,
    pagination: true,
    ordering: true,
    select: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with search functionality. Users can filter rows by typing in the search box.',
      },
    },
  },
};

export const FullFeatured: Story = {
  name: 'Full Featured',
  args: {
    search: true,
    pagination: true,
    ordering: true,
    select: true,
    pageLength: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete table with all features: search, pagination, ordering, and row selection.',
      },
    },
  },
};

export const NoPagination: Story = {
  name: 'Without Pagination',
  args: {
    search: true,
    pagination: false,
    ordering: true,
    select: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with search and ordering but no pagination - shows all rows at once.',
      },
    },
  },
};

export const CustomPageLength: Story = {
  name: 'Custom Page Length',
  args: {
    search: false,
    pagination: true,
    ordering: true,
    select: false,
    pageLength: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with custom page length of 3 rows per page.',
      },
    },
  },
};