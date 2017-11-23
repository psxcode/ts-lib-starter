const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const { resolve } = require('path')

module.exports = (env) => {

  return {
    entry: resolve('src', 'index.ts'),
    target: 'node',

    output: {
      filename: 'index.js',
      path: resolve('dist'),

      // use absolute paths in sourcemaps (important for debugging via IDE)
      devtoolModuleFilenameTemplate: '[absolute-resource-path]',
      devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
    },

    resolve: {
      extensions: ['.ts', '.js'],
      modules: [
        'node_modules',
        'src',
      ]
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          include: resolve('src'),
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          }
        }
      ]
    },

    externals: [],
    plugins: [],
    devtool: "inline-cheap-module-source-map"
  }
}
