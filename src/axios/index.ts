import axios from 'axios';

const instance = axios.create({
    baseURL: `https://randomuser.me/api/`,
    method: 'post',
    headers: {
         'Content-Type':'application/json',
     }
})
instance.defaults.timeout = 2500;

export default instance;
