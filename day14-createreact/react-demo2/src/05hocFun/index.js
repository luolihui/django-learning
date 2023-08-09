// 能接收函数作为变量的函数即为高阶函数
// propUsername就是一个高阶函数，获取username后传给目标函数
function propUsername(call){
    function getUsername(){
        const username = 'admin'
        call(username)
    }
    return getUsername
}

function login(username){
    console.log(username + '登录了')
}

function logout(username){
    console.log(username + '退出登录')
}

const newlogin = propUsername(login)
const newlogout = propUsername(logout)
newlogin()
newlogout()