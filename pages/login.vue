<template>
    <v-app>
        <v-layout column justify-center align-center>
            <v-flex xs6 sm6 md6>

                <v-card min-width="300">
                    <v-card-title>Login Page</v-card-title>
                    <v-card-text>

                        <v-form>
                            <v-text-field name="Username"
                                label="Username"
                                type="text"
                                v-model="login.username">
                            </v-text-field>
                            <v-text-field name="Password"
                                label="Password"
                                type="password"
                                v-model="login.password">
                            </v-text-field>
                            <v-btn @click="submitLogin">Login</v-btn>
                        </v-form>

                    </v-card-text>
                </v-card>

            </v-flex>
        </v-layout>
    </v-app>
</template>

<script>
export default{
    layout: 'dashboard',
    data() {
        return {
            login : {
                device : 'web'
            }
        }
    },
    methods: {
        submitLogin(){
            this.$store.dispatch('login', this.login).then(response => {
                if(response.status) this.$router.push('/');
            }, error => {
                console.error(error);
            });
        }
    }
}
</script>
