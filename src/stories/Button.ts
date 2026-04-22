// components/Button.ts
import './button.css';

// types
import type { ButtonColorVariant, ButtonSizeVariant, BaseDirectionVariant, BaseThemeVariant } from '@/types/global';

// Button Props Interface
export interface ButtonProps {
  /** Main action button? */
  primary?: boolean;

  /** Color variant (e.g., 'primary', 'secondary') */
  variant?: ButtonColorVariant;

  /** Custom background color */
  backgroundColor?: string;

  /** Button size (e.g., 'small', 'medium', 'large') */
  size?: ButtonSizeVariant;

  /** Button text */
  label: string;

  /** Text direction ('ltr' or 'rtl') */
  direction?: BaseDirectionVariant;

  /** Theme variant (e.g., 'light', 'dark') */
  themes?: BaseThemeVariant;

  /** Click event handler */
  onClick?: () => void;
}

/** Button UI component for user interaction */
export const createButton = ({
  primary = false,
  variant = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  direction = 'ltr',
  themes = 'light',
  onClick,
}: ButtonProps) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = label;
  if (onClick) {
    btn.addEventListener('click', onClick);
  }

  const mode = primary
    ? 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300'
    : 'bg-gray-300 text-gray-700 hover:bg-gray-400 focus:ring-gray-200';

  btn.className = ['inline-flex px-4 py-2 rounded-md', `storybook-button--${size}`, mode, variant, themes, direction].join(' ');

  if (backgroundColor) {
    btn.style.backgroundColor = backgroundColor;
  }

  return btn;
};
