// ~/eslint.config.mjs`
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from "eslint-config-prettier"; 

export default [
  js.configs.recommended,
  eslintConfigPrettier, 
  ...pluginVue.configs['flat/recommended'], 
  {
    files: ['src/**/*.{js,vue}'],
    ignores: ['**/*.gitignore'],
    languageOptions: {
      ecmaVersion: 'latest'
    }
  }
]
