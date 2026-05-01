import { createProgressBar } from "./Progressbar";

export default {
  title: "Feedback / ProgressBar",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "description about the progress bar component",
      },
    },
  },
  render: createProgressBar,
  argTypes: {
    varient: {
      control: {
        type: "select",
      },
      options: [
        "basic",
        "basicWithLabel",
        "labelInside",
        "trailingLabel",
        "trailingIcon",
      ],
      description: "Type of the progress bar",
      defaultValue: "basic",
    },
    type: {
      control: {
        type: "select",
      },
      options: ["primary", "secondary", "danger", "info", "warning", "success"],
      description: "Type of the progress bar",
      defaultValue: "basic",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "xlarge"],
      description: "Size of the progress bar",
      defaultValue: "medium",
    },
    label: {
      control: "text",
      description: "Label for the progress bar",
      defaultValue: "Label",
    },
    max: {
      control: { type: "number" },
      description: "Maximum value of the progress bar",
      defaultValue: 100,
    },
    value: {
      control: { type: "number" },
      description: "Current value of the progress bar",
      defaultValue: 0,
    },
    rounded: {
      control: "boolean",
      description: "Current value of the progress bar",
      defaultValue: false,
    },
  },
  args: {
    varient: "basic",
    size: "medium",
    type: "primary",
    value: 50,
    label: "Label",
    max: 100,
    rounded: false,
  },
};

export const Basic = {
  args: {
    varient: "basic",
    size: "medium",
    value: 25,
  },
};

export const Danger = {
  args: {
    type: "danger",
    value: 75,
  },
};

export const Secondary = {
  args: {
    type: "secondary",
    value: 25,
  },
};

export const Info = {
  args: {
    type: "info",
    value: 25,
  },
};

export const Warning = {
  args: {
    type: "warning",
    size: "large",
    value: 25,
  },
};

export const BasicWithLabel = {
  args: {
    varient: "basicWithLabel",
    size: "medium",
    label: "Loading..",
    value: 40,
  },
};

export const LabelInside = {
  args: {
    varient: "labelInside",
    size: "large",
    type: "info",
    label: "Uploading",
    value: 30,
  },
};

export const TrailingLabel = {
  args: {
    varient: "trailingLabel",
    size: "large",
    type: "danger",
    label: "Uploading",
    value: 90,
  },
};

export const TrailingIcon = {
  args: {
    varient: "trailingIcon",
    size: "xlarge",
    type: "warning",
    label: "Uploading",
    value: 45,
  },
};
