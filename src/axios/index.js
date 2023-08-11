import axios from 'axios';

let baseURL = 'http://laraveldockerapp.test/'; // Default base URL

if (process.env.VUE_APP_ENV === 'local') {
  baseURL = process.env.VUE_APP_API_ROOT_URL; // Use environment-specific base URL
}

const instance = axios.create({
  baseURL: baseURL,
});

export default instance;