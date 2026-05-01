//import button component
import { createButton } from "../../components/button/Button";

// Function to create Notification Chip component
export const createNotificationChip = ({
  description = "With 20 new components!",
  isTrail = false,
  leadingButton = true,
  leadingButtonText = "Version 3.40",
  buttonStyle = "primary", // options: default, rounded, full
  anchorText = "Check what's new",
  link = "#",
  rounded = false,
}) => {
  const buttonEl = createButton({
    rounded: rounded,
    type: buttonStyle,
    label: leadingButtonText,
  });

  return `
      <div class="inline-flex items-center gap-4 rounded border border-slate-200 bg-white/50 p-0.5 ${isTrail ? "flex-row-reverse pl-4" : "pr-4"} shadow-sm shadow-slate-700/10">
        ${leadingButton ? `${buttonEl}` : ""}
        <div class="flex items-center gap-1 text-slate-500">
          <span class="hidden md:block">${description}</span>
          <a href="${link}" class="inline-flex items-center justify-center gap-2 tracking-wide transition duration-300 justify-self-center text-primary-500 hover:text-primary-600 focus:text-emerald-700 focus-visible:outline-none">
            <span>${anchorText}</span>
            <span class="relative only:-mx-6">
                <i class="ri-arrow-right-line text-2xl"></i>
            </span>
          </a>
        </div>
      </div>
    `;
};
