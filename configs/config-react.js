import eslintPluginReact from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export const configReact = [
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    }
  },
  eslintPluginReact.configs.flat.recommended,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-child-element-spacing': ['error'],
      'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
      'react/jsx-equals-spacing': [2, 'never'],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true }],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],
      'react/jsx-newline': ['error', { allowMultilines: true, prevent: true }],
      'react/jsx-no-constructed-context-values': ['error'],
      'react/jsx-no-script-url': ['error'],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-pascal-case': ['error'],
      'react/jsx-props-no-multi-spaces': ['error'],
      'react/jsx-props-no-spread-multi': ['error'],
      'react/jsx-props-no-spreading': ['error'],
      'react/jsx-tag-spacing': ['error'],
      'react/no-array-index-key': ['error'],
      'react/no-danger': ['error'],
      'react/no-this-in-sfc': ['error'],
      'react/self-closing-comp': ['error'],
      'react/sort-prop-types': [
        'error',
        {
          checkTypes: true,
          sortShapeProp: true
        }
      ],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
];
