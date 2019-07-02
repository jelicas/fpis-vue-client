import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ClientTable } from 'vue-tables-2';

import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.use(ClientTable);
Vue.use(VueApollo);

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};
//Setup ApolloClient
export const defaultClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
