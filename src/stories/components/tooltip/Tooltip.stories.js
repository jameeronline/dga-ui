import { createTooltip } from './Tooltip';

//config
import { typeVariant } from '../../../config/config';

export default {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  render: createTooltip,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: typeVariant,
      description: 'Changes the visual style of the tooltip',
      defaultValue: 'primary',
    },
    onlyIcon: {
      control: { type: 'boolean' },
      description: 'If true, the tooltip trigger will be an icon',
      defaultValue: false,
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'The position of the tooltip relative to the trigger',
      defaultValue: 'top',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'large'],
      description: 'The size of the tooltip',
      defaultValue: 'default',
    },
    label: {
      control: { type: 'text' },
      description: 'The label text of the tooltip trigger',
      defaultValue: 'Hover me',
    },
    tooltipText: {
      control: { type: 'text' },
      description: 'The text content of the tooltip',
      defaultValue: "I'm a tooltip",
    },
  },
  args: {
    variant: 'primary',
    onlyIcon: false,
    position: 'right',
    size: 'default',
    label: 'Hover me',
    tooltipText: "I'm a tooltip",
  },
};

export const Default = { args: {} };

export const Primary = {
  args: {
    variant: 'primary',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
  },
};

export const Warning = {
  args: {
    variant: 'warning',
  },
};

export const Info = {
  args: {
    variant: 'info',
  },
};

export const Success = {
  args: {
    variant: 'success',
  },
};

export const Dark = {
  args: {
    variant: 'dark',
  },
};

export const IconOnly = {
  args: {
    onlyIcon: true,
  },
};
