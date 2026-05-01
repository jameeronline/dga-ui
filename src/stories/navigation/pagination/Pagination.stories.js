// Pagination.stories.js
import { createPagination } from "./Pagination";

export default {
  title: "Navigation / Pagination",
  tags: ["autodocs"],
  render: createPagination,
  argTypes: {
    type: {
      control: "select",
      options: [
        "minimal",
        "default",
        "with prev next",
        "full option",
        "with help text",
      ],
      description: "Defines the type of pagination.",
      defaultValue: "default",
    },
    onlyIcon: {
      control: "boolean",
      description: "Show only icons, applicable to minimal type.",
      defaultValue: false,
      if: { arg: "type", eq: "minimal" },
    },
    varient: {
      control: "select",
      options: ["primary", "overline", "underline", "outline"],
      description: "Styling of the pagination component.",
      defaultValue: "primary",
    },
    rounded: {
      control: "boolean",
      description: "Apply rounded corners to the pagination.",
      defaultValue: false,
    },
  },
  args: {
    type: "default",
    varient: "primary",
    onlyIcon: false,
    rounded: false,
  },
};

const Template = (args) => {
  return createPagination(args);
};

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
  type: "default",
  varient: "primary",
  onlyIcon: false,
  rounded: false,
};

export const MinimalIconPagination = Template.bind({});
MinimalIconPagination.args = {
  type: "minimal",
  varient: "primary",
  onlyIcon: true,
  rounded: true,
};

export const OutlinedPagination = Template.bind({});
OutlinedPagination.args = {
  type: "full option",
  varient: "outline",
  rounded: false,
};
