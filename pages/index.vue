<template>
    <v-layout column justify-center align-center>
        <v-flex xs12 sm8 md6>

            <div class="text-xs-center">
                <logo />
                <vuetify-logo />
            </div>

            <h1>{{ }}</h1>
            <v-card v-for="card in 10" :key="card">
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
    components: {
        Logo,
        VuetifyLogo
    },
    methods: {

    },
    computed: {
        string(){
            return this.$store.getters.paramString('Qadri');
        }
    }
}
</script>
