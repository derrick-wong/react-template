const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            'webpack-hot-middleware/client?reload=true',
            './src/main/js/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
        globalObject: 'this'
    },
    mode: 'development',
    target: 'web',
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true
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
            use: "html-loader"
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
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