<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
  },

  watched: () => ({
    ...mapGetters(['is_login']),
  }),
  mounted() {
    if (!this.is_login) {
      this.$router.push({ name: 'login' })
    } else {
      this.$router.push({ name: 'weather' })
    }
  },
};
</script>
