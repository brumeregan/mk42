import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Userpage from '../components/Userpage.vue';
import Home from '../components/Home.vue';
import CreateUser from '../components/CreateUser.vue';

Vue.use(VueRouter);


export const routes = [
    {
        path: '/',
        name: 'App',
        components: {
            default: Home
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'Logout',
        redirectTo: '/'
    },
    {
        path: '/signup',
        name: 'CreateUser',
        component: CreateUser
    },
    {
        path: '/userpage',
        name: 'Userpage',
        component: Userpage
    },
    {
        path: '*',
        component: {template: '<h1>Page Not Found!</h1>'}
    }
];