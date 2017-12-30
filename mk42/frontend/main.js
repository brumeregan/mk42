import Vue from 'vue';
import Vuex from 'vuex';
import {routes} from './router/routes';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from './components/App.vue';

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);


// eslint-disable-next-line no-new

// Added config of routes
const router = new VueRouter({
    routes: routes
});

const store = new Vuex.Store({
    state: {
        islogged: false
    },
    mutations: {
        login(state) {
            console.log('login');
        },
        logout(state) {
            console.log('logout');
        }
    },
    getters: {
        isLogged(state) {
            return state.isLogged;
        }
    }
});

// Initialize vue app
new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
    components: {App}
});
