module.exports = {
  /**
   * Environment the script should run in. 
   */
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  /**
   * Globals & Default Rules this configuration is extended with
   */
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  /**
   * Using the typescript parser
   */
  parser: '@typescript-eslint/parser',
  parserOptions: {
    /**
     * Jsx support
     */
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    /**
     * Using ECMAScript modules
     */
    sourceType: 'module',
  },
  /**
   * Plugins (make sure they are added to the dev dependencies)
   */
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'import', 'jsx-a11y'],
  /**
   * Define rules. Defaults are applied otherwise (see Extends)
   */
  rules: {
    'prettier/prettier': ['prettier/prettier', { endOfLine: 'auto' }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'object', 'index']],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['jest.setup.ts', '**/*.test.tsx', '**/*.spec.tsx', '**/*.test.ts', '**/*.spec.ts'] },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    // Tells the resolver where the tsconfig file can be found
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
  },
};
