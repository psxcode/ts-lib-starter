const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const path = require('path')

module.exports = (env) => {

  return {
    entry: './src/index.ts',
    target: 'node',

    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist'),

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
        // instrument only testing sources with Istanbul, after ts-loader runs
        {
          test: /\.(js|ts)/,
          include: path.resolve('src'),
          exclude: /node_modules/,
          enforce: 'post',
          use: {
            loader: 'istanbul-instrumenter-loader',
            options: {
              // esModules: true
            }
          }
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.test.json'
            }
          }
        }
      ]
    },

    externals: [nodeExternals()],
    plugins: [],
    devtool: "inline-cheap-module-source-map"
  }
}
