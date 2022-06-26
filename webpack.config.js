'use strict'

const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  target: ['web', 'es2020'],
  entry: [resolve(__dirname, './src/dev.ts')],
  output: {
    path: resolve(__dirname, './dev'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'ts',
          target: 'es2020',
        },
      },
    ],
  },
}
