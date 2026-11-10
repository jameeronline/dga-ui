import * as Constants from '../shared/constants';

// get options keys
export const getVariationOptions = (input: Record<string, unknown>) => {
  return Object.keys(input);
};

// get options labels with keys
export const getOptionsLabels = <T extends Record<string, { label: string }>>(input: T) => {
  return Object.entries(input).reduce(
    (acc, [key, option]) => {
      acc[key] = option.label;
      return acc;
    },
    {} as Record<string, string>,
  );
};

// get global object keys
export const directionOptions = getVariationOptions(Constants.LANG_DIRECTIONS);
export const themeOptions = getVariationOptions(Constants.THEME_OPTIONS);

export const directionLabels = getOptionsLabels(Constants.LANG_DIRECTIONS);
export const themeLabels = getOptionsLabels(Constants.THEME_OPTIONS);

export const neutralColorOptions = getVariationOptions(Constants.NEUTRAL_COLORS);
export const neutralColorLabels = getOptionsLabels(Constants.NEUTRAL_COLORS);

export const baseColorOptions = getVariationOptions(Constants.FULL_COLOR_OPTIONS);
export const baseColorLabels = getOptionsLabels(Constants.FULL_COLOR_OPTIONS);

// get options keys
export const buttonColorOptions = getVariationOptions(Constants.FULL_COLOR_OPTIONS);
export const buttonSizeOptions = getVariationOptions(Constants.SIZE_OPTIONS);
export const buttonThemeOptions = getVariationOptions(Constants.THEME_OPTIONS);

// get options labels with keys
export const buttonColorLabels = getOptionsLabels(Constants.FULL_COLOR_OPTIONS);
export const buttonSizeLabels = getOptionsLabels(Constants.SIZE_OPTIONS);
export const buttonThemeLabels = getOptionsLabels(Constants.THEME_OPTIONS);

// alert options
export const alertOptions = getVariationOptions(Constants.ALERT_COLORS);
export const alertLabels = getOptionsLabels(Constants.ALERT_COLORS);

// avatar options
export const avatarColorOptions = buttonColorOptions;
export const avatarColorLabels = buttonColorLabels;
export const avatarSizeOptions = buttonSizeOptions;
export const avatarSizeLabels = buttonSizeLabels;

// card options
export const cardOptions = ['basic', 'eCommerce', 'socialStory', 'userProfile', 'form', 'imageOverlay'];
export const cardLabels = {
  basic: 'Basic',
  eCommerce: 'E-Commerce',
  socialStory: 'Social Story',
  userProfile: 'User Profile',
  form: 'Form',
  imageOverlay: 'Image Overlay',
};

// feature options
export const featureTypeOptions = ['one-line', 'title'];
export const featureTypeLabels = {
  'one-line': 'One Line',
  title: 'Title',
};
export const featurePositionOptions = ['left', 'center', 'top'];
export const featurePositionLabels = {
  left: 'Left',
  center: 'Center',
  top: 'Top',
};

// list options
export const listLeadingItemOptions = ['icon', 'avatar', 'image', 'checkbox'];
export const listLeadingItemLabels = {
  icon: 'Icon',
  avatar: 'Avatar',
  image: 'Image',
  checkbox: 'Checkbox',
};
export const listTrailingItemOptions = ['badge', 'text', 'icon', 'checkbox'];
export const listTrailingItemLabels = {
  badge: 'Badge',
  text: 'Text',
  icon: 'Icon',
  checkbox: 'Checkbox',
};

// loader options
export const loaderTypeOptions = ['circle', 'square'];
export const loaderTypeLabels = {
  circle: 'Circle',
  square: 'Square',
};
export const loaderSizeOptions = getVariationOptions(Constants.SIZE_OPTIONS);
export const loaderSizeLabels = getOptionsLabels(Constants.SIZE_OPTIONS);

// tabs options
export const tabsSizeOptions = ['sm', 'default', 'lg'];
export const tabsSizeLabels = {
  sm: 'Small',
  default: 'Default',
  lg: 'Large',
};

// tooltip options
export const tooltipPositionOptions = ['top', 'right', 'bottom', 'left'];
export const tooltipPositionLabels = {
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
};
export const tooltipSizeOptions = ['small', 'default', 'large'];
export const tooltipSizeLabels = {
  small: 'Small',
  default: 'Default',
  large: 'Large',
};

// dropdown options
export const dropdownVariantOptions = buttonColorOptions;
export const dropdownVariantLabels = buttonColorLabels;

// button group options
export const buttonGroupSpacingOptions = ['none', 'small', 'medium', 'large', 'xlarge'];
export const buttonGroupSpacingLabels = {
  none: 'None',
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  xlarge: 'Extra Large',
};

// input options
export const inputTypeOptions = ['text', 'password', 'number', 'date', 'email', 'search'];
export const inputTypeLabels = {
  text: 'Text',
  password: 'Password',
  number: 'Number',
  date: 'Date',
  email: 'Email',
  search: 'Search',
};
export const inputSizeOptions = ['small', 'default', 'large'];
export const inputSizeLabels = {
  small: 'Small',
  default: 'Default',
  large: 'Large',
};

// textarea options
export const textareaSizeOptions = ['default', 'large'];
export const textareaSizeLabels = {
  default: 'Default',
  large: 'Large',
};

// range options
export const rangeSizeOptions = ['small', 'default', 'large'];
export const rangeSizeLabels = {
  small: 'Small',
  default: 'Default',
  large: 'Large',
};
export const rangeTypeOptions = ['default', 'minMax', 'steps', 'advanced'];
export const rangeTypeLabels = {
  default: 'Default',
  minMax: 'Min/Max',
  steps: 'Steps',
  advanced: 'Advanced',
};

// file input options
export const fileInputSizeOptions = ['small', 'default', 'large'];
export const fileInputSizeLabels = {
  small: 'Small',
  default: 'Default',
  large: 'Large',
};

// toggle options
export const toggleSizeOptions = ['default', 'large'];
export const toggleSizeLabels = {
  default: 'Default',
  large: 'Large',
};
export const toggleVariantOptions = buttonColorOptions;
export const toggleVariantLabels = buttonColorLabels;

// notification options
export const notificationVariantOptions = buttonColorOptions;
export const notificationVariantLabels = buttonColorLabels;

// progress bar options
export const progressBarSizeOptions = ['small', 'medium', 'large', 'xlarge'];
export const progressBarSizeLabels = {
  small: 'Small',
  medium: 'Medium',
  large: 'Large',
  xlarge: 'Extra Large',
};
export const progressBarVariantOptions = buttonColorOptions;
export const progressBarVariantLabels = buttonColorLabels;
export const progressBarTypeOptions = ['basic', 'basicWithLabel', 'labelInside', 'trailingLabel', 'trailingIcon'];
export const progressBarTypeLabels = {
  basic: 'Basic',
  basicWithLabel: 'Basic with Label',
  labelInside: 'Label Inside',
  trailingLabel: 'Trailing Label',
  trailingIcon: 'Trailing Icon',
};
