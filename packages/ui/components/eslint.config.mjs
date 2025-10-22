import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'error',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
  {
    ignores: ['**/out-tsc'],
  },
];
