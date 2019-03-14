<template>
    <div>
        username
        <span v-if="user">{{ user.username }}</span>
        <br>
        <span @click="fetchUserBirthday()">fetchUserBirthday</span>
        <span @click="fetchUser()">fetchUser</span>
    </div>
</template>

<script>
export default {
    fetch ({ params, store }) {
        // console.log('----------------');
        // console.log(params);
        // console.log(store.state);
    },
    data() {
        return {
            user : null
        }
    },
    methods: {
        fetchUserBirthday(){
            this.$store.dispatch('fetchUserBirthday').then(response => {
                console.log(response);
            }, error => {
                console.error(error);
            });
        },
        fetchUser(){
            this.$store.dispatch('fetchAuth');
        }
    }
}
</script>
