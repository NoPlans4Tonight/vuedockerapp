<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <router-link to="/" class="home-link">
      <div class="app-bar-title-container">
        <v-icon class="mdi-icon">mdi-crown-circle-outline</v-icon>
        <v-app-bar-title class="home-link">Jonathon Lochan</v-app-bar-title>
      </div>
    </router-link>
    
    <v-spacer></v-spacer>
    
    <router-link to="/projects" class="home-link">
      <v-app-bar-title class="home-link">My Projects</v-app-bar-title>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    toggleDrawer() {
      // Add your logic to open or close a navigation drawer
    }
  }
}

</script>

<style>
.home-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.home-link:hover {
  /* text-decoration: underline; */
  background-color: black;
}

.app-bar-title-container {
  display: flex;
  align-items: center;
}

.mdi-icon {
  margin-right: 4px; /* Adjust the margin as needed */
}
</style>
