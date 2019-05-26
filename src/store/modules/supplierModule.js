import { defaultClient as apolloClient } from "@/main";

import { GET_ALL_SUPPLIERS } from "@/queries/supplierQueries";

export default {
  state: {
    suppliers: [],
    supplier: null
  },
  mutations: {
    setSuppliers(state, payload) {
      state.suppliers = payload;
    },
    setSupplier(state, payload) {
      state.supplier = payload;
    },
    addSupplier(state, payload) {
      state.suppliers.push(payload);
      console.log(state.suppliers);
    },
    deleteSupplier(state, payload) {
      state.suppliers = state.suppliers.filter(e => e.taxIdNum !== payload);
    },
    editSupplier(state, payload) {
      let editedSuppliers = state.suppliers.map(e => {
        //pitaj sto ne moze short if
        if (e.taxIdNum === payload.taxIdNum) {
          let editedSupplier = {
            taxIdNum: payload.taxIdNum,
            regNum: payload.regNum,
            address: payload.address,
            city: payload.city,
            name: payload.name
          };
          return editedSupplier;
        } else {
          return e;
        }
      });
      state.suppliers = editedSuppliers;
    }
  },
  actions: {
    getAllSuppliers: ({ commit }) => {
      apolloClient
        .query({
          query: GET_ALL_SUPPLIERS
        })
        .then(({ data }) => {
          console.log(data.getSuppliers);
          commit("setSuppliers", data.getSuppliers);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  getters: {
    getAllSuppliers(state) {
      return state.suppliers;
    }
  },
  namespaced: true
};
