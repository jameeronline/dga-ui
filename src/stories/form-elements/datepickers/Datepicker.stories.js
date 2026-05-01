import { createDatePicker } from "./Datepicker";
import { createInput } from "../input/Input";

// Cleanup function to destroy the old Flatpickr instance before creating a new one
const destroyFlatpickrInstance = (elementSelector) => {
  const element = document.querySelector(elementSelector);
  if (element && element._flatpickr) {
    element._flatpickr.destroy(); // Destroy the existing Flatpickr instance
  }
};

export default {
  title: "Form Elements/DatePicker",
  tags: ["autodocs"],
  render: (args) => {
    let elementId = args.elementSelector;

    //if (!element) {
    let element = document.createElement("div");
    //element.id = args.elementSelector;
    //element.placeholder = args.dateFormat;
    //element.className =
    //("datepicker form-input border border-primary-400 px-4 py-2"); // Add styles if needed
    //document.body.appendChild(element);

    //}

    //console.log(createInput());
    //const storyInput = createInput();
    const inputMarkup = `<input class="datepicker-basic datepicker form-input border border-primary-400 px-4 py-2" id="${elementId}" placeholder="${args.dateFormat}" type="text" />`;
    element.innerHTML = inputMarkup;

    // Clear any previous Flatpickr instance
    //destroyFlatpickrInstance(elementSelector);

    // Re-create the Flatpickr instance with updated args
    createDatePicker({ ...args, elementId });

    return inputMarkup;
  },
  argTypes: {
    elementSelector: {
      control: "text",
      description: "The format for displaying and selecting the date.",
      defaultValue: "datepicker",
    },
    dateFormat: {
      control: "text",
      description: "The format for displaying and selecting the date.",
      defaultValue: "Y-m-d",
    },
    allowInput: {
      control: "boolean",
      description: "Allows user to manually input date into the field.",
      defaultValue: false,
    },
    enableTime: {
      control: "boolean",
      description: "Enables time selection in addition to the date.",
      defaultValue: false,
    },
    minDate: {
      control: "date",
      description: "The minimum selectable date.",
      defaultValue: null,
    },
    maxDate: {
      control: "date",
      description: "The maximum selectable date.",
      defaultValue: null,
    },
    disable: {
      control: "array",
      description: "An array of dates to be disabled.",
      defaultValue: [],
    },
    locale: {
      control: "text",
      description: 'Set the locale for date picker (e.g. "fr", "es", etc.).',
      defaultValue: "default",
    },
  },
  args: {
    elementSelector: "datepicker",
    dateFormat: "Y-m-d",
    allowInput: false,
    enableTime: false,
    minDate: null,
    maxDate: null,
    disable: [],
    locale: "default",
  },
};

export const DefaultDatePicker = {
  args: {
    elementSelector: "datepicker-basic",
  },
};

export const DatePickerWithTime = {
  args: {
    elementSelector: "datepicker-with-time",
    dateFormat: "Y-m-d H:i",
    allowInput: false,
    enableTime: true,
  },
};

export const DatePickerWithMinMaxDates = {
  args: {
    elementSelector: "datepicker-with-minmax",
    dateFormat: "Y-m-d",
    minDate: "2024-10-05",
    maxDate: "2024-10-15",
  },
};

export const DatePickerWithDisabledDates = {
  args: {
    elementSelector: "datepicker-with-disabledates",
    dateFormat: "Y-m-d",
    disable: ["2024-10-10", "2024-12-25"],
  },
};

export const DatePickerWithManualInput = {
  args: {
    elementSelector: "datepicker-manual-input",
    dateFormat: "Y-m-d",
    allowInput: true,
  },
};
