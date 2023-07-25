const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),   // 指定打包文件
    output: {
        path: path.join(__dirname, './dist'),  // 指定输出目录
        filename: 'bundle.js', // 输出文件名称
    },
    plugins: [  // 所有的插件配置
        new htmlWebpackPlugin({  // 创建一个在内存中生成 html 页面的文件
            template: path.join(__dirname, './src/index.html'),  // 指定模板页面
            filename: 'index.html',  // 指定生成页面的名称
        })
    ],
    module:{
         rules: [
             { test: /\.css$/, use:['style-loader','css-loader'] },
             { test: /\.less$/, use:['style-loader','css-loader','less-loader'] },
             { test: /\.scss$/, use:['style-loader','css-loader','sass-loader'] },
             { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=57118&name=[hash:8]-[name].[ext]' },
             { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },  // 处理字体文件
             { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
             // 必须 exclude ，否则项目无法运行
         ]
     },
}

