<script src="./Weather.js"></script>
<template>
  <div class="weather">
    <weather-input v-on:addCity="addCity"></weather-input>
    <weather-widget></weather-widget>
    <weather-widget v-on:removeCity="removeCity" v-for="(city, key) in cities" :key="city" :city="city"></weather-widget>
  </div>
</template>
<style lang="scss">
  @import './Weather.scss';
</style>
