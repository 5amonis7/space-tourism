const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './starter-code/scripts/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: '[name][ext]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test: /\.(jpe?g|png|gif|svg)$/i, 
            //     loader: 'file-loader',
            // }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         filename: 'index.html',
    //         template: './starter-code/index.html'
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'destination.html',
    //         template: './starter-code/destination.html'
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'crew.html',
    //         template: './starter-code/crew.html'
    //     }),
    //     new HtmlWebpackPlugin({
    //         filename: 'technology.html',
    //         template: './starter-code/technology.html'
    //     }),
    // ]
}