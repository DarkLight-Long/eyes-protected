import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Home',
      component: () => import('@/views/main/MainWindow.vue'),
      children: [
        {
          path: 'Home',
          name: 'Home',
          component: () => import('@/views/main/windmill/WindCar.vue')
        },
        {
          path: 'Message',
          name: 'Message',
          component: () => import('@/views/main/message/MessageList.vue')
        },
        {
          path: 'Function',
          name: 'Function',
          component: () => import('@/views/main/function/Function.vue')
        },
        {
          path: 'Personal',
          name: 'Personal',
          component: () => import('@/views/main/personal/Personal.vue')
        },
      ]
    },
    {
      path: '/otherWin',
      component: () => import('@/views/other/OtherWindow.vue'),
      children: [
        {
          path: 'Live2dCartoon',
          name: 'Live2dCartoon',
          component: () => import('@/views/other/live2d/Live2dCartoon.vue')
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  // other window控制
  // if (location.pathname.indexOf('other') != -1 && to.fullPath != location.pathname) {
  //   next({path: location.pathname})
  // } else {
  //   next()
  // }  
  if (location.search != '' && location.search.indexOf('otherWin') === 1) {    
    const arr = location.search.slice(1).split('=')
    const path = '/' + arr.join('/')
    if (to.fullPath != path) {
      next({path: path})
      return
    }
  }
  next()
})

export default router
