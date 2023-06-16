<template>
    <v-app>
        <v-list dense>
      <div class="text-h5">{{ weather_detail.data.request[0].query }}</div>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in weather_detail.data.weather"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="i+ ': '"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-app>
</template>
<script>
   import { mapGetters } from 'vuex';
  export default {
    name: 'WeatherComp',
    data: () => ({
    }),
    computed: mapGetters(['weather_detail'])
  }
</script>