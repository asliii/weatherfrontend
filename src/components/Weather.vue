<template>
<v-app id="inspire">
   <v-container fluid>
    <v-row align="center">
      <v-col>
        <v-subheader>
          Custom items
        </v-subheader>
      </v-col>

      <v-col>
       <v-select
        v-model='select'
          :items="items"
          label="Standard"
          v-on:change='getWeatherInfo'
        ></v-select>
      </v-col>
      <v-col>
       <v-btn
          color="secondary"
          elevation="2"
          small
          v-on:click='$router.push({ name: "weather_detail_page" })'
        >3 Details</v-btn>
        <v-btn
          color="secondary"
          elevation="2"
          small
          v-on:click='$router.push({ name: "weather_detail_page" })'
        >5 Details</v-btn>
      </v-col>
    </v-row>
    <v-row>
       <v-list dense>
      <div class="text-h5">{{ select }} Current</div>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in weather_detail.data.current_condition[0]"
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
    </v-row>
  </v-container>
  </v-app>
</template>
<script>
   import Weather from '../services/Weather'
   import { mapGetters } from 'vuex';
  export default {
    name: 'WeatherComp',
    data: () => ({
        select: 'Florida',
        items: ['Florida', 'Georgia', 'Nebraska', 'California'],
    }),
    methods: {
      getWeatherInfo () {
        Weather.getWeatherInfo(this.select, 5)
      }
    },
    mounted() {
      Weather.getWeatherInfo(this.select, 5)
    },
    computed: mapGetters(['weather_detail'])
  }
</script>