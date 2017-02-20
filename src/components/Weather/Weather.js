// @flow
import Vue from 'vue';
import Component from 'vue-class-component';
import axios from 'axios';
import WeatherWidget from './WeatherWidget.vue';
import WeatherInput from './WeatherInput.vue';

require('malihu-custom-scrollbar-plugin')($);

@Component({
  components: {
    WeatherWidget,
    WeatherInput,
  }
})
export default class Weather extends Vue {
  cities:string[] = [];
  created() {
    axios.get();
    this.cities = JSON.parse(localStorage.getItem('citites')) || [];
  }
  addCity(city:string) {
    if (!this.cities.includes(city)) {
      this.cities.push(city);
    }
    localStorage.setItem('citites', JSON.stringify(this.cities));
  }
  removeCity(city:string) {
    const index = this.cities.indexOf(city);
    this.cities.splice(index, 1);
    localStorage.setItem('citites', JSON.stringify(this.cities));
  }
}
