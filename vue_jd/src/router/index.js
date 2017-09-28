import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import index2 from '@/components/index2'
import index3 from '@/components/index3'
import index4 from '@/components/index4'
import index5 from '@/components/index5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/index2',
      name: 'index2',
      component: index2
    },{
      path: '/index3',
      name: 'index3',
      component: index3
    },{
      path: '/index4',
      name: 'index4',
      component: index4
    },{
      path: '/index5',
      name: 'index5',
      component: index5
    }
  ]
})
