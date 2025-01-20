module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  globals: { babelConfig: true, useESM: true },
  roots: ['<rootDir>/src'],
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom'
};
