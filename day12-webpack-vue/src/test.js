// 在ES6中，使用 export default 和 export 向外暴露成员
var info = {
    name:"zx",
    age:24,
}
export default info  //在一个模块中， export default 只允许向外暴露一次，暴露的成员可以用任意变量接收

// export 可以向外暴露多次，但暴露的成员只能使用 {} 的形式接收（按需导入）
export var title = '小行星'
export var content = '旋转'