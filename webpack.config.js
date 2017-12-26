const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin'); // Copy assets to /dist

module.exports = {
    entry: [
      'react-hot-loader/patch',
      './src/index.jsx'
    ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader", "sass-loader"]
          }))
      },
      {
          test: /\.(png|jpe?g|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8000,
                name: 'images/[hash]-[name].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                webp: {
                  quality: 60,
                  lossless: true,
                }
              },
            }
          ]
        }
    ]
    },

    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Queries: path.resolve(__dirname, 'src/Queries/'),
        Mutations: path.resolve(__dirname, 'src/Mutations/'),
        Assets: path.resolve(__dirname, 'src/assets/')
      }
    },

    devServer: {
      contentBase: './dist',
      historyApiFallback: true,
      hot: true
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([ {from:'./src/assets/images',to:'assets/images'} ]),
        new HtmlWebpackPlugin({
          title: 'Moola',
          inject: false,
          template: require('html-webpack-template'),
          appMountId: 'content'
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
