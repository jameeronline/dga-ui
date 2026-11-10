//library
import type { Meta, StoryObj } from '@storybook/html-vite';
import type { AccordionProps } from './Accordion';

//component
import { createAccordion } from './Accordion';
//import { components } from 'storybook/internal/components';

//meta
const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      source: { excludeDecorators: true },
      description: {
        component: 'A simple accordion component that can be used to trigger actions or navigate users.',
      },
      guidelines:
        'Use accordions to organize content into collapsible sections, allowing users to expand and collapse information as needed. They are ideal for FAQs, menus, and any situation where you want to save space while still providing access to detailed content.',
      accessibility:
        'Ensure that the accordion is keyboard navigable, with clear focus states and appropriate ARIA attributes (e.g., aria-expanded, aria-controls) to indicate the state of each section. Use semantic HTML elements like <details> and <summary> for better accessibility.',
    },
  },
  decorators: [(Story) => `<div style="width: 400px;">${Story()}</div>`],
  render: createAccordion,
  argTypes: {
    withIcon: {
      name: 'Icon',
      control: { type: 'boolean' },
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Shows an icon beside the accordion title',
    },
    // outline: {
    //   name: 'Outline',
    //   control: { type: 'boolean' },
    //   table: {
    //     category: 'Appearance',
    //     type: { summary: 'boolean' },
    //     defaultValue: { summary: 'false' },
    //   },
    //   defaultValue: false,
    //   description: 'Adds an outline around the accordion',
    // },
    // elevated: {
    //   name: 'Elevated',
    //   control: { type: 'boolean' },
    //   table: {
    //     category: 'Appearance',
    //     type: { summary: 'boolean' },
    //     defaultValue: { summary: 'false' },
    //   },
    //   defaultValue: false,
    //   description: 'Adds a shadow effect for elevation',
    // },
    toggleIcon: {
      name: 'Toggle Icon',
      control: { type: 'select' },
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'arrow-down' },
      },
      options: ['chevron-down', 'arrow-down', 'arrow-down-circle'],
      defaultValue: 'arrow-down',
      description: 'Select the icon used for accordion toggle',
    },
    content: {
      name: 'Content',
      control: { type: 'object' },
      table: {
        category: 'Content',
        type: { summary: 'object' },
        defaultValue: { summary: '[]' },
      },
      description: 'An array of accordion items containing icon, title, and description',
      defaultValue: [
        {
          icon: 'ri-information-line',
          title: 'How does TailwindCSS work?',
          description:
            'Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles, and then writing them to a static CSS file.',
        },
        {
          icon: 'ri-information-line',
          title: 'How do I install TailwindCSS?',
          description:
            'The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. Install tailwindcss via npm, and create your tailwind.config.js file.',
        },
      ],
    },
  },
  args: {
    withIcon: false,
    // outline: false,
    toggleIcon: 'chevron-down',
    content: [
      {
        icon: 'hgi hgi-stroke hgi-building-04',
        title: 'What is a Design System?',
        description:
          'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.',
      },
      {
        icon: 'hgi hgi-stroke hgi-mail-01',
        title: 'Why Use a Design System?',
        description:
          'Design systems ensure consistency across multiple projects, improve efficiency in development, and provide a shared language between designers and developers.',
      },
      {
        icon: 'hgi hgi-stroke hgi-call',
        title: 'Core Components of a Design System',
        description:
          'A design system consists of UI components, patterns, and guidelines for interaction, design tokens, and documentation that all teams can refer to.',
      },
      {
        icon: 'hgi hgi-stroke hgi-file-01',
        title: 'How to Implement a Design System',
        description:
          'Implementing a design system requires setting up tools like Storybook for UI documentation, ensuring your components are accessible, and integrating with your development pipeline.',
      },
      {
        icon: 'hgi hgi-stroke hgi-identity-card',
        title: 'Design Tokens Explained',
        description:
          'Design tokens are a system of variables used to store design-related values such as colors, typography, and spacing, allowing for consistency across platforms and products.',
      },
    ],
  },
};

export default meta;

//accordion story type
type Story = StoryObj<typeof createAccordion>;

// Variants
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic accordion with default settings.',
      },
    },
  },
  args: {
    withIcon: false,
    // outline: true,
  },
};

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An accordion with icons enabled.',
      },
    },
  },
  args: {
    withIcon: true,
  },
};

export const Outlined: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An accordion with outline styling.',
      },
    },
  },
  args: {
    // outline: true,
  },
};

export const Elevated: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An accordion with elevated styling.',
      },
    },
  },
  args: {},
};

export const WithIconOutlined: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An accordion with icon and elevated styling.',
      },
    },
  },
  args: {
    withIcon: true,
    // outline: true,
  },
};

export const WithIconElevated: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An accordion with icon and elevated styling.',
      },
    },
  },
  args: {
    withIcon: true,
  },
};

export const CustomToggleIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: 'An accordion with custom toggle icon.',
      },
    },
  },
  args: {
    toggleIcon: 'arrow-down',
  },
};
