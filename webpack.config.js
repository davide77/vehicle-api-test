const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src", "index.js")
    },
    output: {
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        hot: true,
        inline: true,
        open: true,
        contentBase: path.join(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                enforce: "pre",
                loader: "import-glob-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                     { loader: "css-loader", options: { sourceMap: true } },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    },
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public", "api"),
                    to: "api"
                },
                {
                    from: path.resolve(__dirname, "public", "images"),
                    to: "images"
                }
            ],
        }),
    ]
};