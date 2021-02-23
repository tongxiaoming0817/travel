<template>
  <div class="header">
    <div class="header-left">
      <router-link to='/home'>
      <span class="iconfont">&#xe602;</span>
      </router-link>
    </div>
    <div class="header-title">
      城市选择
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
@import url("~css/var.less");
.header {
  width: 100%;
  background-color: @bgColor;
  color: #fff;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.36rem;
  position: relative;
}
.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
  position: absolute
}
.header-title{
  text-align: center;
}
</style>
