<template>
    <div id="app">
        <app-nav></app-nav>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import AppNav from './AppNav.vue'

    export default {
        name: 'app',
        data () {
            return {
                msg: 'Python Peer-Lab Kyiv',
                api: {
                    base: window.location.host,
                    url: '/get-api-token/',
                    protocol: window.location.protocol,
                    localName: 'pythonMeetup'
                }
            }
        },

        components: {
          AppNav
        },

        created: function () {
            let self = this;
            const dataFromLocalStorage = localStorage.getItem(self.api.localName);
            const dataJSON = JSON.parse(dataFromLocalStorage);

            if (!!dataJSON === true) {
                this.$router.push('/userpage');

            }
        }
    }
</script>

