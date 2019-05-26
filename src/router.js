import Vue from "vue";
import Router from "vue-router";
import store from '@/store/store';
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Suppliers from "./views/Suppliers.vue";
import Orders from "./views/Orders.vue";
import Cards from "./components/Cards.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home,
      children: [{
          path: "",
          name: "home",
          component: Cards,
        }, {
          path: "/suppliers",
          name: "suppliers",
          component: Suppliers,
        },
        {
          path: "/orders",
          name: "orders",
          component: Orders,
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.getters.getUser == null) {
    console.log(store.getters.getUser);
    console.log("LOGIN ROUTES");
    next('/login');
  } else {
    next();
  }
});

export default router;