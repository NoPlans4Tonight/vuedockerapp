<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    
    <router-link to="/" class="home-link">
      <div class="app-bar-title-container">
        <v-app-bar-title class="home-link">Jonathon Lochan</v-app-bar-title>
      </div>
    </router-link>
    
    <v-spacer></v-spacer>
    
    <v-app-bar-items class="hidden-md-and-down">
      <router-link to="/projects" class="home-link">
        <v-app-bar-title class="home-link">My Projects</v-app-bar-title>
      </router-link>
      <router-link v-for="(item, index) in items" :key="index" :to="item.to" class="home-link">
        <v-app-bar-title class="home-link">{{ item.title }}</v-app-bar-title>
      </router-link>
    </v-app-bar-items>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <router-link v-for="(item, index) in items" :key="index" :to="item.to">
        <v-list-item>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'My Projects', to: '/projects' },
        { title: 'Register', to: '/register' },
        { title: 'Login', to: '/login' },
        { title: 'Logout', to: '/logout' },
        { title: 'Item 4', to: '/item4' },
        { title: 'Item 5', to: '/item5' }
      ]
    };
  }
};
</script>

<style>
.home-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 0 12px;
}

.home-link:hover {
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
