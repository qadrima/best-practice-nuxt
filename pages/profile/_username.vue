<template>
    <div>
        username
        <span v-if="user">{{ user.username }}</span>
        <br>

        <v-btn @click="fetchUserBirthday">fetchUserBirthday</v-btn>
        <v-btn @click="fetchUser">fetchUser</v-btn>
        
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
