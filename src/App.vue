<template>
  <div class="app">
    <weather></weather>
  </div>
</template>

<script>
import Weather from './components/Weather/Weather.vue';

export default {
  name: 'app',
  components: {
    Weather,
  },
};
</script>

<style>
@import '../static/css/reset.css';
@import '../static/css/style.scss';
@import '../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.content {
  padding-left: 150px;
  width: calc(100% - 150px);
}
</style>
