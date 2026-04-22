import * as Constants from '../shared/constants';

// get options keys
export const getVariationOptions = (input: unknown) => {
  return Object.keys(input);
};

// get options labels with keys
export const getOptionsLabels = (input: unknown) => {
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
export const alertOptions = getVariationOptions(Constants.SEMANTIC_COLORS);
export const alertLabels = getOptionsLabels(Constants.SEMANTIC_COLORS);

// avatar options
export const avatarColorOptions = buttonColorOptions;
export const avatarColorLabels = buttonColorLabels;
export const avatarSizeOptions = buttonSizeOptions;
export const avatarSizeLabels = buttonSizeLabels;
