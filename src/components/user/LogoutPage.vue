<template>
    <div>
      <!-- Your other content here -->
  
      <v-btn color="primary" @click="logout">Logout</v-btn>
    </div>
  </template>
  
  <script>
  import axios from '@/axios';
  
  export default {
    methods: {
      async logout() {
        try {
          // Send a logout request to the backend
          const response = await axios.post('/logout');
  
          // Assuming the logout was successful, clear client-side authentication state
          if (response.data.status === 1) {
            // Clear any authentication tokens or user information
            // For example, if using Vuex, you might dispatch an action to clear the user state
  
            // Redirect the user to the login page
            this.$router.push('/login');
          } else {
            // Handle failed logout
            console.error('Logout failed:', response.data.message);
          }
        } catch (error) {
          console.error('Logout failed:', error);
        }
      }
    }
  };
  </script>
  