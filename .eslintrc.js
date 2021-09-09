module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
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
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    // Allow JSX appearance in files with these extensions
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'no-use-before-define': 'off',
    'import/no-unresolved': [
      'error',
      {
        // built-in imports in Docusaurus v2
        ignore: ['^@theme', '^@docusaurus'],
      },
    ],
    'import/no-duplicates': 'off',
    // These are deemed unnecessary
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'react/jsx-closing-bracket-location': ['error', 'after-props'],
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
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        // may need to add more rules
      },
    },
  ],
};
