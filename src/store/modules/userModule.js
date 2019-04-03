export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, payload) {
            console.log(payload);
            state.user = payload;
        },
        unsetUser(state) {
            state.user = null;
        }
    },
    actions: {},
    getters: {
        getUser(state) {
            return state.user;
        }
    }
};