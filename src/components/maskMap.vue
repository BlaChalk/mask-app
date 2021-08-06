<template>
  <div class="mask-map" id="mask-map">

  </div>
</template>

<script>
import L from 'leaflet'
import { mapGetters } from 'vuex'
export default {
  name: 'maskMap',
  data() {
    return {
      map: {},
      markers: []
    }
  },
  mounted() {
    // 初始化地圖
    this.map = L.map('mask-map', {
      center: [25.03, 121.55],
      zoom: 14
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: `<a target="_blank" href="https://www.openstreetmap.org/">© OpenStreetMap 貢獻者</a>`,
      maxZoom: 18
    }).addTo(this.map)
  },
  computed: {
    ... mapGetters(['currDistrictInfo', 'filteredStores'])
  },
  watch: {
    // 切換行政區
    currDistrictInfo (dist) {
      // 指定地圖中心點
      this.map.panTo(new L.LatLng(dist.latitude, dist.longitude))
    },
    filteredStores (stores) {
      // 清除原有的marker
      this.clearMarkers()

      // 根據藥局資訊加上marker
      stores.forEach(element => this.addMarker(element))
    }
  },
  methods: {
    addMarker (item) {
      // 標記的圖示
      const ICON = {
        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png`,
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/images/marker-shadow.png',

        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      }

      // 將標記放到地圖上
      const marker = L.marker([item.longitude, item.latitude], ICON)
        .addTo(this.map)
        .bindPopup(`<h2 class="popup-name">${item.name}</h2>`)  

      // 替 marker 加入 id 與經緯線資訊
      marker.markerId = item.id
      marker.lng = item.longitude
      marker.lat = item.latitude
      this.markers.push(marker)
    },
    clearMarkers () {
      // 清除地圖所有的標記
      this.map.eachLayer(layer => {
        if(layer instanceof L.Marker) {
          this.map.removeLayer(layer)
        }
      })

      this.markers.length = 0
    },
    triggerPopup (markerId) {
      // 找出目標標記
      const marker = this.markers.find(d => d.markerId === markerId)

      // 將地圖中心指向標記並開啟 Popup
      this.map.flyTo(new L.LatLng(marker.lng, marker.lat), 15)
      marker.openPopup()
    }
  },
}
</script>

<style lang="scss" scoped>

</style>