module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      "experimentalObjectRestSpread": true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:ember-suave/recommended'
  ],
  env: {
    'browser': true,
    "es6": true
  },
  rules: {
    "camelcase": [0, {"properties": "never"}],
    "no-console": ["error", { allow: ["warn", "error"] }]
  }
};
