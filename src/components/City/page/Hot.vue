<template>
  <div class="hot">
    <div class="hot-title">
      热门城市
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for='item in hotCity' :key='item.id'>{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['hotCity']
}
</script>

<style>
.hot {
}
.hot-title {
  padding: 0.3rem;
  font-size: 0.24rem;
  color: #212121;
}
.hot-list{
  overflow: hidden;
  position: relative;
  background-color: #fff;
}
.hot-list:before{
  position: absolute;
  content: '';
  width: 33.33%;
  left: 33.33%;
  height: 100%;
  border-left: .02rem solid #ddd;
  border-right: .02rem solid #ddd;

}
.hot-item{
  float: left;
  width: 33.33%;
  text-align: center;
  font-size: .28rem;
  height: .9rem;
  line-height: .9rem;
  border-bottom: .02rem solid #ddd;
}
</style>
