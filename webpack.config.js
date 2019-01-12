const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const folderPath = 'dist/src/js';
const htmlFolderPath = 'dist';

const isDev = process.env.NODE_ENV === 'development';
const minifyHTML = !isDev;

module.exports = {
    entry: './resources/js/app.js',
    output: {
        path: path.resolve(__dirname, folderPath),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, htmlFolderPath+'/index.html'),
            template: path.resolve(__dirname, 'resources/index.html'),
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
    ]
};