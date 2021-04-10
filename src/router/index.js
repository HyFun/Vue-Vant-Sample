/*
 * @Author       : heyongfeng
 * @Date         : 2021-04-06 12:49:59
 * @Description  : 路由
 * @LastEditors  : heyongfeng
 * @LastEditTime : 2021-04-10 21:38:24
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout/index.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    meta: {
      title: '首页',
      icon: 'home'
    },
    children: [
      {
        path: '/home/index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          activePath: '/home'
        }
      },
      {
        path: '/home/calendar',
        component: () => import('@/views/calendar/index.vue'),
        meta: {
          showBack: true,
          title: '日历'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/index',
    meta: {
      title: '我的',
      icon: 'user'
    },
    children: [
      {
        path: '/user/index',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '个人中心',
          activePath: '/user'
        }
      },
      {
        path: '/user/changepwd',
        component: () => import('@/views/user/changepwd.vue'),
        meta: {
          showBack: true,
          title: '修改密码'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
