module.exports = {
    "extends": "google",
    "parserOptions": {
        "ecmaVersion": 8,
        "env": { 
          "browser": true,
          "node": true,
          "es6": true
        }
    },
    "rules": {
        // Required to override Google styleguide rules we do not enforce
        "arrow-parens": ["off"],
        "require-jsdoc": ["off"],
        "new-cap": ["off"],
    },
};