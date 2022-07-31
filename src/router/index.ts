import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '/src/components/HelloWorld.vue'
import About from '/src/components/About.vue'

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: "About",
        component: About,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router