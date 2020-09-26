const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            './src/main/js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
        globalObject: 'this'
    },
    mode: 'production',
    target: 'web',
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        }, {
            // Some change here
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {minimize: true}
            }]
        }, {
            test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
            exclude: [
                path.resolve(__dirname, './node_modules'),
            ],
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        }, {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/main/html/index.html",
            filename: './index.html'

        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
};