import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Dashboard from '@/views/dashboard/index.vue'

let router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Dashboard },
        { path: '/login', component: Login },
    ]
})

// router.beforeEach(async (to, from) => {
//     console.log(from)
//     console.log(to)
//     if (to.path != '/login') {
//         return {
//             path: '/login'
//         }
//     }

// })


export default router