<template>
  <div class="sort">
    <div class="sort-title">
      字母排序
    </div>
    <ul class="sort-list">

      <li class="sort-item" v-for='(item,key) in cities' :key='item.id'>{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['cities']
}
</script>

<style scoped>
.sort {
}
.sort-title {
  padding: 0.3rem;
  font-size: 0.24rem;
  color: #212121;
}
.sort-list{
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.sort-item{
  float: left;
  width: 16.66%;
  text-align: center;
  font-size: .28rem;
  height: .9rem;
  line-height: .9rem;
  background-color: #fff;
}
</style>
