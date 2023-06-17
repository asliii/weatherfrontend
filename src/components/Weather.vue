<template>
<v-app id="inspire">
<bar-comp></bar-comp>
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
          clearable
          label="Select"
        ></v-select>
      </v-col>
      <v-col>
       <v-btn
          color="secondary"
          elevation="2"
          small
          v-on:click='getWeatherInfo(3)'
        >3 Days</v-btn>

        <v-btn
          color="secondary"
          elevation="2"
          small
          v-on:click='getWeatherInfo(5)'
        >5 Days</v-btn>
      </v-col>
    </v-row>
    <div v-if="current">
    <v-row class="d-flex justify-center">
       <v-list dense>
      <div class="text-h5">{{ select }} Current</div>
      <v-list-item-group color="primary">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <img :src="current.weatherIconUrl[0].value">
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title v-text="current.weatherDesc[0].value"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-row>
      <v-row class="d-flex justify-center">
      <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        FeelsLikeC
                      </th>
                      <th class="text-left">
                        FeelsLikeF
                      </th>
                      <th class="text-left">
                        Humidity
                      </th>
                      <th class="text-left">
                        Temp C
                      </th>
                      <th class="text-left">
                        Temp F
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ current.FeelsLikeC }}</td>
                      <td>{{ current.FeelsLikeF }}</td>
                      <td>{{ current.humidity }}</td>
                      <td>{{ current.temp_C }}</td>
                      <td>{{ current.temp_F }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
      </v-row>
     <v-row class="d-flex justify-center">
      <v-btn
          color="primary"
          v-on:click="detail=true"
        >
          {{ day }} Days Details
        </v-btn>
     </v-row>
      <div class="text-center">
        <v-dialog
          v-model="detail"
          width="auto">
          <v-card>
            <v-card-text>
               <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Date
                      </th>
                      <th class="text-left">
                        avgtempC
                      </th>
                      <th class="text-left">
                        avgtempF
                      </th>
                      <th class="text-left">
                        maxtempC
                      </th>
                      <th class="text-left">
                        maxtempF
                      </th>
                      <th class="text-left">
                        mintempC
                      </th>
                      <th class="text-left">
                        mintempF
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, i) in weather_detail.data.weather"
                      :key="i"
                    >
                      <td>{{ item.date }}</td>
                      <td>{{ item.avgtempC }}</td>
                      <td>{{ item.avgtempF }}</td>
                      <td>{{ item.maxtempC }}</td>
                      <td>{{ item.maxtempF }}</td>
                      <td>{{ item.mintempC }}</td>
                      <td>{{ item.mintempF }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="detail = false">Close Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </v-container>
  </v-app>
</template>
<script>
   import Weather from '../services/Weather'
   import { mapGetters } from 'vuex';
   import BarComp from './Bar';
  export default {
    name: 'WeatherComp',
    data: () => ({
        select: null,
        items: ['Florida', 'Georgia', 'Nebraska', 'California'],
        current: null,
        detail: false,
        day: 0
    }),
    methods: {
      getWeatherInfo (day) {
        if (this.select) {
          this.day = day
          Weather.getWeatherInfo(this.select, day)
        }
      }
    },
    components: {
      BarComp
    },
    computed: mapGetters(['weather_detail']),
    watch: {
      weather_detail() {
        this.current = this.weather_detail.data.current_condition[0]
      }
    }
  }
</script>