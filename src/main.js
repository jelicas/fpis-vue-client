import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache
} from 'apollo-boost';
import VueApollo from 'vue-apollo';


Vue.use(VueApollo);

//Setup ApolloClient
export const defaultClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql'
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

const apolloProvider = new VueApollo({
  defaultClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");