import store from '@/store/store';
import Vue from 'vue';
import Router from 'vue-router';

import Cards from './components/Cards.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Order from './views/Order.vue';
import OrderEdit from './views/OrderEdit.vue';
import Orders from './views/Orders.vue';
import Suppliers from './views/Suppliers.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'home',
          component: Cards,
        },
        {
          path: '/suppliers',
          name: 'suppliers',
          component: Suppliers,
        },
        {
          path: '/orders',
          name: 'orders',
          component: Orders,
          children: [
            // {
            //   path: ':orderId',
            //   name: 'orderDetails',
            //   component: Order,
            //   props: true,
            // },
          ],
        },
        {
          path: '/order/:orderId',
          name: 'orderDetails',
          component: Order,
          props: true,
        },
        {
          path: '/order/:orderId',
          name: 'orderEditDetails',
          component: OrderEdit,
          props: true,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.getters.getUser == null) {
    console.log(store.getters.getUser);
    console.log('LOGIN ROUTES');
    next('/login');
  } else {
    next();
  }
});

export default router;
