import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ()=>import('@/components/Homepage.vue')
    },
    {
        path: '/fine-weather-gallery',
        name: 'Fine Weather Gallery',
        component: ()=>import('@/components/FineWeatherGallery.vue')
    },
    {
        path: '/boring-plans',
        name: 'Boring Plans',
        component: ()=>import('@/components/BoringPlans.vue')
    },
]

export default createRouter({
    routes,
    history: createWebHashHistory()
})