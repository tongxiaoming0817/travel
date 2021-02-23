import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '上海'
let city = localStorage.getItem('city')
console.log(city)
if (city) {
  city = city
} else {
  city = defaultCity
}
const store = new Vuex.Store({
  state: {
    City: city
  },
  mutations: {
    changeCity (state, cityName) {
      state.City = cityName
      // console.log(state.City, cityName)
      localStorage.setItem('city', cityName)
    }
  }
})

export default store
