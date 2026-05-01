import type { Meta, StoryObj } from '@storybook/html-vite';
import type { FormPatternProps } from './FormPattern';
import { createFormPattern, defaultInputs } from './FormPattern';

const meta: Meta<FormPatternProps> = {
  title: 'Patterns/Form Pattern',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'FormPattern is a reusable form layout component that supports single and double column layouts with configurable inputs, headers, and action buttons. Perfect for creating consistent form UIs across your application.',
      },
    },
  },
  render: createFormPattern,
  argTypes: {
    layout: {
      name: 'Layout',
      control: 'radio',
      options: ['single', 'double'],
      table: {
        category: 'Layout',
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
      defaultValue: 'single',
      description: 'The form layout - single column or double column grid.',
    },
    title: {
      name: 'Title',
      control: 'text',
      table: {
        category: 'Header',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      defaultValue: '',
      description: 'The form title displayed in the header.',
    },
    description: {
      name: 'Description',
      control: 'text',
      table: {
        category: 'Header',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      defaultValue: '',
      description: 'The form description text displayed below the title.',
    },
    showHeader: {
      name: 'Show Header',
      control: 'boolean',
      table: {
        category: 'Header',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Toggle the visibility of the form header.',
    },
    showActions: {
      name: 'Show Actions',
      control: 'boolean',
      table: {
        category: 'Actions',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      defaultValue: true,
      description: 'Toggle the visibility of default action buttons.',
    },
    submitLabel: {
      name: 'Submit Label',
      control: 'text',
      table: {
        category: 'Actions',
        type: { summary: 'string' },
        defaultValue: { summary: 'Submit' },
      },
      defaultValue: 'Submit',
      description: 'Label for the submit button.',
      if: { arg: 'showActions', truthy: true },
    },
    cancelLabel: {
      name: 'Cancel Label',
      control: 'text',
      table: {
        category: 'Actions',
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
      defaultValue: 'Cancel',
      description: 'Label for the cancel button.',
      if: { arg: 'showActions', truthy: true },
    },
    resetLabel: {
      name: 'Reset Label',
      control: 'text',
      table: {
        category: 'Actions',
        type: { summary: 'string' },
        defaultValue: { summary: 'Reset' },
      },
      defaultValue: 'Reset',
      description: 'Label for the reset button.',
      if: { arg: 'showActions', truthy: true },
    },
    gap: {
      name: 'Gap',
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      table: {
        category: 'Layout',
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
      defaultValue: 'medium',
      description: 'Spacing gap between form fields.',
    },
    inputs: {
      name: 'Inputs',
      control: 'object',
      table: {
        category: 'Data',
        type: { summary: 'FormInput[]' },
        defaultValue: { summary: '[]' },
      },
      description: 'Array of form input configurations.',
    },
    actionButtons: {
      name: 'Action Buttons',
      control: 'object',
      table: {
        category: 'Actions',
        type: { summary: 'FormActionButton[]' },
        defaultValue: { summary: '[]' },
      },
      description: 'Custom action buttons to replace default buttons.',
      if: { arg: 'showActions', truthy: true },
    },
  },
  args: {
    layout: 'single',
    title: 'Contact Us',
    description: 'Fill out the form below and we will get back to you as soon as possible.',
    showHeader: true,
    showActions: true,
    submitLabel: 'Submit',
    cancelLabel: 'Cancel',
    resetLabel: 'Reset',
    gap: 'medium',
    inputs: defaultInputs,
    actionButtons: [],
  },
};

export default meta;

type Story = StoryObj<typeof createFormPattern>;

export const SingleColumn: Story = {
  name: 'Single Column Layout',
  args: {
    layout: 'single',
    title: 'Single Column Form',
    description: 'A simple form with all fields displayed in a single column.',
    showHeader: true,
    showActions: true,
    inputs: defaultInputs,
  },
  parameters: {
    docs: {
      description: {
        story: 'Single column form layout - each field takes full width.',
      },
    },
  },
};

export const DoubleColumn: Story = {
  name: 'Double Column Layout',
  args: {
    layout: 'double',
    title: 'Contact Information',
    description: 'A form with two-column grid layout for better space utilization.',
    showHeader: true,
    showActions: true,
    inputs: [
      {
        id: 'firstName',
        type: 'text',
        label: 'First Name',
        name: 'firstName',
        placeholder: 'John',
        required: true,
      },
      {
        id: 'lastName',
        type: 'text',
        label: 'Last Name',
        name: 'lastName',
        placeholder: 'Doe',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'john.doe@example.com',
        required: true,
      },
      {
        id: 'phone',
        type: 'tel',
        label: 'Phone Number',
        name: 'phone',
        placeholder: '+1 (555) 000-0000',
      },
      {
        id: 'company',
        type: 'text',
        label: 'Company',
        name: 'company',
        placeholder: 'Acme Inc.',
      },
      {
        id: 'website',
        type: 'url',
        label: 'Website',
        name: 'website',
        placeholder: 'https://example.com',
      },
      {
        id: 'message',
        type: 'textarea',
        label: 'Message',
        name: 'message',
        placeholder: 'Write your message here...',
        rows: 4,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Double column grid layout - pairs fields side by side for efficient space usage.',
      },
    },
  },
};

export const WithoutHeader: Story = {
  name: 'Without Header',
  args: {
    layout: 'single',
    showHeader: false,
    showActions: true,
    inputs: [
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'john.doe@example.com',
        required: true,
      },
      {
        id: 'password',
        type: 'password',
        label: 'Password',
        name: 'password',
        placeholder: 'Enter your password',
        required: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Form without header - clean minimal design for login or simple forms.',
      },
    },
  },
};

export const WithoutActions: Story = {
  name: 'Without Actions',
  args: {
    layout: 'single',
    showHeader: true,
    showActions: false,
    inputs: [
      {
        id: 'name',
        type: 'text',
        label: 'Full Name',
        name: 'name',
        placeholder: 'John Doe',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'john@example.com',
        required: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Form without action buttons - useful for inline forms or multi-step wizards.',
      },
    },
  },
};

export const CustomActions: Story = {
  name: 'Custom Actions',
  args: {
    layout: 'single',
    showHeader: true,
    showActions: false,
    actionButtons: [
      { label: 'Save Draft', type: 'button', variant: 'secondary' },
      { label: 'Publish', type: 'submit', variant: 'primary' },
      { label: 'Delete', type: 'button', variant: 'danger' },
    ],
    inputs: [
      {
        id: 'title',
        type: 'text',
        label: 'Title',
        name: 'title',
        placeholder: 'Enter title',
        required: true,
      },
      {
        id: 'content',
        type: 'textarea',
        label: 'Content',
        name: 'content',
        placeholder: 'Write your content here...',
        rows: 6,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom action buttons - define your own buttons with specific variants.',
      },
    },
  },
};

export const RegistrationForm: Story = {
  name: 'Registration Form',
  args: {
    layout: 'double',
    title: 'Create Account',
    description: 'Fill in the details below to create your new account.',
    showHeader: true,
    showActions: true,
    submitLabel: 'Create Account',
    cancelLabel: '',
    resetLabel: '',
    inputs: [
      {
        id: 'username',
        type: 'text',
        label: 'Username',
        name: 'username',
        placeholder: 'johndoe123',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'john@example.com',
        required: true,
      },
      {
        id: 'password',
        type: 'password',
        label: 'Password',
        name: 'password',
        placeholder: 'Min 8 characters',
        required: true,
      },
      {
        id: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        name: 'confirmPassword',
        placeholder: 'Re-enter password',
        required: true,
      },
      {
        id: 'terms',
        type: 'checkbox',
        label: 'I agree to the Terms of Service and Privacy Policy',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Registration form with validation and terms checkbox.',
      },
    },
  },
};

export const ContactForm: Story = {
  name: 'Contact Form',
  args: {
    layout: 'double',
    title: 'Contact Us',
    description: 'Have a question or feedback? We would love to hear from you.',
    showHeader: true,
    showActions: true,
    submitLabel: 'Send Message',
    cancelLabel: '',
    resetLabel: 'Clear Form',
    inputs: [
      {
        id: 'firstName',
        type: 'text',
        label: 'First Name',
        name: 'firstName',
        placeholder: 'John',
        required: true,
      },
      {
        id: 'lastName',
        type: 'text',
        label: 'Last Name',
        name: 'lastName',
        placeholder: 'Doe',
        required: true,
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'john@example.com',
        required: true,
        helperText: 'We will reply to this email address.',
      },
      {
        id: 'subject',
        type: 'select',
        label: 'Subject',
        name: 'subject',
        required: true,
        options: [
          { label: 'General Inquiry', value: 'general' },
          { label: 'Technical Support', value: 'support' },
          { label: 'Sales Question', value: 'sales' },
          { label: 'Partnership', value: 'partnership' },
          { label: 'Other', value: 'other' },
        ],
      },
      {
        id: 'message',
        type: 'textarea',
        label: 'Message',
        name: 'message',
        placeholder: 'How can we help you?',
        rows: 5,
        required: true,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Contact form with subject dropdown and double column layout.',
      },
    },
  },
};

export const SurveyForm: Story = {
  name: 'Survey Form',
  args: {
    layout: 'single',
    title: 'Customer Satisfaction Survey',
    description: 'Please take a few minutes to share your feedback with us.',
    showHeader: true,
    showActions: true,
    submitLabel: 'Submit Survey',
    cancelLabel: 'Cancel',
    resetLabel: '',
    inputs: [
      {
        id: 'name',
        type: 'text',
        label: 'Your Name',
        name: 'name',
        placeholder: 'John Doe',
      },
      {
        id: 'email',
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'john@example.com',
      },
      {
        id: 'satisfaction',
        type: 'radio',
        label: 'How satisfied are you with our service?',
        name: 'satisfaction',
        required: true,
        options: [
          { label: 'Very Satisfied', value: 'very_satisfied' },
          { label: 'Satisfied', value: 'satisfied' },
          { label: 'Neutral', value: 'neutral' },
          { label: 'Dissatisfied', value: 'dissatisfied' },
          { label: 'Very Dissatisfied', value: 'very_dissatisfied' },
        ],
      },
      {
        id: 'features',
        type: 'checkbox',
        label: 'Which features do you use most?',
        name: 'features',
        options: [
          { label: 'Dashboard', value: 'dashboard' },
          { label: 'Reports', value: 'reports' },
          { label: 'Analytics', value: 'analytics' },
          { label: 'Integrations', value: 'integrations' },
        ],
      },
      {
        id: 'feedback',
        type: 'textarea',
        label: 'Additional Feedback',
        name: 'feedback',
        placeholder: 'Share your thoughts, suggestions, or concerns...',
        rows: 4,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Survey form with radio buttons and checkboxes.',
      },
    },
  },
};

export const SmallGap: Story = {
  name: 'Small Gap',
  args: {
    layout: 'double',
    title: 'Compact Form',
    gap: 'small',
    showHeader: true,
    showActions: true,
    inputs: [
      {
        id: 'field1',
        type: 'text',
        label: 'Field 1',
        name: 'field1',
      },
      {
        id: 'field2',
        type: 'text',
        label: 'Field 2',
        name: 'field2',
      },
      {
        id: 'field3',
        type: 'text',
        label: 'Field 3',
        name: 'field3',
      },
      {
        id: 'field4',
        type: 'text',
        label: 'Field 4',
        name: 'field4',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Double column form with small gap between fields.',
      },
    },
  },
};

export const LargeGap: Story = {
  name: 'Large Gap',
  args: {
    layout: 'single',
    title: 'Spacious Form',
    gap: 'large',
    showHeader: true,
    showActions: true,
    inputs: [
      {
        id: 'field1',
        type: 'text',
        label: 'Field 1',
        name: 'field1',
      },
      {
        id: 'field2',
        type: 'text',
        label: 'Field 2',
        name: 'field2',
      },
      {
        id: 'field3',
        type: 'textarea',
        label: 'Field 3',
        name: 'field3',
        rows: 3,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Single column form with large gap between fields.',
      },
    },
  },
};