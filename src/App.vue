<template>
<div id="app">
  <!-- aside-menu 左側欄 -->
  <asideMenu />

  <!-- 地圖區塊 -->
  <div class="mask-map" id="mask-map"></div>
  <lightBox />
</div>
</template>

<script>
import { mapActions } from 'vuex'
import asideMenu from './components/asideMenu.vue'
import lightBox from './components/lightBox.vue'
export default {
  name: 'App',
  components: {
    asideMenu, lightBox
  },
  methods: {
    ...mapActions(['fetchLocations', 'fetchPharmacies'])
  },
  mounted() {
    this.fetchLocations()
    this.fetchPharmacies()
  },
}
</script>

<style lang="scss" src="./style.scss"></style>

