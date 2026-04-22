import type { StorybookConfig } from '@storybook/html-vite';
import { mergeConfig } from 'vite';

import storybookViteConfig from './vite.config.ts';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@whitespace/storybook-addon-html',
  ],
  framework: '@storybook/html-vite',
  viteFinal: async (config) => {
    return mergeConfig(config, storybookViteConfig);
  },
};
export default config;