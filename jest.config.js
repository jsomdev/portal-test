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
