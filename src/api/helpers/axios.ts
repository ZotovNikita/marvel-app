import axios from 'axios';
import { Flip, toast } from 'react-toastify';
// Config
import envs from '../../config/environments';

const instance = axios.create({
  baseURL: envs.baseApiUrl
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    toast.error(error.response.data.message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: 'light',
      transition: Flip
    });
    return Promise.reject(error);
  }
);

export default instance;
