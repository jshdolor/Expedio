const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const folderPath = 'dist/src/js';
const htmlFolderPath = 'dist';

const isDev = process.env.NODE_ENV === 'development';
const minifyHTML = !isDev;

module.exports = {
    entry: './resources/app.js',
    output: {
        path: path.resolve(__dirname, folderPath),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                // use: [
                //     {
                //         loader:  path.resolve('./loaders/resources-asset-loader.js')
                //     },
                //     {
                //         loader: 'babel-loader'
                //     }
                // ]
            },

            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, htmlFolderPath+'/index.html'),
            template: path.resolve(__dirname, 'resources/index.html'),
            templateParameters: {
                '__ASSETS_PATH__': './src/assets/'
            },
            chunks: ['main'],
            minify   : {
                html5                          : minifyHTML,
                collapseWhitespace             : minifyHTML,
                minifyCSS                      : minifyHTML,
                minifyJS                       : minifyHTML,
                minifyURLs                     : false,
                removeAttributeQuotes          : minifyHTML,
                removeComments                 : minifyHTML,
                removeEmptyAttributes          : minifyHTML,
                removeOptionalTags             : minifyHTML,
                removeRedundantAttributes      : minifyHTML,
                removeScriptTypeAttributes     : minifyHTML,
                removeStyleLinkTypeAttributese : minifyHTML,
                useShortDoctype                : minifyHTML
              }
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'resources/assets'),
                to: path.resolve(__dirname, htmlFolderPath+'/src/assets')
            } 
        ]), 
    ]
};