module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/strict',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'webpack.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: [
            'tsconfig.json',
        ],
        sourceType: 'module',
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'arrow-body-style': ['error', 'as-needed'],
        '@typescript-eslint/no-non-null-assertion': 'error',
    },
};
