import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const publicPath = path.join(__dirname, 'public')

export default {
  entry: [
    './src/css/index.css',
    './src/js/index.js'
  ],
  output: {
    path: publicPath,
    filename: 'js/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      path.join(__dirname, 'src/js'),
      path.join(__dirname, 'src/css'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
      {test: /\.js$/, exclude: /node_modules|config.json/, loader: 'babel-loader'}
    ]
  },
  plugins: [new ExtractTextPlugin('css/bundle.css')],
  devServer: {
    contentBase: publicPath,
    compress: true,
    port: 3000
  }
}
