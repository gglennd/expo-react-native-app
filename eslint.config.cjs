const antfu = require("@antfu/eslint-config").default;
const expoConfig = require("eslint-config-expo/flat");

module.exports = antfu({
  type: "app",
  react: true,
  typescript: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
  plugins: [expoConfig],
  ignores: ["dist/**"],
  rules: {
    "react/no-context-provider": ["off"],
    "react/no-use-context": ["off"],
    "no-console": ["warn"],
    "perfectionist/sort-imports": ["error", {
      tsconfigRootDir: ".",
    }],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
});
