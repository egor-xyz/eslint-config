import eslintJS from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

import { configEslint } from './configs/config-eslint.js';
import { configTS } from './configs/config-ts.js';

export default tseslint.config(
  {
    extends: [
      perfectionist.configs['recommended-natural'],
      eslintJS.configs.recommended,
      eslintConfigPrettier,
      ...configEslint,
      ...configTS
    ]
  },
  {
    files: ['**/*.js'],
    ...tseslint.configs.disableTypeChecked
  }
);
