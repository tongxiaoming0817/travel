<template>
  <div class="details">
    <detailBanner></detailBanner>
    <detailHeader></detailHeader>
    <div style="height:2000px"></div>
  </div>
</template>

<script>
import detailBanner from './page/Banner.vue'
import detailHeader from './page/Header.vue'
export default {
  components: {
    detailBanner,
    detailHeader
  }
}
</script>

<style>

</style>
