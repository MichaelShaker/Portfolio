import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LicensePlate from '../pages/LicensePlate.vue'
import ElectionResults from '../pages/ElectionResults.vue'
import Beweegvriendelijk from '../pages/Beweegvriendelijk.vue'
import koptisch from '../pages/BegraafplaatsPage.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/project/license-plate', name: 'license-plate', component: LicensePlate },
    { path: '/project/election-results', name: 'election-results', component: ElectionResults },
    { path: '/project/beweegvriendelijk', name: 'beweegvriendelijk', component: Beweegvriendelijk },
    { path: '/project/koptisch', name: 'koptisch', component: koptisch },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }

        return { top: 0 }
    },
})

export default router