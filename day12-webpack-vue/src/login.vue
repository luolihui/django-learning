<template>
    <div>
        <h3>通过 .vue 形式创建的网页----{{ msg }}</h3>
    </div>
</template>

<script>
export default {  
    data(){
        return{ 
            msg: '123'
        }
    },
    methods:{
        show(){
            console.log("调用了login.vue中的show方法")
        }
    }
}
</script>

<style>
</style>