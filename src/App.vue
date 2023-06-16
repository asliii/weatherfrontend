<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),

  mounted() {
    this.$router.push({ name: 'login' })
  }
};
</script>
