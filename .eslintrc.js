module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'prettier',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': ['off']
  },
  plugins: ['prettier']
}
