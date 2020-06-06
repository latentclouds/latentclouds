module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'comma-dangle': ['error', 'never'],
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-end-tags': 'off',
    'vue/html-indent': 'off',
    'vue/html-quotes': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-multi-spaces': 'off',
    'vue/no-spaces-around-equal-signs-in-attribute': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
