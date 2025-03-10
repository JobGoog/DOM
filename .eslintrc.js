module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      "no-console": "off" 
    }
  };
  