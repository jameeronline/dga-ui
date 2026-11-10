// src/shared/constants.ts
//import type { ControlOptionsItem } from "@/types/base";

//theme options
export const THEME_OPTIONS = {
  light: { label: 'Light Mode', value: 'light' },
  dark: { label: 'Dark Mode', value: 'dark' },
} as const;

//language options
export const LANGUAGES = {
  en: { label: 'English', value: 'en' },
  ar: { label: 'Arabic', value: 'ar' },
} as const;

//language direction options
export const LANG_DIRECTIONS = {
  ltr: { label: 'Left to Right', value: 'ltr' },
  rtl: { label: 'Right to Left', value: 'rtl' },
} as const;

//device options
export const DEVICE_OPTIONS = {
  mobile: { label: 'Mobile', value: 'mobile' },
  tablet: { label: 'Tablet', value: 'tablet' },
  desktop: { label: 'Desktop', value: 'desktop' },
} as const;

//color options
export const BRAND_COLOR_OPTIONS = {
  primary: { label: 'Primary', value: 'primary' },
  secondary: { label: 'Secondary', value: 'secondary' },
  tertiary: { label: 'Tertiary', value: 'tertiary' },
} as const;

export const SEMANTIC_COLORS = {
  danger: { label: 'Danger', value: 'danger' },
  success: { label: 'Success', value: 'success' },
  warning: { label: 'Warning', value: 'warning' },
  info: { label: 'Info', value: 'info' },
} as const;

export const ALERT_COLORS = {
  neutral: { label: 'Neutral', value: 'neutral' },
  ...SEMANTIC_COLORS,
} as const;

export const NEUTRAL_COLORS = {
  light: { label: 'Light', value: 'light' },
  dark: { label: 'Dark', value: 'dark' },
} as const;

//text color options
export const TEXT_COLORS = {
  light: { label: 'Light Text', value: 'light' },
  dark: { label: 'Dark Text', value: 'dark' },
} as const;

//full color options
export const FULL_COLOR_OPTIONS = {
  ...BRAND_COLOR_OPTIONS,
  ...SEMANTIC_COLORS,
  ...NEUTRAL_COLORS,
} as const;

//size options
export const SIZE_OPTIONS = {
  small: { label: 'Small', value: 'small' },
  medium: { label: 'Medium', value: 'medium' },
  large: { label: 'Large', value: 'large' },
  //xl: { label: 'Extra Large', value: 'xl' },
} as const;

//portal options
export const PORTAL_OPTIONS = {
  individual: { label: 'Individual', value: 'individual' },
  business: { label: 'Business', value: 'business' },
  government: { label: 'Government', value: 'government' },
} as const;
