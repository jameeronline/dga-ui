// import global constants
import * as Constants from '../shared/constants';

//base types
export type BaseBrandVariant = keyof typeof Constants.BRAND_COLOR_OPTIONS;
export type BaseAlertVariant = keyof typeof Constants.SEMANTIC_COLORS;
export type BaseThemeVariant = keyof typeof Constants.THEME_OPTIONS;

export type BaseColorVariant = BaseBrandVariant | BaseAlertVariant | BaseThemeVariant;
export type BaseDeviceVariant = keyof typeof Constants.DEVICE_OPTIONS;
export type BaseSizeVariant = keyof typeof Constants.SIZE_OPTIONS;
export type BaseDirectionVariant = keyof typeof Constants.LANG_DIRECTIONS;
export type BasePortalVariant = keyof typeof Constants.PORTAL_OPTIONS;

//button types
export type ButtonColorVariant = BaseBrandVariant | BaseAlertVariant | BaseThemeVariant;
export type ButtonSizeVariant = BaseSizeVariant;

//component types
export type BadgeType = BaseColorVariant;
export type AlertType = BaseAlertVariant;
export type AvatarType = ButtonColorVariant;
export type AccordionSizeVariant = BaseSizeVariant;
export type ButtonSwitchSizeVariant = BaseSizeVariant;
export type CardType = 'basic' | 'eCommerce' | 'socialStory' | 'userProfile' | 'form' | 'imageOverlay';
export type FeatureType = 'one-line' | 'title';
export type FeaturePosition = 'left' | 'center' | 'top';
export type ListLeadingItemType = 'icon' | 'avatar' | 'image' | 'checkbox';
export type ListTrailingItemType = 'badge' | 'text' | 'icon' | 'checkbox';
export type LoaderType = 'circle' | 'square';
export type LoaderVariant = BaseBrandVariant | BaseAlertVariant;
export type LoaderSizeVariant = BaseSizeVariant;
export type TabsSizeVariant = 'sm' | 'default' | 'lg';
export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';
export type TooltipVariant = BaseColorVariant;
export type TooltipSizeVariant = 'small' | 'default' | 'large';

// form-element types
export type DropdownVariant = BaseBrandVariant | BaseAlertVariant;
export type ButtonGroupSpacing = 'none' | 'small' | 'medium' | 'large' | 'xlarge';
export type InputType = 'text' | 'password' | 'number' | 'date' | 'email' | 'search' | 'tel' | 'url';
export type InputSizeVariant = 'small' | 'default' | 'large';
export type TextareaSizeVariant = 'small' | 'default' | 'large';
export type RangeSizeVariant = 'small' | 'default' | 'large';
export type RangeType = 'default' | 'minMax' | 'steps' | 'advanced';
export type FileInputSizeVariant = 'small' | 'default' | 'large';
export type ToggleSizeVariant = 'default' | 'large';
export type ToggleVariant = BaseBrandVariant | BaseAlertVariant;

// feedback component types
export type NotificationVariant = BaseBrandVariant | BaseAlertVariant;
export type ProgressBarVariant = BaseBrandVariant | BaseAlertVariant;
export type ProgressBarSize = 'small' | 'medium' | 'large' | 'xlarge';
export type ProgressBarVariantType = 'basic' | 'basicWithLabel' | 'labelInside' | 'trailingLabel' | 'trailingIcon';
