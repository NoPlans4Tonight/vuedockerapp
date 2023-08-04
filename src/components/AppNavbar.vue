<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <router-link to="/" class="home-link">
      <v-app-bar-title class="home-link">Home</v-app-bar-title>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>


export default {
  name: 'AppNavbar',

}
</script>

<style>
.home-link {
  text-decoration: none; /* Remove default link underline */
  color: inherit; /* Inherit the color from the parent element */
  cursor: pointer; /* Show pointer cursor on hover */
}

.home-link:hover {
  text-decoration: underline; /* Add underline on hover */
}

.home-text {
  font-size: 18px; /* Adjust the font size as needed */
}
</style>
