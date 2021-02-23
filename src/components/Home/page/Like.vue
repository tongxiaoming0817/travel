<template>
  <div class="like">
    <div class="like-tile">
      <img
        src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt=""
      />
      <span>猜你喜欢</span>
    </div>
    <ul class="like-list ">
      <li class="like-item bordered-bottom" v-for='item in likeList' :key='item.id'>
        <div class="like-img">
          <img
            :src="item.imgUrl"
            alt=""
          />
        </div>
        <div class="like-text">
          <div class="like-name">{{item.title}}</div>
          <div class="like-message">
            <span>ooooo</span>
            <span>qqqq</span>
          </div>
          <div class="like-map">
            <span class="like-price">{{item.pirce}}</span>
            <span class="like-address">{{item.map}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['likeList'],
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="less">
@import url("~css/var.less");
.like {
  font-size: 0.28rem;
}
.like-tile {
  font-size: 0.28rem;
  padding: 0.24rem 0.2rem;
  background-color: #fff;
  margin-top: 0.2rem;
}
.like-tile img {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  vertical-align: top;
}
.like-tile span {
  display: inline-block;
  line-height: 0.44rem;
  font-size: 0.32rem;
  margin-left: 0.08rem;
}
.like-list {
  background-color: #fff;
}
.like-item{
  padding: .2rem 0;
  position: relative;
}
.like-img {
  float: left;
}
.like-img img {
  width: 2rem;
  height: 2rem;
}
.like-text {
  overflow: hidden;
  padding-left: 0.2rem;
}
.like-name {
  margin-top: 0.26rem;
  font-size: 0.38rem;
  color: #000;
}
.like-message {
  margin-top: 0.4rem;
}
.like-map {
  position: relative;
  margin-top: 0.3rem;
}
.like-price {
}
.like-address {
  position: absolute;
  right: .2rem;;
}
</style>
