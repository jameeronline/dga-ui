export const baseColorVariants = ['primary', 'secondary', 'tertiary'] as const;
export const baseAlertVariants = ['success', 'error', 'warning', 'info'] as const;
export const baseThemeVariants = ['light', 'dark'] as const;
export const baseDeviceVariants = ['mobile', 'tablet', 'desktop'] as const;
export const baseSizeVariants = ['small', 'medium', 'large'] as const;
export const baseDirectionVariants = ['ltr', 'rtl'] as const;
export const basePortalVariants = ['individual', 'business', 'government'] as const;

//button types
export const buttonColorVariants = [...baseColorVariants, ...baseAlertVariants, ...baseThemeVariants] as const;
export const buttonSizeVariants = [...baseSizeVariants] as const;
