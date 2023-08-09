<template>
  <v-app :dark="darkMode">
    <v-main>
      <v-container>
        <AppNavBar/>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>


import AppNavBar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavBar,
  },
}
</script>

<style>

</style>
