import config from './index.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'build', '*.js', '*.ts']
  },
  {
    extends: config,
    files: ['**/*.{ts,tsx}']
  }
);
