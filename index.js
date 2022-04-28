module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "react/prop-types": 0
  }
}
