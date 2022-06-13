---
 description: Documentation about how the application is configured and set up
 author: Jan Somers
 contributor(s): 
 changelog: (Date | By | Comment)
  27/09/2021 | Jan Somers | Initial version
  28/09/2021 | Jan Somers | Added some introductory text and link wrappers to Linting and Formatting
  29/09/2021 | Jan Somers | Added folder structure
  30/09/2021 | Jan Somers | Definitive version [1]
  07/06/2022 | Jan Somers | Updated Content of files

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
- [Accessibility](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#readme)
- More...

### ESLint Configuration

The configuration for ESLint is found in `.eslintrc.js`.

```js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended' // Make sure this is always the last element in the array.
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
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
  "tabWidth": 2,
  "printWidth": 80,
  "endOfLine": "auto",
  "arrowParens": "avoid",
  "trailingComma": "none",
  "semi": true,
  "useTabs": false,
  "singleQuote": true,
  "bracketSpacing": true
}
```

## Suggested Extensions

To get started, it is advised to install following extensions (vs-code):

- Azure Account (Microsoft)
- Azure Resource (Microsoft)
- Azure Storage (Microsoft)
- ESLint (Microsoft)
- Prettier (Prettier)

### Typescript Configuration

The configuration for Typescript is found in `tsconfig.json`.
Except for absolute paths, which were introduced to get rid of long relative paths, this is the default configuration that comes with the scaffolding.
Make sure to add any absolute path references to the array and to include any necessary files when building the application.

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
      "@public/*": ["public/*"],
      "@pages/*": ["pages/*"],
      "@services/*": ["services/*"],
      "@styles/*": ["styles/*"],
      "@docs/*": ["docs/*"],
      "@components/*": ["components/*"],
      "@widgets/*": ["widgets/*"],
      "@utilities/*": ["utilities/*"],
      "@providers/*": ["providers/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "pages/_document.js"],
  "exclude": ["node_modules"]
}
```

## Folder Structure

Lamentably, there is no ideal folder structure for Next.js projects. However, there are some opiniated versions out there. Some are very edgy but overall they share good ideas. The`create-next-app` script comes with a minimal folder structure that we have expanded on. Some additional folders have been added next to the initial ones: (_pages; styles; public_): _components; docs (temporary); providers; services; utilities;mocks;tests_

The other folders and files are used for building / running the project, version control, configuration,...

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
 ┣ 📜.env.local
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

- _.git_ : contains all necessary information about version controls (commits, remote location,...)
- _.next_ : where the build is produced to (added to gitignore)
- _.vscode_ : launch information and settings for vscode (eg. attach a debugger)
- _node_modules_: all installed dependencies (including dev dependencies)

**Next.js standard**

- _pages_ : content is connected with routing. every file / folder should represent a (sub)route
- _styles_: contains (global) styles (can contain css modules as well but the project is not configured to use css modules)
- _public_: contains publicly available static media (eg. favicon)

**Additional folders**

- _components_: contains dumb and reusable components (eg. Badge);
- _docs_: contains markdown files that document the project
- _providers_: contains contexts with their providers and helper classes
- _services_: contains internal (eg. faceting), external (eg. portal-api) or hybrid (eg. i18n) services
- _widgets_: contains parts of the user-interface that can be bundled together and serve a specific purpose.
- _utilities_: contains utility functions, tools, ...

### Files

**Next.js standard**

- _package.json_: the heart of any node project and contains important metadata
- _package-lock.json_: manifest of dependencies to be installed
- _next-env.d.ts_: references file for typing Next.js
- _tsconfig.json_: Typescript configuration file
- _next.config.js_: Next.js configuration file

**Linting and formatting**

- _.eslintrc_: ESLint configuration file
- _.eslintignore_: paths that the linter should ignore
- _.prettierrc_: Prettier configuration file

**Testing**

- _.jest.config.js_: Jest configuration file
- _.jest.setup.ts_: script that is run when test suites are run
- _.babelrc_: Babel configuration file

**Other**

- _.env_: contains environment variables
- _.env.local_: contains environment variables used while locally developing
- _README.md_: contains important information any developer should read before doing anything
