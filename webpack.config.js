const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
                plugins: ["@babel/plugin-proposal-object-rest-spread"]
            }
        },
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }
    ]
  }
};