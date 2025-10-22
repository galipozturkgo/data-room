import nx from '@nx/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$'],
          depConstraints: [
            {
              sourceTag: 'apps:api',
              onlyDependOnLibsWithTags: ['packages:api', 'packages:shared'],
            },
            {
              sourceTag: 'packages:api',
              onlyDependOnLibsWithTags: ['packages:api', 'packages:shared'],
            },
            {
              sourceTag: 'apps:app',
              onlyDependOnLibsWithTags: [
                'packages:app',
                'packages:ui',
                'packages:shared',
              ],
            },
            {
              sourceTag: 'packages:app',
              onlyDependOnLibsWithTags: [
                'packages:app',
                'packages:ui',
                'packages:shared',
              ],
            },
            {
              sourceTag: 'packages:ui',
              onlyDependOnLibsWithTags: ['packages:ui', 'packages:shared'],
            },

            {
              sourceTag: 'packages:shared',
              onlyDependOnLibsWithTags: ['packages:shared'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {
      curly: ['error', 'all'],
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
];
