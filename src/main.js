import 'expose?$!expose?jQuery!jquery';
import 'font-awesome/css/font-awesome.css';
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

Vue.filter('weekDay', (day) => {
  const dayList = { 0: 'Monday', 1: 'Tuesday', 2: 'Wednesday', 3: 'Thusday', 4: 'Friday', 5: 'Saturday', 6: 'Sunday', };
  return dayList[day];
});

Vue.filter('celsius', value => (parseInt(value - 273, 10)));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
