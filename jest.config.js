module.exports = {
  verbose: true,
  moduleNameMapper: {
    // 'react': 'nervjs',
    // 'react-addons-test-utils': 'nerv-test-utils',
    // 'create-react-class': 'nerv-create-class',
    // 'react-dom': 'nervjs',
    // '@tarojs/taro': '@tarojs/taro-h5',
    '@tarojs/components': '@tarojs/components/dist-h5/react',
    '\\.(css|less|sass|scss|styl)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    "^.+\\.esm.js?$": "ts-jest"
  },
  rootDir: __dirname,
  setupFiles: ["<rootDir>/test/setup"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!@taro)", "^.+\\.(css|sass|scss)$"],
};
