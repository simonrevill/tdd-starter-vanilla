/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ["node_modules", "tests/test-utils"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "jsdom",
};

export default config;
