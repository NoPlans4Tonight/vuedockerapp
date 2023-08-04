<template>
  <v-app>
    <v-main>
      <v-container>
        <AppNavBar/>
        <HomePage/>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>

import HomePage from './components/HomePage.vue';
import AppNavBar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavBar,
    HomePage,
  }
}
</script>

<style>

</style>
