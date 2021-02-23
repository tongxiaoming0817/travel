<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <Home-icons :iocnList="iocnList"></Home-icons>
    <home-location></home-location>
    <home-activity></home-activity>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"></home-like>
    <home-vaction :vactionList="vactionList"></home-vaction>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import HomeHeader from './page/Header.vue'
import HomeSwiper from './page/Swiper.vue'
import HomeIcons from './page/icons.vue'
import HomeLocation from './page/Location.vue'
import HomeActivity from './page/Activity.vue'
import HomeHot from './page/Hot.vue'
import HomeLike from './page/Like.vue'
import HomeVaction from './page/Vaction.vue'
import { getDataList } from '../../axios/api'
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVaction
  },
  data () {
    return {
      swiperList: [],
      iocnList: [],
      hotList: [],
      likeList: [],
      vactionList: [],
      changeCity: ''
    }
  },
  computed: {
    ...mapState(['City'])
  },
  created () {
    this.load()
    console.log(this.changeCity)
  },
  mounted () {
    this.load()
    console.log(this.changeCity)
  },
  updated () {
    this.changeCity = this.City
  },

  activated () {
    if (this.changeCity !== this.City) {
      this.load()
    }
    console.log(this.City, this.changeCity)
  },
  methods: {
    // 获取数据
    load () {
      getDataList().then(res => {
        const data = res.data
        data.forEach((item, index) => {
          if (this.City === item.city) {
            this.swiperList = item.swiperList
            this.iocnList = item.iocnList
            this.hotList = item.hotList
            this.likeList = item.likeList
            this.vactionList = item.vactionList
          }
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.home {
  background-color: #f5f5f5;
}
</style>
