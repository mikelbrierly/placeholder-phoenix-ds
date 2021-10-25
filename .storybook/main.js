// .storybook/main.js

const webpack = require('../webpack.common.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: webpack.module.rules } };
  },
}
