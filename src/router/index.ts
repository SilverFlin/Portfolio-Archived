import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/home',
    component: () => import('/@/pages/Index.vue'),
  },
  {
    path: '/home/test',
    component: () => import('/@/pages/Test.vue')
  }
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes: routes,
});
