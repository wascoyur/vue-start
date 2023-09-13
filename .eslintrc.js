module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jquery: true,
        node: true,
    },
    extends: [
        "eslint-config-prettier",
        "plugin:vue/recommended",
        "plugin:json/recommended",
        "eslint:recommended",
    ],
    parserOptions: {
        ecmaVersion: 2018,
        parser: "@babel/eslint-parser",
        requireConfigFile: false,
        jsx: true,
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        semi: ["error", "always"],
        camelcase: 0,
        "no-unused-vars": 0,
        "spaced-comment": 0,
        "no-useless-escape": 0,
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                "vue/multi-word-component-names": "off",
                "vue/no-mutating-props": "off",
                indent: "off",
                "vue/html-indent": [
                    "warn",
                    1,
                    {
                        attribute: 1,
                        closeBracket: 0,
                        alignAttributesVertically: true,
                        ignores: [],
                    },
                ],
                "vue/script-indent": ["warn", 1, { baseIndent: 1 }],
                "vue/max-attributes-per-line": [
                    2,
                    {
                        singleline: 3,
                        multiline: {
                            max: 1,
                        },
                    },
                ],
                "vue/html-closing-bracket-newline": [
                    "error",
                    {
                        singleline: "never",
                        multiline: "always",
                    },
                ],
                "vue/prop-name-casing": ["error", "snake_case"],
            },
        },
    ],
};
