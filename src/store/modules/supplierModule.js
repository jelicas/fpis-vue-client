import api from '../../api/api';

export default {
  state: {
    suppliers: [],
    supplier: null,
    errorMessage: 'Došlo je do greške. Pokušajte kasnije!',
    errorOccurred: false,
  },
  mutations: {
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
    setErrorOccurred(state, payload) {
      state.errorOccurred = payload;
    },
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
        if (e.taxIdNum === payload.taxIdNum) {
          let editedSupplier = {
            taxIdNum: payload.taxIdNum,
            regNum: payload.regNum,
            address: payload.address,
            city: payload.city,
            name: payload.name,
          };
          return editedSupplier;
        } else {
          return e;
        }
      });
      state.suppliers = editedSuppliers;
    },
  },
  actions: {
    getAllSuppliers: ({ commit }) => {
      api
        .getAllSuppliers()
        .then(({ data }) => {
          console.log(data.getSuppliers);
          commit('setSuppliers', data.getSuppliers);
        })
        .catch(err => {
          console.error(err);
          commit('setErrorOccurred', true);
        });
    },
  },
  getters: {
    getAllSuppliers(state) {
      return state.suppliers;
    },
  },
  namespaced: true,
};
