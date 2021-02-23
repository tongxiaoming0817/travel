<template>
  <div class="banner">
    <div @click="showImgSwiper(true)">
      <div class="banner-img">
        <img
          src="//img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_600x330_2106404f.jpg"
          alt=""
        />
      </div>
      <div class="banner-title">
        八达岭长城(AAAAA景区)
      </div>
    </div>
    <div class="banner-swiper" v-show="imgSwiper" @click="showImgSwiper(false)">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in imgSwiperList" :key="item.id">
          <img :src="item.imgurl" alt="" />
        </swiper-slide>
        <div class="swiper-page" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-page',
          type: 'fraction'
        }
      },
      imgSwiperList: [
        {
          id: '01',
          imgurl:
            '//img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_600x330_2106404f.jpg'
        },
        {
          id: '02',
          imgurl:
            'http://img1.qunarzz.com/sight/p0/1604/d0/d0e9becdac71468590.img.jpg_350x240_77ac9ba9.jpg'
        },
        {
          id: '03',
          imgurl:
            'http://img1.qunarzz.com/sight/p0/1604/85/85f4b4a6dc8cbad890.img.jpg_350x240_acb7bf8c.jpg'
        }
      ],
      imgSwiper: false
    }
  },
  methods: {
    showImgSwiper (flag) {
      this.imgSwiper = flag
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  font-size: 0.28rem;
  color: #fff;
}
.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  background-color: red;
}
.banner-img img {
  width: 100%;
}
.banner-title {
  position: absolute;
  bottom: 0.4rem;
  margin-left: 0.2rem;
}
.banner-swiper {
  position: fixed;
  z-index: 99;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner-swiper img {
  width: 100%;
}
</style>
