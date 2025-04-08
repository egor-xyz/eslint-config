# eslint-config

This is my [ESLint 9](https://eslint.org/) flat configuration for any Node or React project using TypeScript.

It includes all my favorite rules and helps keep codebases aligned
and in-sync with the highest standards.

### Install the package

```shell
npm i -D eslint @egor.xyz/eslint-config
```

Create an `eslint.config.mjs` file, or `eslint.config.js` if you have `type: "module"`, in the root of your project.

### React

Includes all configurations (React, TypeScript, Node, etc.)

```javascript
import config from '@egor.xyz/eslint-config';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // ignore files and folders from root: node_modules, dist, build, *.js, *.ts
    ignores: ['node_modules', 'dist', 'build', '*.js', '*.ts']
  },
  {
    extends: config,
    files: ['**/*.{ts,tsx}']
  }
);
```

### Node

Node.js specific configuration, without React rules

```javascript
import configNode from '@egor.xyz/eslint-config/node.js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'build', '*.js', '*.ts']
  },
  {
    extends: configNode,
    files: ['**/*.{ts,tsx}']
  }
);
```

### Customization

You can customize the ESLint configuration by extending it in your own configuration file. For example:

```javascript
import config from '@egor.xyz/eslint-config';
import tseslint from 'typescript-eslint';
// or import partial configs
import { configEslint } from '@egor.xyz/eslint-config/configs/config-eslint.js';
import { configTS } from '@egor.xyz/eslint-config/configs/config-ts.js';
import { configReact } from '@egor.xyz/eslint-config/configs/config-react.js';

export default tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'build', '*.js', '*.ts']
  },
  {
    extends: [
      // ...
      ...config,
      // or partial configs
      ...configEslint,
      ...configTS
      // ...
    ],
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Override or add your custom rules here
      'no-console': 'warn',
      'react/prop-types': 'off',
      'no-explicit-any': 'off'
    }
  }
);
```

## Development

### ESLint Config Inspector

A visual tool to help you understand and inspect ESLint flat configuration files

```shell
npm run inspect
```

### Testing

Checking for errors in the configuration file

```shell
npm test
```
