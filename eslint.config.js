import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: "readonly",
        setTimeout: "readonly",
        Buffer: "readonly",
        Promise: "readonly",
        module: "readonly",
        exports: "readonly",
        require: "readonly",
        process: "readonly",
      },
    },
    rules: {
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-unreachable": "error",
      "no-constant-condition": "warn",
      eqeqeq: ["error", "always"],
    },
  },
  {
    ignores: ["node_modules/"],
  },
];
