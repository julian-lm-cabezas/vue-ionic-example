import { createRouter, createWebHistory } from '@ionic/vue-router';
import OrdersPage from '../views/OrdersPage.vue'
import PluginsPage from '../views/PluginsPage.vue'
export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/orders' },
    { path: '/orders', name: 'Orders', component: OrdersPage },
    { path: '/plugins', name: 'Plugins', component: PluginsPage },
    {path:'/**', redirect: 'orders'}
  ]
})
