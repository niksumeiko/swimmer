/** Custom internal rules */
const jsxNoTernary = require('./lib/rules/jsx-no-ternary.js');
const noUnnamedDynamicImports = require('./lib/rules/no-unnamed-dynamic-imports.js');
const importNoAbsoluteWithinModule = require('./lib/rules/import-no-absolute-within-module.js');
const noDevLog = require('./lib/rules/no-dev-log.js');

/** Custom internal configs */
const baseConfig = require('./configs/base');
const typescriptConfig = require('./configs/typescript');
const reactConfig = require('./configs/react');
const prettierConfig = require('./configs/prettier');

module.exports = {
    rules: {
        'jsx-no-ternary': jsxNoTernary,
        'no-dev-log': noDevLog,
        'import-no-absolute-within-module': importNoAbsoluteWithinModule,
        'no-unnamed-dynamic-imports': noUnnamedDynamicImports,
    },
    configs: {
        base: baseConfig,
        typescript: typescriptConfig,
        react: reactConfig,
        prettier: prettierConfig,
    },
};
