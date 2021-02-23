<template>
  <div class="activity bordered-top">
    <div class='activity-item bordered-right'>
      <img src="//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg" alt="">

    </div>
    <div class='activity-item ' >
      <img src="http://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style socped lang='less'>
@import url('~css/var.less');
.activity{
  position: relative;
  display: flex;
  // .bordered();
  margin-top: .4rem;
}
.activity-item{
  flex: 1;
  font-size: .28rem;
  text-align: center;
  height: 1.4rem;
}

.activity-item img{
  width: 100%;
  height: 100%
}
</style>
