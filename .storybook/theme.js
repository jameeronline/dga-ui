import { create } from 'storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#25935F',
  colorSecondary: '#25935F',

  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e5e7eb',
  appBorderRadius: 8,

  textColor: '#111827',
  textMutedColor: '#6b7280',

  barTextColor: '#4b5563',
  barBg: '#f9fafb',
  barSelectedColor: '#25935F',

  brandTitle: 'DGA UI',
  brandTarget: '_self',

  fontBase: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',

  layoutMarginFraction: 4,
});