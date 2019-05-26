import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import VueApollo from "vue-apollo";

import { ClientTable } from "vue-tables-2";

Vue.use(ClientTable);
Vue.use(VueApollo);

//Setup ApolloClient
export const defaultClient = new ApolloClient({
  link: new HttpLink({
    uri: "http://localhost:5000/graphql"
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
