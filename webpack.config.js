//依赖
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


//配置文件
const moduleConfig = require('./webpack_config/module.config.js');
const pluginsConfig = require('./webpack_config/plugins.config.js');
const apiConfig = require('./webpack_config/api.config.js');

module.exports = {
    devtool: apiConfig.devtool,
    entry: apiConfig.entry,
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: apiConfig.outputFilename,
        chunkFilename: 'js/chunk/[name].js?v=[chunkHash]'
    },
    module: moduleConfig ,
    plugins: pluginsConfig,
    devServer: {
        contentBase: path.resolve(__dirname, './app/'), //服务器根路径
        proxy: {
            '/api': {// '/api':匹配项
                target: apiConfig.target,// 接口的域名
                changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
            }
        },
        disableHostCheck: apiConfig.disableHostCheck,
        host: apiConfig.host, //ip
        compress: true, // 服务端压缩
        port: apiConfig.port // 端口
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor:{ 
                    test: /node_modules\/(.*)\.js/,
                    chunks:'all', 
                    name:'vendor',
                    enforce:true  
                }
            }
        }
    }   
    

}

