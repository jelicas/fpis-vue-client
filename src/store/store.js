import Vue from 'vue';
import Vuex from 'vuex';

import modalModule from './modules/modalModule';
import orderModule from './modules/orderModule';
import supplierModule from './modules/supplierModule';
import userModule from './modules/userModule';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    user: userModule,
    supplier: supplierModule,
    modal: modalModule,
    order: orderModule,
  },
});
