import axios from 'axios';
import config from '../config';

export default {
  get: async () => (await axios.get(config.services.ipInfo.url))
};
