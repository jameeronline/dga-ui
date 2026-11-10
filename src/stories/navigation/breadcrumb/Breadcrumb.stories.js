import { createBreadcrumb } from './Breadcrumb';

export default {
  title: 'Navigation / Breadcrumb',
  tags: ['autodocs'],
  render: createBreadcrumb,
  parameters: {
    docs: {
      description: {
        component:
          'A breadcrumb is a navigation aid that helps users understand their current location within a website or application. It provides a trail of links that represent the hierarchy of pages leading to the current page.',
      },
    },
  },
  argTypes: {
    links: {
      name: 'Links',
      control: { type: 'object' },
      defaultValue: [
        { name: 'Home', url: '#' },
        { name: 'Design System', url: '#' },
        { name: 'UI Components', url: '#' },
        { name: 'Breadcrumb', url: '#' },
      ],
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
      },
      description: 'Array of breadcrumb link objects. Each link object should have a name and a URL.',
    },
    withLeadingIcon: {
      name: 'With Leading Icon',
      control: { type: 'boolean' },
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      description: 'Toggle to include a leading icon next to each breadcrumb link.',
    },
    isOnlyLeadingIcon: {
      name: 'Only Leading Icon',
      control: { type: 'boolean' },
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Toggle to display only the leading icon without text for each breadcrumb link.',
    },
  },
  args: {
    links: [
      { name: 'Home', url: '#' },
      { name: 'Design System', url: '#' },
      { name: 'UI Components', url: '#' },
      { name: 'Breadcrumb', url: '#' },
    ],
    withLeadingIcon: false,
    isOnlyLeadingIcon: false,
  },
};

// Variants
export const DefaultBreadcrumb = {
  args: {},
};

export const LeadingIcon = {
  args: {
    withLeadingIcon: true,
  },
};

export const OnlyLeadingIcon = {
  args: {
    isOnlyLeadingIcon: true,
  },
};

export const SingleItem = {
  args: {
    withLeadingIcon: true,
    links: [{ name: 'Home', url: '#' }],
  },
};

export const LongPath = {
  args: {
    links: [
      { name: 'Home', url: '#' },
      { name: 'Design System', url: '#' },
      { name: 'Foundations', url: '#' },
      { name: 'Components', url: '#' },
      { name: 'Navigation', url: '#' },
      { name: 'Breadcrumbs', url: '#' },
      { name: 'Long Path', url: '#' },
    ],
  },
};
