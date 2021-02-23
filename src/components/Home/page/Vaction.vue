<template>
  <div class="vaction">
      <div class="vaction-title">周末去哪儿</div>
      <ul class='vaction-list'>
        <li class='vaction-item' v-for='item in vactionList' :key='item.id'>
          <div class='vaction-img'>
            <img :src="item.imgUrl" alt="">
          </div>
          <div class='vaction-text'>
              <p class='vaction-text-name'>{{item.name}}</p>
              <p class='vaction-text-desc'>{{item.desc}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['vactionList'],
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='less'>
.vaction{
  font-size: .28rem;
}
.vaction-title{
  height: .8rem;
  padding-left: .26rem;
  line-height: .8rem;
  color: #212121;
}
.vaction-img{
}

.vaction-img img{
  width: 100%;
}
.vaction-text{
  padding: .14rem .2rem .2rem .2rem;
}
.vaction-text-name{
  font-size: .28rem;
  line-height: .48rem;
}
.vaction-text-desc{
  font-size:.24rem;
  line-height: .42rem;
  color: #616161
}
</style>
