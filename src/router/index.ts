import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('/@/pages/Index.vue'),
    meta: { transition: 'slide-left' },
  },
  {
    path: '/test',
    component: () => import('/@/pages/Test.vue'),
    meta: { transition: 'slide-right' },
  }
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
