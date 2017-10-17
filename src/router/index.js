import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/HelloWorld'
import kind from '@/components/menu_left/kind_select'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component:kind

    }
  ]
})
