import axios from 'axios';
import store from '../store';
import { API_URL, API_KEY } from '../settings';

export default {
    getWeatherInfo(select, day) {
        axios.get(API_URL + '?key='+ API_KEY +'&q='+ select + '&num_of_days=' + day +'&format=json').then(response => {
            store.commit('set_weather', response.data)
        })
    }
};