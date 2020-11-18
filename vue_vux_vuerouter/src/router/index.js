import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Qh from '@/components/Qh'
import Slot1 from '@/components/demo1/Slot1'
import Slot2 from '@/components/demo2/Slot2'
import Slot3 from '@/components/demo3/Slot3'
import Watch1 from '@/components/watch/Watch1'


Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [　//嵌套路由　／／使用    <router-view></router-view>
        {
          path: '/Qh',
          component: Qh  
        }
      ]
    },{
      path: '/slot1',
      name: 'Slot1',
      component: Slot1
    },
   {
      path: '/slot2',
      name: 'Slot2',
      component: () => import('@/components/demo2/Slot2') // 异步加载路由组件
    },{
      path: '/slot3',
      name: 'Slot3',
      component: Slot3
    },{
      path: '/watch1/:id',
      name: 'Watch1',
      component: () => import('@/components/watch/Watch1') 
    }
  ]
})
router.beforeEach((to, from, next) => {
  console.log(to, from , next)
  next()
})
export default router
