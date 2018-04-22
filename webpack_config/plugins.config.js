const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const pluginsConfig = [
    new webpack.ProvidePlugin({
        $:'jquery',
        moment:'moment',
        axios:'axios',
        React:'react',
        ReactDom:'react-dom'
    }),
    new HtmlWebpackPlugin({
        filename:'index.html',
        template: './app/index.html',
        chunks : ['index','vendor']
    }),
    new HtmlWebpackPlugin({
        filename:'admin.html',
        template: './app/admin.html',
        chunks : ['admin','vendor']
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
if(process.env.npm_lifecycle_script.indexOf('production')>1){
    console.log(path.resolve(__dirname,'../output/'))
    pluginsConfig.push(
        new CleanWebpackPlugin(
            path.resolve(__dirname,'../output/'),{
                root: path.resolve(__dirname,'../'),
            }
        )
    )
    console.log('CleanWebpackPlugin----->')
}
module.exports = pluginsConfig;
console.log('pluginsConfig----->')

