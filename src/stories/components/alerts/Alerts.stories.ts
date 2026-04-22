import type { Meta, StoryObj } from '@storybook/html-vite';
import type { AlertProps } from './Alert';
import { createAlert } from './Alert';
import * as OptionsObj from '@/utils/index';

const meta: Meta<AlertProps> = {
  title: 'Components/Alerts',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Alerts display important messages, warnings, or information to users. They can include icons, titles, messages, and action buttons to guide user interactions.',
      },
    },
  },
  render: createAlert,
  argTypes: {
    type: {
      name: 'Type',
      control: { type: 'select', labels: OptionsObj.alertLabels },
      options: OptionsObj.alertOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
      defaultValue: 'success',
      description: 'Type of alert',
    },
    title: {
      name: 'Title',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      defaultValue: '',
      description: 'Title of the alert',
    },
    message: {
      name: 'Message',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
      defaultValue: '',
      description: 'Main content of the alert',
    },
    leadingIcon: {
      name: 'Leading Icon',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Display the leading icon',
    },
    dismissIcon: {
      name: 'Dismiss Icon',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Display the dismiss icon',
    },
    actionButtons: {
      name: 'Action Buttons',
      control: 'boolean',
      table: {
        category: 'Actions',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Display action buttons',
    },
    primaryButtonLabel: {
      name: 'Primary Button Label',
      control: 'text',
      table: {
        category: 'Actions',
        type: { summary: 'string' },
        defaultValue: { summary: 'Proceed' },
      },
      defaultValue: 'Proceed',
      description: 'Label for the primary action button',
      if: { arg: 'actionButtons', truthy: true },
    },
    linkButtonLabel: {
      name: 'Link Button Label',
      control: 'text',
      table: {
        category: 'Actions',
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
      defaultValue: 'Cancel',
      description: 'Label for the link action button',
      if: { arg: 'actionButtons', truthy: true },
    },
  },
  args: {
    type: 'danger',
    title: '',
    message: 'An error occurred. Please try again or contact support if the problem persists.',
    leadingIcon: false,
    dismissIcon: false,
    actionButtons: false,
    primaryButtonLabel: 'Proceed',
    linkButtonLabel: 'Cancel',
  },
};

export default meta;

// Story type
type Story = StoryObj<typeof createAlert>;

// Variants
export const DangerAlert: Story = {
  args: {
    type: 'danger',
  },
};

export const SuccessAlert: Story = {
  args: {
    type: 'success',
    leadingIcon: true,
    message: 'Operation completed successfully. Your changes have been saved.',
  },
};

export const InfoAlert: Story = {
  args: {
    type: 'info',
    message: 'Please be aware of upcoming maintenance scheduled for this weekend.',
    dismissIcon: true,
  },
};

export const WarningAlertWithDismissal: Story = {
  args: {
    type: 'warning',
    leadingIcon: true,
    dismissIcon: true,
    message: 'Please check the input and ensure all required fields are filled out correctly.',
  },
};

export const DangerAlertWithIconAndButtons: Story = {
  args: {
    type: 'danger',
    title: 'Danger Alert',
    leadingIcon: true,
    actionButtons: true,
  },
};

export const AllVariants: Story = {
  render: () => {
    const types = ['success', 'danger', 'info', 'warning'] as const;
    const alerts: string[] = [];
    const iconAlerts: string[] = [];
    const dismissAlerts: string[] = [];
    const fullAlerts: string[] = [];
    for (const t of types) {
      alerts.push(createAlert({ type: t, title: t.charAt(0).toUpperCase() + t.slice(1), message: 'This is a sample alert message.' }));
      iconAlerts.push(createAlert({ type: t, leadingIcon: true, message: 'With leading icon.' }));
      dismissAlerts.push(createAlert({ type: t, dismissIcon: true, message: 'With dismiss icon.' }));
      fullAlerts.push(
        createAlert({
          type: t,
          title: t.charAt(0).toUpperCase() + t.slice(1),
          leadingIcon: true,
          dismissIcon: true,
          actionButtons: true,
          message: 'Full featured alert with all options enabled.',
        }),
      );
    }
    return `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <strong>Basic</strong>
          ${alerts.join('')}
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <strong>With Icon</strong>
          ${iconAlerts.join('')}
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <strong>With Dismiss</strong>
          ${dismissAlerts.join('')}
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <strong>Full Features</strong>
          ${fullAlerts.join('')}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all alert types with various configurations.',
      },
    },
  },
};
