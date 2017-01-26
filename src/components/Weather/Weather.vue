<script src="./Weather.js"></script>

<template>
  <div class="weather-widget">
    <div class="weather-widget-search">
      <input type="text" placeholder="Search">
    </div>
    <div class="weather-widget-title">
      {{location.city}}, {{location.region}}
    </div>
      <div class="tabs-content">
          <div v-if="weather.list">
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
              <div class="test weather-widget-week">
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
    </div>
  </div>
</template>

<style lang="scss">
  @import './Weather.scss';
</style>