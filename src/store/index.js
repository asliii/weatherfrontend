import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    is_login: localStorage.getItem('user') ? true : false,
    last_selected_weather: null
  };
  
  const mutations = {
    login (state, user) {
      console.log(state)
      state.user = user;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout (state) {
      state.user = null;
      localStorage.removeItem('user')
    },
    set_weather (state, weather) {
      console.log(weather)
      state.last_selected_weather = weather
    }
  };
  
  const getters = {
    user () {
        return state.user
    },
    is_login () {
      return state.is_login
    },
    weather_detail () {
      console.log('sfsdfsdf', state.last_selected_weather)
      return state.last_selected_weather
    }
  };
  
  export default new Vuex.Store({
    state,
    mutations,
    getters
  });
  