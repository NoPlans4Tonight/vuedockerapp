<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <!-- Login Form -->
          <v-sheet elevation="12" class="login-sheet">
            <v-card-title class="headline">Login</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="email" label="Email"></v-text-field>
                <v-text-field v-model="password" label="Password" type="password"></v-text-field>
                <v-btn color="primary" type="submit">Login</v-btn>
              </v-form>
            </v-card-text>
          </v-sheet>
  
          <!-- Snackbar for displaying notifications -->
          <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout">
            {{ snackbar.message }}
          </v-snackbar>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import axios from '@/axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        snackbar: {
          show: false,
          message: '',
          color: '',
          timeout: 3000
        }
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('/login', {
            email: this.email,
            password: this.password
          });
  
          if (response.data.status === 1) {
            this.showSnackbar('Login successful.', 'success');
          } else {
            this.showSnackbar('Login failed.', 'error');
          }
        } catch (error) {
          console.error('Login failed:', error);
          this.showSnackbar('An error occurred during login.', 'error');
        }
      },
      showSnackbar(message, color) {
        this.snackbar.message = message;
        this.snackbar.color = color;
        this.snackbar.show = true;
      },
      created() {
        const successMessage = this.$route.query.successMessage;
            if (successMessage) {
                this.showSnackbar(successMessage, 'success');
            }
        }
    }
  };
  </script>
  
  <style scoped>
  .login-sheet {
    padding: 20px;
    border-radius: 10px;
  }
  </style>
  