module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    // Allow JSX appearance in files with these extensions
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        // built-in imports in Docusaurus v2
        ignore: ['^@theme', '^@docusaurus'],
      },
    ],
    // These are deemed unnecessary
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
  },
  settings: {
    'import/resolver': {
      // resolves the .tsx / .ts imports
      node: {
        extensions: ['.js', '.json', '.mjs', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      // JS files should not be treated as TypeScript
      // See https://github.com/typescript-eslint/typescript-eslint/issues/109
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        // may need to add more rules
      },
    },
  ],
};
