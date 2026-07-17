import js from "@eslint/js";
import n from "eslint-plugin-n";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  // Ignore build artifacts and dependencies
  {
    ignores: ["node_modules/**", "dist/**", "coverage/**"],
  },

  // Base JS recommended rules
  js.configs.recommended,

  // Node.js plugin recommended rules (ESM flavor)
  n.configs["flat/recommended-module"],

  // Project-wide language options and rule tweaks
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Allow unused args prefixed with _ (e.g. error-handler `next`)
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Prefer const, disallow var
      "no-var": "error",
      "prefer-const": "error",
      // Common backend safety
      "no-console": "off",
      eqeqeq: ["error", "always"],
      "n/no-missing-import": "off",
      "n/no-unpublished-import": "off",
    },
  },

  // Must be last: disables stylistic rules that conflict with Prettier
  prettier,
];
