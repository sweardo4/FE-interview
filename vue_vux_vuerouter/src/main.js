// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as directive from './directive';

Vue.config.productionTip = false

// 加载全局指令
const directives = Object.keys(directive).forEach(k => Vue.directive(k, directive[k]));
Vue.use(directives);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
