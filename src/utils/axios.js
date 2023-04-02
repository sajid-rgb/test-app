import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'X-Custom-Header': 'foobar'}
  });

export default axiosInstance;
