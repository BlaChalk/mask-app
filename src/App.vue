<template>
<div id="app">
  <!-- aside-menu 左側欄 -->
  <asideMenu/>

  <!-- 地圖區塊 -->
  <div class="mask-map" id="mask-map"></div>
</div>
</template>

<script>
import asideMenu from './components/asideMenu.vue'
export default {
  name: 'App',
  components: {
    asideMenu,
  }
}
</script>

<style lang="scss" src="./style.scss"></style>

