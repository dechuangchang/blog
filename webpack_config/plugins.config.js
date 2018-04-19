const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


const pluginsConfig = [
    new webpack.ProvidePlugin({
        $:'jquery',
        axios:'axios',
        React:'react',
        ReactDom:'react-dom'
    }),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: './app/index.html',
        chunks : ['vendor','index']
    }),
    new HtmlWebpackPlugin({
        filename:'admin.html',
        template: './app/admin.html',
        chunks : ['vendor','admin']
    }),
    new ExtractTextPlugin('./css/[name][hash].css'),
    new CopyWebpackPlugin([{
        from:path.resolve(__dirname,'../app/static'),
        to:path.resolve(__dirname,'../output/static')
    },
    {
        from:path.resolve(__dirname,'../app/iconfont'),
        to:path.resolve(__dirname,'../output/iconfont')
    }]),
];

module.exports = pluginsConfig;
console.log('pluginsConfig----->')

