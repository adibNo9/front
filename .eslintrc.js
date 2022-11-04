module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    camelcase: 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'comma-dangle': [2, 'always-multiline'],
    'no-useless-escape': 'off',
    'multiline-ternary': ['off', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
    'no-tabs': 0,
    'react/display-name': 'off',
  },
}
