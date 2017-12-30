<template>
    <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo">Peer-Lab Kyiv</a>
            <ul id="nav-mobile" class="right tabs-transparent hide-on-med-and-down">
                <router-link to="/" tag="li" >
                    <a active-class="active">Home</a>
                </router-link>
                <router-link to="/login" tag="li" active-class="active">
                    <a>Log in</a>
                </router-link>
                <router-link to="/" tag="li" active-class="active">
                    <a>Log Out</a>
                </router-link>
                <router-link to="/signup" tag="li" active-class="active">
                    <a>Sign up</a>
                </router-link>
          </ul>
        </div>
    </nav>
</template>

<script>
//    import { checkToken, logout } from '../utils/auth';

    export default {
        name: 'Nav',
        data() {
            return {
//                isLogged: false
            }
        },
        mounted: function() {
//            this.isLogged = checkToken();
        },
        computed: {
//            checkLog: function() {
//                return this.isLogged;
//            }
        },

        methods: {
//            exit: function(e) {
//                logout(this);
//                this.isLogged = checkToken();
//            }
        }
    }
</script>