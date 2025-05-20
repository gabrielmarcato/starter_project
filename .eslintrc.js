module.exports = {
  root: true,
  extends: [
    'expo',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native/all',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react-native'],
  rules: {
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
