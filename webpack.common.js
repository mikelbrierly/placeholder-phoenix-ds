/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

const SOURCE_ROOT = path.join(__dirname, 'src');

module.exports = {
  entry: {
    'styles/phoenix': path.resolve(SOURCE_ROOT, 'styles/styles.scss'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require.resolve('autoprefixer')],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CircularDependencyPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(SOURCE_ROOT, 'resources'),
          to: './resources',
        },
      ],
    }),
    new ESLintPlugin({
      extensions: ['ts'],
    }),
    new StylelintPlugin({
      context: 'src',
    }),
    new StatsWriterPlugin({
      filename: 'stats.json',
      stats: {
        verbose: true,
      },
    }),
  ],
  stats: {
    preset: 'normal',
  },
  ignoreWarnings: [/stats\.json/],
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
    maxEntrypointSize: 200000,
    assetFilter: (assetFilename) => {
      return !/stats\.json/.test(assetFilename) && !/\.map$/.test(assetFilename);
    },
  },
};
