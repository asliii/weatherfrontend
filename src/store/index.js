import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    authenticated: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user'))['authenticated'] : false
  };
  
  const mutations = {
    login (state, user) {
      state.user = user;
      state.authenticated = true;
      localStorage.setItem('user', JSON.stringify(state));
    },
    logout (state) {
      state.user = null;
      state.authenticated = false;
      localStorage.removeItem('user')
    }
  };
  
  const getters = {
    user () {
        return state.user
    },
    login () {
      return state.authenticated
    }
  };
  
  export default new Vuex.Store({
    state,
    mutations,
    getters
  });
  