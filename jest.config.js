/** @type {import('jest').Config} */
const config = {
  transform: {},
  verbose: true,
  collectCoverage: true,
  testEnvironment: 'node',
  coverageThreshold: {
    global: {
      lines: 10,
    },
  },
};

module.exports = config;
