import MicroModal from "micromodal";
import { createModal } from "./modal";

export default {
  title: "Feedback / Modal",
  tags: ["autodocs"],
  parameters: {
    docs: {
      iframeHeight: "500px",
    },
  },
  // decorators: [
  //   (Story) => {
  //     const wrapper = document.createElement("div");
  //     wrapper.classList.add("h-96");
  //     wrapper.innerHTML = Story();
  //     return wrapper;
  //   },
  // ],
  render: (args) => {
    let element = document.createElement("div");
    element.innerHTML = createModal();
    element.style.height = "500px";

    // Initialize Glide.js instance
    document.addEventListener("DOMContentLoaded", () => {
      MicroModal.init();
    });

    return element;
  },
  argsTypes: {},
  args: {},
};

export const Default = {};
