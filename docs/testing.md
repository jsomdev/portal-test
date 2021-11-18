---
 description: Documentation about testing in the application
 author: Jan Somers
 contributor(s): 
 changelog: (Date | By | Comment)
  30/09/2021 | Jan Somers | Initial version
---

# Testing

## Introduction

Automated tests are paramount to have. In this project, the focus will be on _Unit tests_ and _Smoke tests_. If found advantageous, _End-to-end tests_ will be included as well. It is important that tests are written because the developer has to. They have to be fully automated, trusthworthy, readable and maintanable. In other words. They must **test** code and not just **run** it. [Jest](https://jestjs.io/) is a testing framework that will be used for adding tests to the project.

## Jest configuration

The Jest configuration can be found in `jest.config.js`. The project's configuration essentially comes down to:

- Defining the test environment
- Defining paths to skip or to map to relative paths
- Coverage information
- What setup to run before running the tests.

```js
module.exports = {
  // Jsdom is a browser-like environment
  testEnvironment: 'jest-environment-jsdom',
  // Where the setup script can be found (run before tests)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Skip paths
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
  // Search node_modules
  moduleDirectories: ['<rootDir>/node_modules'],
  // Have to map the absolute paths defined in tsconfig.json to their relative path
  moduleNameMapper: {
    '@public/(.*)': '<rootDir>/public/$1',
    '@pages/(.*)': '<rootDir>/pages/$1',
    '@styles/(.*)': '<rootDir>/styles/$1',
    '@docs/(.*)': '<rootDir>/docs/$1',
    '@components/(.*)': '<rootDir>/widgets/$1',
    '@services/(.*)': '<rootDir>/services/$1',
    '@providers/(.*)': '<rootDir>/providers/$1',
    '@utilities/(.*)': '<rootDir>/utilities/$1',
    '@widgets/(.*)': '<rootDir>/widgets/$1',
    // Using mock files (best practice) for static files
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    // Switch to identity-obj-proxy and configure if more advanced css transforming should be supported (e.g: modules)
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // Coverage output
  coverageDirectory: 'coverage',
  // Whether to output test coverage
  collectCoverage: true,
  // What path to collect coverage from
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    // Minimum threshold enforcement that must be reached otherwise jest will fail
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
```

### Test Folder

Tests will be added to the _\_\_tests\_\__ folder. Jest will consider every file in this folder to be a test (testMatch option defaults to this). Tests can still be grouped under a subdirectory. In this project developers are still required to suffix their filename with _.test.ts_.

```
📦__tests__
 ┗ 📜i18n.test.tsx
```

### Mocking Modules

Some modules cannot be tested out of the box (eg. next/head is generated server side). Others can be tested but will result in slow tests (api calls).
More information can be found in the [Jest documentation](https://jestjs.io/docs/mock-functions).

### Best practices

Each file should have 1 (sometimes more) **test suite** that included 1 or more **tests**.

_From [The Art Of Unit Testing](https://livebook.manning.com/book/the-art-of-unit-testing-second-edition/chapter-1)_:

**A unit test is one of the best ways a developer can:**

- Improve code quality
- Gain deeper understanding of the functional requirements of a class or method

**A unit test _should_ have the following properties:**

- It should be automated and repeatable.
- It should be easy to implement.
- It should be relevant tomorrow.
- Anyone should be able to run it at the push of a button.
- It should run quickly.
- It should be consistent in its results (it always returns the same result if you don’t change anything between runs).
- It should have full control of the unit under test.
- It should be fully isolated (runs independently of other tests).
- When it fails, it should be easy to detect what was expected and determine how to pinpoint the problem.

### Example Test Suite

The following tests check all properties on the best practices list defined previously. The first two are basic unit tests. The third one can be considered a smoke test.

```tsx
describe('I18N Tests', () => {
  it('getMessages returns the default messages if locale is not supported', () => {
    const notSupportedLocale: string = 'not-Supported';
    if (supportedLocales?.includes(notSupportedLocale)) {
      throw new Error(
        'The locale you defined is supported. notSupportedLocale should not exist in the list of supported locales'
      );
    }
    const actualMessages = getMessages(notSupportedLocale);
    const expectedMessages = getMessages(defaultLocale);
    expect(actualMessages.pages.i18n.title).toBe(actualMessages.pages.i18n.title);
    expect(expectedMessages.pages.i18n.description).toBe(expectedMessages.pages.i18n.description);
  });

  it('getMessages returns the messages for a supported locale correctly', () => {
    if (!supportedLocales?.includes('nl-BE') || !supportedLocales.includes('en-US')) {
      throw new Error(
        'en-US and nl-BE need to be supported locales for this test to pass. Change tests if this should not be the case'
      );
    }
    const actualMessagesNL: Messages = getMessages('nl-BE');
    const expectedMessagesNL: Messages = nl;
    expect(actualMessagesNL.pages.i18n.title).toBe(expectedMessagesNL.pages.i18n.title);
    expect(actualMessagesNL.pages.i18n.description).toBe(expectedMessagesNL.pages.i18n.description);

    const actualMessagesEN: Messages = getMessages('en-US');
    const expectedMessagesEN: Messages = en;
    expect(actualMessagesEN.pages.i18n.title).toBe(expectedMessagesEN.pages.i18n.title);
    expect(actualMessagesEN.pages.i18n.description).toBe(expectedMessagesEN.pages.i18n.description);
  });

  it('<Head> renders alternate links correctly', async () => {
    const pathname: string = 'testing';
    const title: string = 'test title';
    const description: string = 'test description';
    const headProps: IHeadProps = {
      pathname,
      title,
      description,
    };
    render(<Head {...headProps} />, {
      container: document.head,
    });

    const links: HTMLLinkElement[] = Array.from(document.getElementsByTagName('link'));

    const alternateLinks: HTMLLinkElement[] = links.filter((link) => link.rel === 'alternate');

    expect(alternateLinks.length).toBe(supportedLocales?.length);

    supportedLocales?.forEach((locale) => {
      expect(links.filter((link) => link.hreflang === locale).length).toEqual(1);
      expect(links.filter((link) => link.href === `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/${pathname}`));
    });
  });
});
```
