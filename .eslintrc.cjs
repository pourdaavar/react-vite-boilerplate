const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  root: true,
  modules: {
    auto: true,
    esm: true,
    cspell: false,

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
      },
    },
  ],
});
