import axios from 'axios';
import config from '../config';

export default {
  get: async (city) => {
    const url = config.services.openWeatherMap.url;
    const apiKey = config.services.openWeatherMap.apiKey;
    return await axios.get(`${url}/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`);
  },
};
