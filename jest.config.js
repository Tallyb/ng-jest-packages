'use strict';
module.exports = {
  globals: {
    __TS_CONFIG__: 'test/tsconfig.spec.json',
    __TRANSFORM_HTML__: true
  },
  preset: 'jest-preset-angular',
  setupTestFrameworkScriptFile: '<rootDir>/test/setupJest.ts',
  verbose: true,
  projects: [
    '<rootDir>/packages/*'
  ],
  moduleDirectories: [
    "<rootDir>/node_modules"
  ],
};