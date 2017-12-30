<template>
    <form class="form" id="form-login" v-on:submit.prevent>
        <div>
            <label for="username">Username:</label>
            <input type="text"
                   id="username"
                   name="username"
                   v-model="credentials.username"
                   placeholder="Enter your username"
                   required>

        </div>
        <div>
            <label for="password">Your password:</label>
            <input type="password"
                   id="password"
                   name="password"
                   v-model="credentials.password"
                   placeholder="Enter password"
                   required>
        </div>
        <button class="btn light-green" v-on:click="submit">Login</button>
    </form>
</template>

<script>

    import { login } from '../utils/auth';

    export default {
        name: 'login',
        data() {
            return {
                credentials: {
                    username: '',
                    password: ''
                },

                userData: {
                    token: ''
                },

                api: {
                    base: window.location.host,
                    url: '/get-api-token/',
                    protocol: window.location.protocol,
                    localName: 'pythonMeetup'
                }
            }
        },
        methods: {
            submit: function (e) {
                const self = this;

                if (this.credentials.username && this.credentials.password) {

                    login(this, this.credentials, '/userpage');

                } else {
                    console.log('form not validated');
                }
            }
        }
    }

</script>