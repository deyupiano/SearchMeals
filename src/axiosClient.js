import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

// Alter defaults after instance has been created
axiosClient.defaults.headers.common['content-type'] = 'application/x-www-form-urlencoded';

export default axiosClient;