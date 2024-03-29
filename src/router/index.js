import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
                path: '/Edit/:id',
                name: 'Edit',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Edit.vue')
            },
            {
                path: '/Add',
                name: 'Add',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '../views/Add.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router