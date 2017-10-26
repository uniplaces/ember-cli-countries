module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    "camelcase": [0, { "properties": "never" }],
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
};
