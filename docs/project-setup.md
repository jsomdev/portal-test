---
 description: Documentation about how the application is configured and set up
 author: Jan Somers
 contributor(s): 
 changelog: (Date | By | Comment)
  27/09/2021 | Jan Somers | Initial version
  28/09/2021 | Jan Somers | Added some introductory text and link wrappers to Linting and Formatting
  29/09/2021 | Jan Somers | Added folder structure
  30/09/2021 | Jan Somers | Definitive version [1]
---

# Project Setup

## Template

The project is built with the Next.js framework. It was scaffolded using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app). This script, that's suggested by Vercel itself, sets up everything automatically.

## Linting and formatting

Next.js is client-server oriented and comes with a handful of useful features that the developer should not worry about, but should follow the intended code design for. Other than that, you are quite unrestrained. To help developers follow guidelines and best practices, linting and formatting rules were defined for this project.
[ESLint](https://eslint.org/) is used to help verify our code quality. _Prettier_ helps to improve our code stylistically. Both are npm packages that have been added to the project as dev dependencies. ESLint base library doesn't provide support for everything. [Plugins](https://eslint.org/docs/user-guide/configuring/plugins) were added for:

- [React](https://github.com/yannickcr/eslint-plugin-react)
- [Typescript](https://github.com/typescript-eslint/typescript-eslint)
- [Prettier](https://github.com/prettier/eslint-plugin-prettier)
- [Imports](https://github.com/import-js/eslint-plugin-import)
- [Accessibility](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme)
- [Airbnb config](https://github.com/airbnb/javascript)
- More...

### ESLint Configuration

The configuration for ESLint is found in `.eslintrc.js`.

```js
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
    ecmaVersion: 'latest',
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
```

Paths that should be ignored by ESLint are added to `.eslintignore`

```yaml
.next
node_modules
__tests__
```

### Prettier Configuration

The configuration for Prettier is found in `.prettierrc`.

```json
{
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  // Linux & Mac endOfLines are different compared to Windows
  "endOfLine": "auto"
}
```

### Typescript Configuration

The configuration for Typescript is found in `tsconfig.json`.
Except for absolute paths, which were introduced to get rid of long relative paths, this is the default configuration that comes with the scaffolding.

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "noUnusedLocals": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "rootDir": ".",
    "baseUrl": ".",
    "paths": {
      "@pages/*": ["pages/*"],
      "@services/*": ["services/*"],
      "@styles/*": ["styles/*"],
      "@docs/*": ["docs/*"],
      "@components/*": ["components/*"],
      "@providers/*": ["providers/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## Folder Structure

Lamentably, there is no ideal folder structure for Next.js projects. However, there are some opiniated versions out there. Some are very edgy but overall they share good ideas. The`create-next-app` script comes with a minimal folder structure   that we have expanded on.  Some additional folders have been added next to the initial ones: (_pages; styles; public_): _components; docs (temporary); providers; services; utilities;mocks;tests_

The other folders and files are used for building / running the project,  version control, configuration,...

```
📦digitalhighway-next-sprayportal
 ┣ 📂.git
 ┣ 📂.next
 ┣ 📂.vscode
 ┣ 📂components
 ┣ 📂docs
 ┣ 📂node_modules
 ┣ 📂pages
 ┣ 📂providers
 ┣ 📂public
 ┣ 📂services
 ┣ 📂styles
 ┣ 📂utilities
 ┣ 📂widgets
 ┣ 📂__mocks__
 ┣ 📂__tests__
 ┣ 📜.babelrc
 ┣ 📜.env
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜jest.config.js
 ┣ 📜jest.setup.ts
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```

### Folders

**Build and Version Control**

- *.git* : contains all necessary information about version controls (commits, remote location,...)
- *.next* :  where the build is produced to (added to gitignore)
- *.vscode* : launch information and settings for vscode (eg. attach a debugger)
- *node_modules*: all installed dependencies (including dev dependencies)

**Next.js standard**

- *pages* : content is connected with routing. every file / folder should represent a (sub)route
- *styles*: contains (global) styles (can contain css modules as well but the project is not configured to use css modules)
- *public*: contains publicly available static media (eg. favicon)

**Additional folders**

- *components*: contains dumb and reusable components (eg. Badge);
- *docs*: contains markdown files that document the project
- *providers*: contains contexts with their providers and helper classes
- *services*: contains internal (eg. faceting), external (eg. portal-api) or hybrid (eg. i18n) services
- *widgets*: contains parts of the user-interface that can be bundled together and serve a specific purpose. 
- *utilities*: contains utility functions, tools, ...

### Files

**Next.js standard**

- *package.json*:  the heart of any node project and contains important metadata
- *package-lock.json*: manifest of dependencies to be installed
- *next-env.d.ts*:  references file for typing Next.js
- *tsconfig.json*: Typescript configuration file
- *next.config.js*: Next.js configuration file

**Linting and formatting**

- *.eslintrc*: ESLint configuration file
- *.eslintignore*:  paths that the linter should ignore
- *.prettierrc*: Prettier configuration file

**Testing**

- *.jest.config.js*: Jest configuration file
- *.jest.setup.ts*: script that is run when test suites are run
- *.babelrc*:  Babel configuration file

**Other**

- *.env*: contains environment variables
- *README.md*: contains important information any developer should read before doing anything
