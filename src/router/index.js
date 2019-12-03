import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //     path: '/',
    //     name: 'HelloWorld',
    //     component:  () => import('@/components/HelloWorld'),
    // },
    {
      path: '/',
      name: 'homePage',
      meta: {
        title: 'homePage页'
      },
      component: () => import('@/view/layOut'),
      redirect: '/homePage',
      children: [
        {
          path: 'homePage',
          name: 'homePage',
          meta: {
            title: 'homePage页'
          },
          component: () => import('@/view/homePage')
        }
      ]
    },
    {
      path: '/layout',
      name: 'layout',
      meta: {
        title: '导航一'
      },
      component: () => import('@/view/layOut'),
      children: [
        {
          path: 'one',
          name: 'one',
          meta: {
            title: 'one页'
          },
          component: () => import('@/view/one')
        },
        {
          path: 'two',
          name: 'two',
          showTrue: true,
          meta: {
            title: 'two页'
          },
          component: () => import('@/view/two'),
          children: [
            {
              path: 'twoone',
              name: 'two-one',
              meta: {
                title: 'two-one页'
              },
              component: () => import('@/view/twoOne')
            }
          ]
        }

      ]
    }
  ]
})
