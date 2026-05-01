import flatpickr from "flatpickr";

export const createDatePicker = ({
  elementSelector = "#datepicker", // Target element
  dateFormat = "Y-m-d", // Date format (default: "YYYY-MM-DD")
  allowInput = false, // Allow manual input (default: false)
  enableTime = false, // Enable time selection (default: false)
  minDate = null, // Optional: Minimum date
  maxDate = null, // Optional: Maximum date
  disable = [], // Optional: Disable specific dates
  locale = "default", // Optional: Locale for i18n
}) => {
  //console.log("#" + elementSelector);

  // Initialize Glide.js instance
  document.addEventListener("DOMContentLoaded", () => {
    flatpickr("#" + elementSelector, {
      dateFormat,
      allowInput,
      enableTime,
      minDate,
      maxDate,
      disable,
      locale,
    });
  });
};
