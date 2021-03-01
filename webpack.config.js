const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const WebpackBar = require("webpackbar");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 3000;

const PATH = __dirname;
const NODE_ENV = process.env.NODE_ENV || "development";
const HOT_RELOAD = process.env.HOT_RELOAD === "1";

const styleLoader =
    NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader;

let config = {
    context: PATH,
    name: "client",
    target: "web",
    mode: NODE_ENV,
    entry: {
        app: ["@babel/polyfill", "./frontend/entry.ts"],
    },
    output: {
        publicPath: HOT_RELOAD ? `http://${HOST}:${PORT}/hstatic/` : "/static/",
        path: path.join(PATH, "dist"),
        filename: "build/[name].js",
    },
    resolve: {
        modules: [path.resolve(__dirname, "node_modules"), "node_modules"],
        alias: {
            vue: "@vue/runtime-dom",
            "@": path.join(PATH, "frontend"),
            "~": path.join(PATH, "assets"),
        },
        extensions: [".vue", ".js", ".ts", ".sass", ".scss", ".svg"],
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.(ts)$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "ts-loader",
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },

            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: styleLoader,
                    },
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: styleLoader,
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                exclude: /(fonts|icons)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "img/",
                            emitFile: true,
                        },
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                exclude: /(img|icons)/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts/",
                            emitFile: true,
                        },
                    },
                ],
            },
            {
                test: /\.(txt|svg)$/,
                use: "raw-loader",
            },
        ],
    },
};

config.plugins = [
    new VueLoaderPlugin(),
    new WebpackBar(),
    new MiniCssExtractPlugin({
        filename: "build/[name].css",
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify(NODE_ENV),
        },
    }),
    new VueSSRClientPlugin({
        filename: "json/vue-client-manifest.json",
    }),
];

if (HOT_RELOAD) {
    config.entry["app"].push(
        `webpack-hot-middleware/client?path=http://${HOST}:${PORT}/__webpack_hmr`
    );
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

config.optimization = {
    minimizer: [
        new TerserPlugin({
            // cache: true,
            // parallel: true,
            // sourceMap: NODE_ENV === "development",
        }),
        new CssMinimizerPlugin({
            minimizerOptions: {
                preset: [
                    "default",
                    {
                        discardComments: { removeAll: true },
                    },
                ],
            },
        }),
    ],
};

config.devtool = NODE_ENV === "development" ? "eval-source-map" : false;

module.exports = config;
