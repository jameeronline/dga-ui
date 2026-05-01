import { createNotificationChip } from "./Notification";

import { typeVariant, sizeVarient } from "../../../config/config";

export default {
  title: "Feedback / Notification Chip",
  tags: ["autodocs"],
  render: createNotificationChip,
  argTypes: {
    description: {
      control: "text",
      description: "Text shown next to the button",
      defaultValue: "With 20 new components!",
    },
    isTrail: {
      control: "boolean",
      description: "Toggles the placeholder of the leading button",
      defaultValue: true,
    },
    leadingButton: {
      control: "boolean",
      description: "Toggles the visibility of the leading button",
      defaultValue: true,
    },
    leadingButtonText: {
      control: "text",
      description: "Text displayed on the leading button",
      defaultValue: "Version 3.40",
    },
    buttonStyle: {
      control: {
        type: "select",
      },
      options: typeVariant,
      description: "Style of the leading button",
      defaultValue: "primary",
    },
    anchorText: {
      control: "text",
      description: "Text for the anchor link",
      defaultValue: "Check what's new",
    },
    rounded: {
      control: "boolean",
      description: "Toggles the visibility of the leading button",
      defaultValue: true,
    },
    link: {
      control: "text",
      description: "URL for the anchor link",
      defaultValue: "#",
    },
  },
  args: {
    description: "With 20 new components!",
    leadingButton: true,
    leadingButtonText: "Version 3.40",
    buttonStyle: "primary",
    rounded: false,
    anchorText: "Check what's new",
    link: "#",
    isTrail: false,
  },
};

// Default notification chip
export const DefaultChip = {
  args: {},
};

// Notification chip with a rounded button
export const RoundedButtonChip = {
  args: {
    buttonStyle: "info",
  },
};

// Notification chip with full-width button
export const FullButtonChip = {
  args: {
    buttonStyle: "danger",
  },
};

// Notification chip without leading button
export const TrailButtonChip = {
  args: {
    isTrail: true,
  },
};
