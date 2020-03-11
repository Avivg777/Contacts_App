const path = require('path');
const CSSExtractPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new CSSExtractPlugin('styles.css');

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/app.js',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
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
              use: CSSExtract.extract({
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                  {
                    loader: 'sass-loader',
                    options: {
                      sourceMap: true
                    }
                  },
                ]
              })
          }
      ]
    },
    plugins: [
      CSSExtract
    ]
  }
};