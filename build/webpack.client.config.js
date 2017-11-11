const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');


const PATH = path.join(__dirname, '..');


var entry = {
    main: './src/js/main.js',
}


var clientConfig = merge(baseConfig, {
    context: PATH,
    name: 'client',
    target: 'web',
    entry: Object.assign({
        vendors: ['babel-polyfill', 'axios'],
        vue: ['vue', 'vuex', 'vue-router']
    }, entry),
    output: {
        path: path.join(PATH, 'static'),
        publicPath: '/static/',
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.coffee', '.vue', '.json'],
        alias: {
            'vue$': "vue/dist/vue.esm.js",
            '@src': path.join(PATH, 'src'),
            '@static': path.join(PATH, 'static'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.coffee$/,
                use: 'coffee-loader',
                exclude: /node_modules/
            }
            
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vue', 'vendors']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            chunks: Object.keys(entry)
        }),
    ],
})




module.exports = clientConfig;