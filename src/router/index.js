import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HomepageView.vue'),
  },
  {
    path: '/boring-plans',
    name: 'Boring Plans',
    component: () => import('@/components/BoringPlansView.vue'),
  },
  {
    path: '/cool-guys',
    name: 'Cool Guys',
    component: () => import('@/components/CoolGuysView.vue'),
  },
  {
    path: '/boring-blogs',
    name: 'Boring Blogs',
    component: () => import('@/components/BoringBlogsView.vue'),
  },
  {
    path: '/leave-a-message',
    name: 'Leave A Message',
    component: () => import('@/components/LeaveMessageView.vue'),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
