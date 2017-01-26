<template>
  <div class="weather-input">
    <input type="text" name="city" placeholder="Enter city" @keyup.enter="submit" v-model="city">
  </div>
</template>

<script>
export default {
  name: 'weather-input',
  data: () => ({ city: '' }),
  methods: {
    submit: function () {
      if (this.city.trim().length !== 0) {
        this.$emit('addCity', this.city);
        this.city = '';
      }
    },
  },
};
</script>
