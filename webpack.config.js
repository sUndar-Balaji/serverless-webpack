const path = require('path');

module.exports = {
    entry: './handler.js',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: path.resolve(__dirname, 'node_modules'),
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };