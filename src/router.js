import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import ProjectsPage from './components/projects/ProjectsPage.vue';
import RegisterPage from './components/user/RegisterPage.vue';
import LoginPage from './components/user/LoginPage.vue';
import LogoutPage from './components/user/LogoutPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'ProjectsPage',
    component: ProjectsPage,
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/logout',
    name: 'LogoutPage',
    component: LogoutPage,
  }
  // ... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
