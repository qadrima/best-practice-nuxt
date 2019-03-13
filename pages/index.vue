<template>
    <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>

            <div class="text-xs-center">
                <logo />
                <vuetify-logo />
            </div>

            <v-card v-for="card in 10">
                <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
                <v-card-text>
                    <p>Vuetify is a progressive Material Design component</p>
                </v-card-text>
            </v-card>

        </v-flex>
    </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
    fetch ({ params, redirect }) {
        // console.log('----------------');
        // console.log(params);
        // console.log(redirect);
    },
    components: {
        Logo,
        VuetifyLogo
    },
    methods: {
        
    }
}
</script>
