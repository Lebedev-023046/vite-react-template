export default {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{css,scss}': ['stylelint --fix'],
  '*': ['prettier --ignore-unknown --write'],
};
