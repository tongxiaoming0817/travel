<template>
  <div class="city">
    <city-header></city-header>
    <city-list :cities='cities' :hotCity='hotCity'></city-list>
  </div>
</template>

<script>
import CityHeader from './page/Header.vue'
// import CityHot from './page/hot.vue'
// import CitySort from './page/Sort.vue'
import CityList from './page/List.vue'
import {getDataCity} from '../../axios/api'
export default {
  components: {
    CityHeader,
    // CityHot,
    // CitySort,
    CityList
  },
  data () {
    return {
      hotCity: [],
      cities: {}
    }
  },
  created () {
    this.load()
  },
  methods: {
    load () {
      getDataCity().then(res => {
        console.log(res)
        const data = res.data
        this.hotCity = data.hotCities
        this.cities = data.cities
      })
    }
  }
}
</script>

<style>
.city{
  background-color: #f5f5f5;
}
</style>
