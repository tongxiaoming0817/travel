<template>
  <div class="hot">
    <div class="hot-top">
      <span>🔥本周热门榜单</span>
      <span class="hot-title">全部榜单></span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for='item in hotList ' :key='item.id'>
        <img
          :src="item.imgUrl"
          alt=""
        />
        <p>{{item.title}}</p>
        <p>
          <span class="hot-mark">{{item.mark}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['hotList'],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
@import url('~css/var.less');
.hot {
  margin-top: 0.28rem;
  background-color: #fff;
  font-size: 0.28rem;
}
.hot-top {
  padding: 0.2rem;
  position: relative;
}
.hot-span {
  color: #212121;
}
.hot-title {
  position: absolute;
  right: 0.2rem;
  color: #616161;
  font-size: 0.28rem;
}

.hot-list {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  height: 3rem;
}
.hot-item {
  display:inline-block;
  padding: 0 0.2rem;
  width: 2rem;
  height: 2rem;
}
.hot-item img {
  width: 100%;
  height: 100%;
}
.hot-item p {
  text-align: center;
  .textoverflow()
}
.hot-item p .hot-mark {
  font-size: 0.32rem;
}
</style>
