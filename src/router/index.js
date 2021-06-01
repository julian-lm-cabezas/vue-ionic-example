import { createRouter, createWebHistory } from '@ionic/vue-router';
import OrdersPage from '../views/OrdersPage.vue'

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/orders' },
    { path: '/orders', name: 'Orders', component: OrdersPage },
    {path:'/**', redirect: 'orders'}
  ]
})
