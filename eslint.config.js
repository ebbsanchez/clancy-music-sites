import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', 'node_modules/', '.astro/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    // Build/config files run in Node and may use Node globals.
    files: ['**/*.config.{js,mjs,cjs,ts,mts}'],
    languageOptions: {
      globals: { process: 'readonly' },
    },
  },
];
