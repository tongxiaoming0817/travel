<template>
  <div class="header-swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for='item in swiperList' :key="item.id"><img :src="item.imgUrl" alt=""/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['swiperList'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="less">
.header-swiper {
  // width: 100%;
  // height: 2rem;
  background-color: #ccc;
  height: 0;
  padding-bottom: 38.67%;
}
// .swiper-container {
//   width: 100%;
//   height: 100%;
// }
.header-swiper img {
  width: 100%;
  height: 100%;
}
</style>
