<template>
    <div>
        Qh page
        <router-link to="/">back</router-link>
        <input type="button" value="click back" @click="goback">
        <h1>点击了: {{ count }}</h1>
        <input type="button" value="点我" @click="clickme" />
    </div>
</template>
<script>
export default {
    name:'Qh',
    data(){
        return {
            count: 0
        }
    },
    mounted() {
        this.count =  this.$store.getters.count
    },
    methods: {
        goback(){
            this.$router.push('/')
        },
        clickme(){
            this.$store.dispatch('addCount')
            console.log('---------', this.$store.getters.count)
            this.count =  this.$store.getters.count
        }
    },
    // 组件内路由守卫
    beforeRouteEnter (to, from, next) {
        console.log(arguments)
        next()
    },
    beforeRouteLeave (to, from, next) {
        // ...
        next()
    }
}
</script>