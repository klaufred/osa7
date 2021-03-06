module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends":[ "eslint:recommended",
    "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "arrow-spacing": [
            "error", { "before": true, "after": true }
        ]
    }
};