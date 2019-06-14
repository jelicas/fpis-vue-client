export default {
  state: {
    orders: [{ orderId: 1, supplierName: 'PharmaSwiss', dateCreated: '10.10.2019' }],
    order: null,
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },
    setOrder(state, payload) {
      state.order = payload;
    },
    addOrder(state, payload) {
      state.suppliers.push(payload);
      console.log(state.orders);
    },
    deleteOrder(state, payload) {
      state.orders = state.orders.filter(e => e.taxIdNum !== payload);
    },
    editOrder(state, payload) {},
  },
  actions: {
    getAllOrders: ({ commit }) => {
      // apolloClient
      //   .query({
      //     query: GET_ALL_ORDERS,
      //   })
      //   .then(({ data }) => {
      //     console.log(data.getOrders);
      //     commit('setOrders', data.getOrders);
      //   })
      //   .catch(err => {
      //     console.error(err);
      //   });
    },
  },
  getters: {
    getAllOrders(state) {
      return state.orders;
    },
  },
  namespaced: true,
};
