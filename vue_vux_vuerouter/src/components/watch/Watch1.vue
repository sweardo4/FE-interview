<template>
    <div>
        <p> {{ msg }}</p>
        <p> <input v-model="msg"></p>
        <p> {{ num }}</p>
        <template v-if="isShow">
          <transition name="slide-fade">
              <keep-alive>
                <Child1 :pmsg="msg" :cnum="num" @genum="gnum" >这是插槽</Child1>
              </keep-alive>
          </transition>
        </template>
        <p> 路由参数　{{ $route.params.id }}</p>
        <p>{{obj.name}}:{{obj.age}}:{{obj.sex}}</p>
        <div>
          <h1>set 测试</h1>
          <p v-for="(item,key) in arr" :key="key">{{item}}</p>
        </div>
  </div>
</template>

<script>
import Child1 from './Child1'

export default {
    name: 'Watch1',
    components: { Child1 },
    data() {
        return {
            msg: 'Watch1',
            num: 100,
            isShow: false,
            obj:{
              name:'xiaoming',
              age: 20
            },
            arr: null
        }
    },
    watch: {
        msg: {
            handler: function(newer, older) {
                this.num = older
            },
            immediate: true
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.msg = '变化了变化了'
        //     this.isShow = true
        // }, 3000)
        // setTimeout(() => {
        //     this.isShow = false
        // }, 6000)
        if(!this.arr){
          this.arr = []
          this.obj.sex = 24
        }
        console.log(this.$root)
         let a = 10
          let timer = setInterval(()=>{
            this.arr.push(a++)
            if(a=== 15){
              this.arr[3] = 99999
            }
            if(a===20){
              this.obj.sex = a
              // this.$data.h = 'cuicuci'
              clearInterval(timer)
              this.arr = []
              a = 10
            }
          },1000)
        // this.$nextTick(()=>{
         
        // })
    },
    methods: {
        gnum(num) {
            this.num = num
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
    transition: all .5s ease;
}

.slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

    {
    transform: translateX(10px);
    opacity: 0;
}
</style>
