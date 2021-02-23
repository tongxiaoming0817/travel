import Vue from 'vue'
import { get } from './axios.js'
Vue.prototype.$get = get
const getDataListurl = '../../static/mock/data.json'
export const getDataList = function (json) {
  return Vue.prototype.$get(getDataListurl, json)
}
const getDataCityturl = '../../static/mock/city.json'
export const getDataCity = function (json) {
  return Vue.prototype.$get(getDataCityturl, json)
}
