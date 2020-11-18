<template>
  <div class="hello">
    这是测试数据主页
    <h4>{{ msg }}</h4>
    <p>--------------</p>
    <router-view></router-view>
    <input type="button" value="click" @click="changemsg" />
    <router-link to="/Qh">go Qh</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.msg = '修改后的msg'
    console.log('mounted...........')
  },
  updated() {
    console.log('updated...........')
  },
  methods: {
    changemsg(){
      this.msg = 'click msg text'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
