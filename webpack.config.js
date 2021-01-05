/*
 * @Author: zhangqi
 * @Date: 2021-01-05 15:11:31
 * @Description: webpack main config file
 * @LastEditTime: 2021-01-05 16:30:43
 * @LastEditors: zhangqi
 * @FilePath: /webpack5-starter-ts/webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.ts')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            // ts
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            },
            // js
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            // images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource'
            },
            // fonts and svgs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: 'asset/inline'
            },
            // css, postcss, sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'hello webpack',
            template: path.resolve(__dirname, './src/index.template.html'),
            filename: 'index.html'
        }),
        /**每次构建后清除 dist 目录下所有内容 */
        new CleanWebpackPlugin(),
        // HMR
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        hot: true
    }
}