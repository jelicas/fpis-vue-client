import {
    defaultClient as apolloClient
} from '@/main';
import router from '@/router';
import {
    SIGNIN_USER
} from '@/queries/userQueries';

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
    getters: {
        getUser(state) {
            return state.user;
        }
    }
};