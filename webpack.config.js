const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = (env) => {
  const isNode = env === 'node'

  return {
    entry: './src/index.ts',
    target: isNode ? 'node' : 'web',

    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'var',
      library: 'SDK',

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
          include: path.resolve('src'),
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          }
        }
      ]
    },

    externals: [].concat(isNode ? nodeExternals() : []),
    plugins: [],
    devtool: "inline-cheap-module-source-map"
  }
}
