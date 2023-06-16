import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    is_login: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['authenticated'] : false
  };
  
  const mutations = {
    login (state, user) {
      state.user = user;
      state.is_login = true;
      localStorage.setItem('user', JSON.stringify(state));
    },
    logout (state) {
      state.user = null;
      state.is_login = false;
      localStorage.removeItem('user')
    }
  };
  
  const getters = {
    user () {
        return state.user
    },
    is_login () {
      return state.is_login
    }
  };
  
  export default new Vuex.Store({
    state,
    mutations,
    getters
  });
  