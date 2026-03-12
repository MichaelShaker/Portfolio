import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LicensePlate from '../pages/LicensePlate.vue'
import ElectionResults from '../pages/ElectionResults.vue'
import Beweegvriendelijk from '../pages/Beweegvriendelijk.vue'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/project/license-plate', name: 'license-plate', component: LicensePlate },
    { path: '/project/election-results', name: 'election-results', component: ElectionResults },
    { path: '/project/beweegvriendelijk', name: 'beweegvriendelijk', component: Beweegvriendelijk },
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
})

export default router