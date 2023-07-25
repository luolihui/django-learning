// import Vue from 'vue'  // 导入是 ../node_modules/vue/dist/vue.runtime.common.js（可设置解决）

// import Vue from '../node_modules/vue/dist/vue.js'
// // import login from './login.vue'

// var login = {
//     template: "<h3> 使用网页中形式创建的组件</h3>"
// }

// var vm = new Vue({
//     el: '#em',
//     data: {
//         msg: '213'
//     },
//     components:{
//         login,
//     },
//     // render: function(createElements){
//     //     return createElements(login)
//     // }

// })

import m2, { title as tt, content } from './test.js'
console.log(m2)
console.log(tt + '----' + content)

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)  // 手动安装 VuerRouter
import app from './App.vue'
import account from './main/Account.vue'
import goodlist from './main/Goodlist.vue'
import login from './subcom/login.vue'
import register from './subcom/register.vue'

// 创建路由对象
var rout =new VueRouter({
    routes: [
       { path: '/account', component: account, children:[
        { path: 'login', component: login },
        { path: 'register', component: register }
            ]
       },
       { path: '/goodlist', component: goodlist },
    ]
})

var vm = new Vue({
    el: '#qw',
    //render 会把 el 指定的容器中所有内容都覆盖清空，所以 router-link 和 router-view 不能直接写到 el中
    render: c => c(app), 
    router:rout
})

