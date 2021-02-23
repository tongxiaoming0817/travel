<template>
  <div class="icon">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for='(item,index) in pages' :key='item.index'>
        <div class="iocn-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl" alt="" />
          <p>{{ page.title }}</p>
        </div>
      </swiper-slide>
    </swiper>
    <!--  -->
  </div>
</template>

<script>
export default {
  props: ['iocnList'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iocnList.forEach((item, index) => {
        let idx = Math.floor(index / 8)
        if (!pages[idx]) {
          pages[idx] = []
        }
        pages[idx].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
.iocn-item {
  width: 25%;
  padding-bottom: 25%;
  background-color: #fff;
  height: 0;
  float: left;
}
.iocn-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.iocn-item p {
  font-size: 0.3rem;
  text-align: center;
  padding-top: 0.1rem;
}
</style>
