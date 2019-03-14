<template>
    <v-app>

        <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
            <v-list>

                <v-list-tile v-for="(item, i) in items" :key="i" :to="item.to" router exact>
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title" />
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
        </v-navigation-drawer>

        <v-toolbar :clipped-left="clipped" fixed app>
            <v-toolbar-side-icon @click="drawer = !drawer" title="drawer" />
            <v-btn icon @click.stop="miniVariant = !miniVariant" title="miniVariant">
                <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped" title="clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-toolbar-title v-text="title" />

            <v-spacer />

            <v-btn icon>
                <v-icon @click="logout()" title="Logout">apps</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <v-footer fixed app>
            <span>&copy; Qadri Mar Akbar</span>
        </v-footer>

    </v-app>
</template>

<script>
export default {
    middleware: 'authenticated',
    mounted() {
        console.log('===========>mounted');
    },
    beforeCreate() {
        console.log('===========>beforeCreate');
    },
    data() {
        return {
            clipped : false,
            drawer  : false,
            items   : [
                {
                    icon    : 'apps',
                    title   : 'Welcome',
                    to      : '/'
                },
                {
                    icon    : 'bubble_chart',
                    title   : 'Profile',
                    to      : '/profile/akbar'
                }
            ],
            miniVariant : false,
            title       : 'QadriMarAkbar'
        }
    },
    methods: {
        logout(){
            this.$store.dispatch('logout').then(response => {
                if(response) this.$router.push('/login');
            }, error => {
                console.error(error);
            });
        },
    }
}
</script>
