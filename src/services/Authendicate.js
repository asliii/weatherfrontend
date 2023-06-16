import store from '../store';
import router from '../router'
import axios from 'axios';
import { BACKEND_URL } from '../settings';


export default {
  login (username, password) {
    
    return new Promise((resolve, reject) => {
      axios.post(BACKEND_URL + 'token/', {username, password}).then(response => {
        if (response.data) {
          axios.post(BACKEND_URL + 'weatherApp/user/user_detail/', {}, { headers: {
            'Authorization': `Bearer ${response.data.access}`
          }}).then(res => {
              console.log('user', res.data);
              store.commit('login', res.data)
              setTimeout(() => {
                router.push({ name: 'weather'})
              }, 50);
            })
        } else {
          console.log(response)
          reject(false)
        }
      }, error => {
        console.log(error)
        reject(error);
      });
    });
  }
};