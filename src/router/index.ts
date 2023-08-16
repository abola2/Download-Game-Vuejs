import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
// @ts-ignore
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/level1',
      name: 'level1',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Levels/LevelOne.vue')
    }
  ]
})

export default router
