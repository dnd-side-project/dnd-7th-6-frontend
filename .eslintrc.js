module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/typescript', 'plugin:import/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/order': [
          'error',
          {
            groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
            pathGroups: [
              {pattern: 'react', group: 'external', position: 'before'},
              {pattern: '', group: 'external', position: 'after'},
            ],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
          },
        ],
        'import/namespace': 'off',
      },
    },
  ],
};
