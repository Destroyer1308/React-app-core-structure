import axios from 'axios';
import { isMobile } from 'react-device-detect';
// import { urlMapping } from 'constants';


export default function apiClient() {
    const instance = axios.create();
    instance.interceptors.request.use(
        conf => {
        conf.headers['x-platform'] = isMobile ? 'mweb' : 'web';
        return conf;
    } ,
    error => Promise.reject(error)
    );

  instance.interceptors.response.use(
    response => response.data,
    error => Promise.reject(error.response ? error.response : error)
  );

  return instance;
}