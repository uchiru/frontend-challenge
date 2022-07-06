const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

    },
    devServer: {
        port: 5000,

        hot: true
    },
    module: {
        rules: [

            { test: /\.(s*)css$/, use: [
              miniCss.loader,

              'css-loader',
              'sass-loader'] },
         ]
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: 'index.html',
          inject: 'body',
          scriptLoading: 'blocking',
          
      }),
        new miniCss({
           filename: 'styles.css',
        }),
     ]
}
