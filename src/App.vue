<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import store from './store';
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  data() {
    return {
    }
  },
  computed: mapGetters(['is_login']),
  mounted() {
    //this.is_login = store.getters['is_login']
    if (!this.is_login) {
      this.$router.push({ name: 'login' })
    } else {
      this.$router.push({ name: 'weather' })
    }
  },
};
</script>
