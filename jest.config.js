module.exports = {
  verbose: true,
  preset: 'taro-testing-library',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  rootDir: __dirname,
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
};
