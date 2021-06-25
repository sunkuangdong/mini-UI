const jestConfig = require("./jest.config")
module.exports = Object.assign({}, jestConfig, {
  collectCoverage: true,
  reporters: ["jest-junit"],
  collectCoverageFrom: ["lib/**/*.{ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
})