import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/react'],
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@dataroom/ui-utils',
              importNames: ['getEnv'],
              message:
                'Do not use getEnv directly. Use the config wrapper instead.',
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['**/out-tsc'],
  },
];
