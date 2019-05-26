import SyncLoader from "vue-spinner/src/SyncLoader.vue";

export default {
  state: {
    modalVisible: false,
    componentName: null
  },
  mutations: {
    showModal(state, componentName) {
      state.modalVisible = true;
      state.componentName = () => ({
        component: import(`@/components/modals/modal-content/${componentName}.vue`),
        loading: SyncLoader,
        delay: 200,
        timeout: 10000
      });
    },
    closeModal(state) {
      state.modalVisible = false;
    }
  },
  actions: {},
  getters: {
    isVisible(state) {
      return state.modalVisible;
    }
  },
  namespaced: true
};
