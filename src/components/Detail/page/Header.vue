<template>
  <div class="header">
    <div class="header-return" v-show="showHeader">
      <span class="border-return"></span>
      <span class="iconfont return">&#xe602;</span>
    </div>
    <div class="header-top" v-show="!showHeader" style="showOpacity">
      <div class="header-left">
        <span class="iconfont">&#xe602;</span>
      </div>
      <div class="header-title">
        八达岭长城
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showHeader: true,
      showOpacity: {
        opacity: 0
      }
    }
  },
  created () {},
  mounted () {
    this.$nextTick(() => {
      this.load()
    })
  },
  methods: {
    load () {
      let that = this
      window.addEventListener('scroll', function (event) {
        let top = document.documentElement.scrollTop
        if (top > 44) {
          let opacity = top / 130
          opacity = opacity > 1 ? 1 : opacity
          that.showOpacity.opacity = opacity
          that.showHeader = false
        } else {
          that.showHeader = true
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import url("~css/var.less");
.header-return {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
}
.border-return {
  display: block;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 0.36rem;
  background-color: #000;
  opacity: 0.5;
}

.return {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  width: 0.72rem;
  height: 0.72rem;
  line-height: 0.72rem;
  text-align: left;
  text-indent: 0.2rem;
}
.header-top {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: @bgColor;
  color: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.36rem;
}
.header-left {
  position: absolute;
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}
.header-title {
  text-align: center;
}
</style>
