
<template>
  <div class="weather-input">
    <input type="text" name="city" placeholder="Enter city" @keyup.enter="submit" v-model="city">
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class WeatherInput extends Vue {
  city = '';

  submit() {
    if (this.city.trim().length !== 0) {
      this.$emit('addCity', this.city);
      this.city = '';
    }
  }
}
</script>
