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
