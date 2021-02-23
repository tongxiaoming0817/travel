<template>
  <div class="location bordered-top">
    <div class='location-item bordered-right'>
      <span class='iconfont'>&#xe601;</span>
      北京大兴
    </div>
    <div class='location-item ' >
        <span class='iconfont'>&#xe60a;</span>
      玩水记
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style socped lang='less'>
@import url('~css/var.less');
.location{
  display: flex;
  // .bordered();
  background-color: #fff;
}
.location-item{
  flex: 1;
  font-size: .28rem;
  text-align: center;
  line-height: 1rem;
}
</style>
