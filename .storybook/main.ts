import type { StorybookConfig } from '@storybook/html-vite';
import { mergeConfig } from 'vite';

import storybookViteConfig from './vite.config.ts';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
   addons: [
     '@storybook/addon-docs',
     '@whitespace/storybook-addon-html',
   ],
  framework: '@storybook/html-vite',
  viteFinal: async (config) => {
    return mergeConfig(config, storybookViteConfig);
  },
  staticDirs: ['../public'],
};
export default config;
