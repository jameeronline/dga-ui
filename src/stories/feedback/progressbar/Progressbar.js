// Function to create ProgressBar component
export const createProgressBar = ({
  varient = "basic",
  size = "medium",
  label = "Label",
  type = "primary",
  max = 100,
  value = 0,
  rounded = false,
}) => {
  let progressHTML = "";

  let typeClass = {
    primary:
      "[&::-webkit-progress-bar]:bg-primary-100 [&::-webkit-progress-value]:bg-primary-800",
    secondary:
      "[&::-webkit-progress-bar]:bg-secondary-100 [&::-webkit-progress-value]:bg-secondary-500",
    danger:
      "[&::-webkit-progress-bar]:bg-danger-100 [&::-webkit-progress-value]:bg-danger-500",
    info: "[&::-webkit-progress-bar]:bg-info-100 [&::-webkit-progress-value]:bg-info-500",
    warning:
      "[&::-webkit-progress-bar]:bg-warning-100 [&::-webkit-progress-value]:bg-warning-500",
    success:
      "[&::-webkit-progress-bar]:bg-success-100 [&::-webkit-progress-value]:bg-success-500",
  };

  const sizeClasses = {
    small: "h-1",
    medium: "h-2",
    large: "h-4",
    xlarge: "h-6",
  };

  const roundedClass = rounded ? "rounded-full" : "rounded";

  const progressMarkup = `<progress aria-label="loading ${value}%" max="${max}" value="${value}" class="${sizeClasses[size]} w-full overflow-hidden ${roundedClass} ${typeClass[type]}"></progress>`;

  switch (varient) {
    case "basic":
      progressHTML = progressMarkup;
      break;

    case "basicWithLabel":
      progressHTML = `<div class="relative w-full">
                          <label class="block mb-1 text-xs leading-none text-center text-slate-500">${label}</label>
                          ${progressMarkup}
                        </div>`;
      break;

    case "labelInside":
      progressHTML = `<div class="relative w-full">
                          <label class="absolute top-1/2 -translate-y-1/2 left-2 w-1/2 mb-0 text-xs leading-none text-white"><span class="sr-only">${label}</span>${value}%</label>
                          ${progressMarkup}
                        </div>`;
      break;

    case "trailingLabel":
      progressHTML = `<div class="flex items-center w-full gap-2">
                          <label class="order-2 text-xs text-slate-500"><span class="sr-only">${label}</span>${value}%</label>
                          ${progressMarkup}
                        </div>`;
      break;

    case "trailingIcon":
      progressHTML = `<div class="flex items-center w-full gap-2">
                          <label class="order-2 text-xs">
                            <span class="sr-only">${label}</span>
                            <i class="ri-error-warning-line w-4 h-4"></i>
                          </label>
                          ${progressMarkup}
                        </div>`;
      break;
  }
  return progressHTML;
};
