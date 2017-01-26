import axios from 'axios';
require('malihu-custom-scrollbar-plugin')($);  
import config from '../../config';

export default {
  name: 'weather',
  data: () => ({
    location: {},
    weather: {},
  }),
  mounted: async function () {
    this.location = await this.getLocation();
    this.location = {...this.location.data};
    this.weather = await this.getWeather(this.location);
    this.weather = {...this.weather.data};
    this.weather.list = this.parseWeatherData(this.weather);
    this.weatherDay = this.weather.list[0];
    this.weather.list.splice(0, 1);
    setTimeout(() => {
      $('.test').mCustomScrollbar({
        axis:"x"
      });
    }, 0);
  },
  methods: {
    getLocation: () => (axios.get(config.services.ipInfo.url)),
    getWeather: location => {
      const url = config.services.openWeatherMap.url;
      const apiKey = config.services.openWeatherMap.apiKey;
      return axios.get(`${url}/data/2.5/forecast/daily?q=${location.city}&appid=${apiKey}`);
    },
    parseWeatherData: (weather) => (
      weather.list.map((item) => {
        item.temp.avg = (item.temp.morn + item.temp.eve + item.temp.day + item.temp.night) / 4;
        item.dt = item.dt * 1000;
        item.date = new Date(item.dt);
        item.weekDay = item.date.getDay();
        item.monthDay = item.date.getDate();
        return item;
      })
    )
  },
};
