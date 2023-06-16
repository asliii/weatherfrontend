//import { API_URL } from 'app-config';
import store from '../store';
import router from '../router'
import axios from 'axios';


export default {
  login (username, password) {
    
    return new Promise((resolve, reject) => {
      let url = 'http://0.0.0.0:8000/'
      //let login_url = url + 'token/'
      //console.log(login_url)
      axios.post(url + 'token/', {username, password}).then(response => {
        if (response.data) {
          axios.post(url + 'weatherApp/user/user_detail', {}, { headers: {
            'Authorization': `JWT ${response.data.access}`
          }}
      ).then(res => {
              console.log('user', res.data);
              store.commit('login', res.data)
              setTimeout(() => {
                router.push({ name: 'dashboard'})
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