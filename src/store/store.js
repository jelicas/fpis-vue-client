import Vue from "vue";
import Vuex from "vuex";
import userModule from './modules/userModule';
import supplierModule from "./modules/supplierModule";
import modalModule from "./modules/modalModule";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    user: userModule,
    supplier: supplierModule,
    modal: modalModule
  }
})