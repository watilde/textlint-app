const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        "node": "./src/node/index.js",
        "renderer": "./src/renderer/index.js"
    },
    devtool: process.env.WEBPACK_DEVTOOL || "source-map",
    target: "electron",
    output: {
        path: path.join(__dirname, "app", "build"),
        publicPath: "/build/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                    limit: 45000
                }
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    node: {
        __dirname: false,
        __filename: false,
        fs: "empty",
        module: "empty"
    }
};
