// eslint-disable-next-line no-undef
module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "jest/globals": true
  },
  "globals": {
    "cy": false,
    "Cypress": false,
    "describe": false,
    "context": false,
    "beforeEach": false,
    "afterEach": false,
    "it": false,
    "assert": false,
    "expect": false
  },
  "extends": [ 
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "jest"
  ],
  "rules": {
    "no-mixed-spaces-and-tabs": 0,
      "linebreak-style": 0,
      "eqeqeq": "error",
      "object-curly-spacing": [
          "error", "always"
      ],
      "no-console": 0,
      "react/prop-types": 0
  },
    "settings": {
    "react": {
      "version": "detect"
    }
  }
}