//Theme
export const themeVarients = ['primary', 'secondary', 'tertiary'];

//Semantic
export const semanticVarients = ['danger', 'success', 'info', 'warning'];

//Mode
export const modeVarient = ['light', 'dark'];

//Base Varients
export const baseTypeVariant = [...themeVarients, ...semanticVarients];

//complete Varient
export const typeVariant = [...baseTypeVariant, ...modeVarient];

//Sizes
export const sizeVarient = ['small', 'medium', 'large', 'xlarge', 'xxlarge'];

//Base Size
export const baseSizing = ['sm', 'default', 'lg'];

//Extended Size
export const baseSizeVarient = ['xs', 'sm', 'md', 'lg'];

export const extendedSizeVarient = [...baseSizeVarient, 'xl', '2xl', 'full'];
