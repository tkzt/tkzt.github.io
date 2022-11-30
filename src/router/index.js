import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/HomepageView.vue'),
  },
  {
    path: '/fine-weather-gallery',
    name: 'Fine Weather Gallery',
    component: () => import('@/components/FineWeatherGalleryView.vue'),
  },
  {
    path: '/boring-plans',
    name: 'Boring Plans',
    component: () => import('@/components/BoringPlansView.vue'),
  },
];

export default createRouter({
  routes,
  history: createWebHashHistory(),
});
