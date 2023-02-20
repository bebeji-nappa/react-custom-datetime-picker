module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
