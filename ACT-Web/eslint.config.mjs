import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-console": "off",
    }
  }
];