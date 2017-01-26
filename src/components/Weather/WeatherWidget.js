import locationService from '../../services/location';
import weatherService from '../../services/weather';

export default {
  name: 'weather-widget',
  props: {
    city: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    location: {},
    weather: {},
    isDeletable: true,
  }),
  mounted: async function () {
    if (this.city) {
      this.location.city = this.city;
    } else {
      this.isDeletable = false;
      this.location = await locationService.get();
      this.location = {...this.location.data};
    }
    this.weather = await weatherService.get(this.location.city);
    this.weather = {...this.weather.data};
    this.weather.list = this.parseWeatherData(this.weather);
    this.location.prevValue = this.location.city;
    this.location.city = this.weather.city.name;
    this.weatherDay = this.weather.list[0];
    this.weather.list.splice(0, 1);
    setTimeout(() => {
      $(this.$el).find('.weather-widget-week').mCustomScrollbar({
        axis:"x"
      });
    }, 0);
  },
  methods: {
    parseWeatherData: (weather) => (
      weather.list.map((item) => {
        item.temp.avg = (item.temp.morn + item.temp.eve + item.temp.day + item.temp.night) / 4;
        item.dt = item.dt * 1000;
        item.date = new Date(item.dt);
        item.weekDay = item.date.getDay();
        item.monthDay = item.date.getDate();
        return item;
      })
    ),
    remove: function() {
      this.$emit('removeCity', this.location.prevValue);
    }
  },
};
