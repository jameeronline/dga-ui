import { createTab } from './Tabs';

export default {
  title: 'Components/Tabs',
  tags: ['autodocs'],
  render: createTab,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'default', 'lg'],
      defaultValue: 'default',
      description: 'The size of the tabs.',
    },
    icon: {
      control: { type: 'boolean' },
      defaultValue: true,
      description: 'Show or hide icons in the tabs.',
    },
    fullwidth: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, tabs will stretch to full width.',
    },
    pills: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'If true, tabs will be styled as pills.',
    },
    content: {
      control: { type: 'object' },
      defaultValue: [],
      description: 'The content for each tab, including icon, title, and body.',
    },
  },
  args: {
    size: 'default',
    icon: true,
    fullwidth: false,
    pills: false,
    content: [
      {
        icon: 'bi-person-fill', // Bootstrap Icon for person
        title: 'User Profile',
        body: `
            The User Profile section allows you to manage all your personal information and account settings. 
            You can update your contact details such as email and phone number, change your password, and upload a profile picture. 
            Personalization options are also available to tailor your user experience, such as selecting your preferred theme, notification settings, and privacy controls. 
            This section ensures that you have full control over your account and its associated data.
          `,
      },
      {
        icon: 'bi-calendar-event-fill', // Bootstrap Icon for calendar
        title: 'Event Schedule',
        body: `
            The Event Schedule section provides a comprehensive overview of your upcoming events, meetings, and important dates. 
            You can view your calendar in a daily, weekly, or monthly format, making it easy to track and plan your schedule. 
            This section allows you to set reminders for key events, sync with external calendars (like Google Calendar), and create recurring events. 
            Managing invitations and RSVPs is also simple, ensuring that you're always prepared and organized for what's ahead.
          `,
      },
      {
        icon: 'bi-camera-fill', // Bootstrap Icon for camera
        title: 'Media Gallery',
        body: `
            The Media Gallery is your centralized hub for managing all multimedia assets, including images, videos, and documents. 
            You can upload new media directly from your device, organize files into folders, and add tags for easier searchability. 
            Preview images and videos directly within the gallery and make use of editing tools to crop or adjust images. 
            Whether you're creating presentations, managing a personal portfolio, or organizing team resources, the Media Gallery provides an efficient way to keep all your assets in one place.
          `,
      },
    ],
  },
};

export const DefaultTabs = {
  args: {},
};

export const SmallTabs = {
  args: {
    size: 'sm',
    icon: true,
    fullwidth: false,
    pills: false,
  },
};

export const LargeTabs = {
  args: {
    size: 'lg',
    icon: true,
    fullwidth: false,
    pills: false,
  },
};

export const FullWidthTabs = {
  args: {
    size: 'default',
    icon: true,
    fullwidth: true,
    pills: false,
  },
};

export const PillTabs = {
  args: {
    size: 'default',
    icon: true,
    fullwidth: false,
    pills: true,
  },
};
