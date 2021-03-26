const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    devtool: "source-map",
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};
