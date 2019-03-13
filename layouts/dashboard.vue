<template>
    <v-app>
        <nuxt/>
    </v-app>
</template>

<script>
export default {
    middleware: 'unauthenticated',
}
</script>
