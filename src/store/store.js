import Vue from "vue";
import Vuex from "vuex";
import userModule from './modules/userModule';
import router from '@/router';

import {
  SIGNIN_USER
} from '@/queries';

import {
  defaultClient as apolloClient
} from '@/main';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    signinUser: ({
      commit
    }, payload) => {
      apolloClient.query({
        query: SIGNIN_USER,
        variables: payload
      }).then(({
        data
      }) => {
        localStorage.setItem('token', data.signinUser.token);
        console.log(data.signinUser);
        commit('setUser', data.signinUser.token);
        router.push("/");
      }).catch(err => {
        console.error(err)
      })
    }
  },
  modules: {
    user: userModule
  }
})