<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- Registration Form -->
        <v-sheet elevation="12" class="registration-sheet">
          <v-card-title class="headline">Register</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="register">
              <v-text-field v-model="name" label="Name"></v-text-field>
              <v-text-field v-model="email" label="Email"></v-text-field>
              <v-text-field v-model="password" label="Password" type="password"></v-text-field>
              <v-btn color="primary" type="submit">Register</v-btn>
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
      name: '',
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
    async register() {
      try {
        const response = await axios.post('/register', {
          name: this.name,
          email: this.email,
          password: this.password
        });

        if (response.data.status === 1) {
          this.showSnackbar('Successfully registered.', 'success');
          this.name = ''; // Clear input fields
          this.email = '';
          this.password = '';
          // Handle successful registration (e.g., redirect)
        } else if (response.data.status === 0) {
          this.showSnackbar('Registration failed.', 'error');
        }
      } catch (error) {
        console.error('Registration failed:', error);
        if (error.response && error.response.status === 422) {
          // Handle validation errors
          const validationErrors = error.response.data.errors;
          const errorMessage = Object.values(validationErrors).join(', ');
          this.showSnackbar(`Registration failed: ${errorMessage}`, 'error');
        } else {
          this.showSnackbar('An error occurred during registration.', 'error');
        }
      }
    },
    showSnackbar(message, color) {
      this.snackbar.message = message;
      this.snackbar.color = color;
      this.snackbar.show = true;
    }
  }
};
</script>

<style scoped>
.registration-sheet {
  padding: 20px;
  border-radius: 10px;
}
</style>
