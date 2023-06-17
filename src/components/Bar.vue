<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Merhaba {{ user.first_name }} {{ user.last_name }} ({{ user.username }})</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon v-on:click="$store.commit('logout'); $router.push({ name: 'login' })">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'BarComp',
  computed: mapGetters(['user']),
};
</script>
