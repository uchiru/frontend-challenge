const webpack = require('webpack')
const miniCss = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bandle.js',

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
        new miniCss({
           filename: 'styles.css',
        }),
     ]
}
