import { createBreadcrumb } from "./Breadcrumb";

export default {
  title: "Navigation / Breadcrumb",
  tags: ["autodocs"],
  render: createBreadcrumb,
  argTypes: {
    links: {
      control: { type: "object" },
      defaultValue: [
        { name: "Home", url: "#" },
        { name: "Projects", url: "#" },
        { name: "UI Components", url: "#" },
        { name: "Project", url: "#" },
      ],
      description:
        "Array of breadcrumb link objects. Each link object should have a name and a URL.",
    },
    withLeadingIcon: {
      control: { type: "boolean" },
      defaultValue: true,
      description:
        "Toggle to include a leading icon next to each breadcrumb link.",
    },
    isElevated: {
      control: { type: "boolean" },
      defaultValue: true,
      description:
        "Toggle to apply shadow and elevation styling to the breadcrumb.",
    },
    isOnlyLeadingIcon: {
      control: { type: "boolean" },
      defaultValue: false,
      description:
        "Toggle to display only the leading icon without text for each breadcrumb link.",
    },
  },
  args: {
    links: [
      { name: "Home", url: "#" },
      { name: "Projects", url: "#" },
      { name: "UI Components", url: "#" },
      { name: "Project", url: "#" },
    ],
    withLeadingIcon: false,
    isElevated: false,
    isOnlyLeadingIcon: false,
  },
};

// Variants
export const DefaultBreadcrumb = {
  args: {
    isElevated: false,
  },
};

export const LeadingIcon = {
  args: {
    isElevated: false,
    withLeadingIcon: true,
  },
};

export const OnlyLeadingIcon = {
  args: {
    isOnlyLeadingIcon: true,
  },
};

export const DefaultBreadcrumbWithElevated = {
  args: {
    isElevated: true,
  },
};

export const LeadingIconWithElevated = {
  args: {
    isElevated: true,
    withLeadingIcon: true,
  },
};

export const OnlyLeadingIconWithElevated = {
  args: {
    isElevated: true,
    isOnlyLeadingIcon: true,
  },
};
