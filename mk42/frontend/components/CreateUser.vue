<template>
    <div>
        <h3>This is user create page</h3>

        <form action="">
            <input type="text" name="username" placeholder="Username">
            <input type="email" name="useremail" placeholder="Email">
            <input type="password" name="password" placeholder="Password">
            <input type="password" name="password-check" placeholder="Password again">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'CreateUser',
        data() {
            return {

            }
        }
    }
</script>