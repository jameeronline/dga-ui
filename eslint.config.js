import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginStorybook from 'eslint-plugin-storybook';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginStorybook.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    ignores: ['node_modules/**', 'dist/**', 'storybook-static/**', 'coverage/**', 'public/**', 'src/styles/output.css'],
  },
  {
    rules: {
      // You can add your custom ESLint rules here
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
);
