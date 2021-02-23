<template>
  <div class="container" ref="wrapper">
    <div class="content">
      <!-- hot -->
      <div class="hot">
        <div class="hot-title">
          热门城市
        </div>
        <ul class="hot-list">
          <li
            class="hot-item"
            v-for="item in hotCity"
            :key="item.id"
            @click="changeCityName(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- sort -->
      <div class="sort">
        <div class="sort-title"></div>
        <ul class="sort-list">
          <li
            class="sort-item"
            v-for="(item, key) in cities"
            :key="item.id"
            @click="changeSort(key)"
          >
            {{ key }}
          </li>
        </ul>
      </div>
      <!-- list -->
      <div class="list" v-for="(val, key) in cities" :key="key" :ref="key">
        <div class="list-title">
          {{ key }}
        </div>
        <ul class="list-list">
          <li class="list-item" v-for="item in val" :key="item.id"   @click="changeCityName(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  props: ['cities', 'hotCity'],
  data () {
    return {
      newscroll: ''
    }
  },
  created () {},
  updated () {
    this.$nextTick(() => {
      this.insrcoll()
    })
  },
  methods: {
    insrcoll () {
      this.newscroll1 = new BScroll(this.$refs.wrapper, {})
    },
    changeSort (sortName) {
      let el = this.$refs[sortName][0]
      this.newscroll1.scrollToElement(el)
    },
    changeCityName (cityName) {
      this.changeCity(cityName)
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style scoped lang="less">
@import url("~css/var.less");
.container {
  position: absolute;
  overflow: hidden;
  width: 100%;
  top: 0.88rem;
  bottom: 0;
  background-color: #ccc;
}
.content {
  overflow: hidden;
}
.list-title {
  padding: 0.3rem;
  font-size: 0.24rem;
  color: #212121;
}
.list-list {
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.list-list:before {
  position: absolute;
  content: "";
  height: 100%;
  width: 25%;
  left: 25%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}
.list-list:after {
  position: absolute;
  content: "";
  height: 100%;
  width: 0;
  left: 75%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}
.list-item {
    position: relative;
  float: left;
  width: 25%;
  text-align: center;
  font-size: 0.28rem;
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 0.02rem solid #ddd;
  .textoverflow();
}
// sort
.sort-title {
  padding: 0.3rem;
  font-size: 0.24rem;
  color: #212121;
}
.sort-list {
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.sort-item {
  float: left;
  width: 16.66%;
  text-align: center;
  font-size: 0.28rem;
  height: 0.9rem;
  line-height: 0.9rem;
  background-color: #fff;
}
//hot
.hot-title {
  padding: 0.3rem;
  font-size: 0.24rem;
  color: #212121;
}
.hot-list {
  overflow: hidden;
  position: relative;
  background-color: #fff;
}
.hot-list:before {
  position: absolute;
  content: "";
  width: 33.33%;
  left: 33.33%;
  height: 100%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}
.hot-item {
  position: relative;
  float: left;
  width: 33.33%;
  text-align: center;
  font-size: 0.28rem;
  height: 0.9rem;
  line-height: 0.9rem;
  border-bottom: 0.02rem solid #ddd;
}
</style>
