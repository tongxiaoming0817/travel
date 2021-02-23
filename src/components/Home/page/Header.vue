<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe602;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe603;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <router-link to="/city">
        {{City}}
        <span class="iconfont">&#xe600;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['City'])
  }
}
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
  display: flex;
}
.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}
.header-search {
  flex: 1;
  background-color: #fff;
  height: 0.6rem;
  margin: 0.11rem 0;
  border-radius: 0.1rem;
  color: #666;
  line-height: 0.6rem;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}
.header-right {
  font-size: 0.28rem;
  padding: 0 0.2rem;
  text-align: center;
}
</style>
