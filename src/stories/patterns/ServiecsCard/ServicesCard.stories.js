// CardComponent.stories.js
import { createCardComponent } from "./ServicesCard";

export default {
  title: "Patterns/Service Card",
  tags: ["autodocs"],
  parametes: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      const wrapper = document.createElement("div");
      wrapper.classList.add("max-w-sm");
      wrapper.innerHTML = Story();
      return wrapper;
    },
  ],
  argTypes: {
    title: { control: "text", defaultValue: "Service Title" },
    description: { control: "text", defaultValue: "Service Description" },
    showIcon: { control: "boolean", defaultValue: true },
    iconName: {
      control: {
        type: "select",
        options: ["default"], // Add other icon names as you add more options
      },
      defaultValue: "default",
    },
  },
};

const Template = (args) => createCardComponent(args);

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: "Service Title",
  description: "Service Description",
  showIcon: true,
  iconName: "default",
};

// Add other variants as needed
