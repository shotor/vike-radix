module.exports = {
  rules: {
    '@typescript-eslint/no-namespace': 'off',
    'react/prop-types': [0],
    'import/order': [
      1,
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '#/root/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '#/components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '#/pages/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '#/renderer/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '#/server/**',
            group: 'external',
            position: 'after',
          },
        ],
      },
    ],
    'import/no-unused-modules': [
      1,
      {
        unusedExports: true,
        src: ['./app/web/**/*'],
        ignoreExports: [
          'app/web/pages/**/*',
          'app/web/renderer/**/*',
          'app/web/server/**/*',
          'app/web/vite.config.ts',
        ],
      },
    ],
    'import/no-duplicates': [2],
    'import/no-unresolved': [2],
    'import/exports-last': [2],
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['dist/*'],
  env: { browser: true, es2020: true, node: true },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    // project: './tsconfig.json',
    // tsconfigRootDir: './app/web',
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {
        project: __dirname,
      },
      node: true,
    },
  },
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  parser: '@typescript-eslint/parser',
}
