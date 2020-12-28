const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/, //busca string que termina com .js
        exclude: /node_module/, //não passa pelo babel
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}