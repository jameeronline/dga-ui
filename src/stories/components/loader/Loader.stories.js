import { createLoader } from './Loader';
import { baseTypeVariant } from '../../../config/config';

export default {
  title: 'Components/Loader',
  //tags: ["autodocs"],
  render: createLoader,
  // parameters: {
  //   docs: {
  //     controls: { exclude: ["size"] },
  //   },
  // },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'xlarge'],
      description: 'Size of the spinner',
      defaultValue: 'medium',
    },
    type: {
      control: { type: 'radio' },
      options: ['circle', 'square'],
      description: 'Shape of the spinner',
      defaultValue: 'circle',
    },
    variant: {
      control: { type: 'select' },
      options: baseTypeVariant,
      description: 'Color variant of the spinner',
      defaultValue: 'primary',
    },
  },
  args: {
    size: 'medium',
    type: 'circle',
    variant: 'primary',
  },
};

// Stories for different variants

export const CircleSpinnerSmallPrimary = {
  args: {
    size: 'small',
    type: 'circle',
    variant: 'primary',
  },
  title: 'Small Circle Spinner - Primary',
};

export const CircleSpinnerMediumSuccess = {
  args: {
    size: 'medium',
    type: 'circle',
    variant: 'success',
  },
  title: 'Medium Circle Spinner - Success',
};

export const CircleSpinnerLargeDanger = {
  args: {
    size: 'large',
    type: 'circle',
    variant: 'danger',
  },
  title: 'Large Circle Spinner - Danger',
};

export const CircleSpinnerXLInfo = {
  args: {
    size: 'xlarge',
    type: 'circle',
    variant: 'info',
  },
  title: 'XL Circle Spinner - Info',
};

export const SquareSpinnerSmallSecondary = {
  args: {
    size: 'small',
    type: 'square',
    variant: 'secondary',
  },
  title: 'Small Square Spinner - Secondary',
};

export const SquareSpinnerMediumWarning = {
  args: {
    size: 'medium',
    type: 'square',
    variant: 'warning',
  },
  title: 'Medium Square Spinner - Warning',
};

export const SquareSpinnerLargeSuccess = {
  args: {
    size: 'large',
    type: 'square',
    variant: 'success',
  },
  title: 'Large Square Spinner - Success',
};

export const SquareSpinnerXLPrimary = {
  args: {
    size: 'xlarge',
    type: 'square',
    variant: 'primary',
  },
  title: 'XL Square Spinner - Primary',
};
