export const configEslint = [
  {
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'dot-notation': 'error',
      eqeqeq: 'error',
      'logical-assignment-operators': ['error', 'never'],
      'no-implicit-coercion': 'error',
      'no-lonely-if': 'error',
      'no-unneeded-ternary': 'error',
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: true,
          ignoreExport: true,
          ignoreImport: true
        }
      ],
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': 'error',
      'prefer-template': 'error',
      yoda: 'error'
    }
  }
];
