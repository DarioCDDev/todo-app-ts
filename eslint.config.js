import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/prop-types": "off", // No se requiere el uso de PropTypes
      "react/react-in-jsx-scope": "off", // No es necesario importar React en cada archivo
      "@typescript-eslint/explicit-module-boundary-types": "error", // Obliga a definir los tipos de retorno de las funciones
      "@typescript-eslint/no-explicit-any": "error",               // Prohíbe el uso de 'any'
      "@typescript-eslint/explicit-function-return-type": "error", // Obliga a definir tipos de retorno
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }] // Evita variables no utilizadas
    }
  }
];
