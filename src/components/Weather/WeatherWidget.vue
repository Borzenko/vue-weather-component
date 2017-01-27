<script src="./WeatherWidget.js"></script>

<template>
  <div class="weather-widget">
    <loader v-if="!weather.list"></loader>
    <div class="weather-delete-btn" v-if="isDeletable && weather.list" @click="remove()">
      <button type="text" class="x-mark"></button>
    </div>
    <div v-if="weather.list" class="weather-widget-title">
      {{location.city}}<span v-if="location.region">, {{location.region}}</span>
    </div>
    <div v-if="weatherDay">
      <div>
        <div>
          <div class="weather-widget-day">
            <div class="weather-widget-day-title">
              {{weatherDay.weekDay | weekDay }}
            </div>
            <div class="weather-widget-day-temp">
              {{weatherDay.temp.avg | celsius}}
            </div>
          </div>
        </div>
      </div>
      <div class="weather-widget-week">
        <div class="weather-widget-item" v-for="item in weather.list">
          <div>
            {{item.weekDay | weekDay }}
          </div>
          <div>{{item.temp.morn | celsius}}</div>
          <div>{{item.temp.day | celsius}}</div>
          <div>{{item.temp.eve | celsius}}</div>
          <div>{{item.temp.night | celsius}}</div>
        </div>
      </div>
    </div>
  </div>
</template>