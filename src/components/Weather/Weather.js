import WeatherWidget from './WeatherWidget.vue';
import WeatherInput from './WeatherInput.vue';

require('malihu-custom-scrollbar-plugin')($);

export default {
  name: 'weather',
  data: () => ({
    cities: [],
  }),
  components: {
    WeatherWidget,
    WeatherInput,
  },
  created: function() {
    this.cities = JSON.parse(localStorage.getItem('citites')) || [];
  },
  methods: {
    addCity: function(city) {
      if (!this.cities.includes(city)) {
        this.cities.push(city);
      };
      localStorage.setItem('citites', JSON.stringify(this.cities));
    },
    removeCity: function(city) {
      let index = this.cities.indexOf(city);
      this.cities.splice(index, 1);
      localStorage.setItem('citites', JSON.stringify(this.cities));
    },
  },
};
