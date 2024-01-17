const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    import: true,
    prettier: true,

    typescript: {
      parserProject: ['./tsconfig.json'],
      resolverProject: ['./tsconfig.json'],
    },
    disableExpensiveRules: true,
  },
  extends: ['plugin:@tanstack/eslint-plugin-query/recommended'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts', '*.json'],
      rules: {
        'import/extensions': ['off'],
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/no-useless-template-literals': 'off',
      },
    },
  ],
});
