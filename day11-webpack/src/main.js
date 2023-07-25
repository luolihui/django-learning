// import ** from ** 是 ES6 导入模块的方式，而浏览器无法解析 ES6 的代码
import $ from 'jquery'
//  npm install jquery -S
import './css/index.css'
// webpack无法处理其他非JS的文件，需要手动安装第三方加载器
// 处理 css 文件，需要 npm install style-loader css-loader -D
import './css/index.less'
// 处理 less 文件，需要 npm install less -D 和 npm install less-loader -D
import './css/index.scss'
//  cnpm install node-sass -D  和  npm install sass-loader -D
import 'bootstrap/dist/css/bootstrap.css'
// npm install bootstrap@3.4.1 -S

$(function () {
    $('li:odd').css('backgroundColor', 'pink')
    $('li:even').css("background-color",'yellowgreen')
    // $('li:even').css('backgroundColor', function () {
    //     return '#' + 'D97634'
    // })
})

class person{
    // 使用 static 定义静态属性
    // 静态属性：可以直接通过类名访问的属性
    static info = { name:'韩信', age:24 }
}
// 访问 person 类的 info 静态属性
console.log(person.info)