import { createStore } from 'vuex'

export default createStore({
  state: {
    currCity: '臺北市',
    currDistrict: '北投區',
    location: [],
    stores: [],
  },
  mutations: {
    setcurrCity (state, payload) {
      state.currCity = payload
    },
    setcurrDistrict (state, payload) {
      state.currDistrict = payload
    },
    setLocation (state, payload) {
      state.location = payload
    },
    setStores (state, payload) {
      state.stores = payload
    },

  },
  actions: {
    // 取得行政區資料
    async fetchLocations ({commit}) {
      const json = await fetch('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json')
        .then((res) => res.json())
        
      // 透過 commit 來操作 mutations
      commit('setLocation', json)
    },
    // 取得藥局資料
    async fetchPharmacies ({commit}) {
      const json = await fetch('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json')
      .then((res) => res.json())
      
      // 整理資料格式拆出經緯度
      const data = json.features.map(d => ({
        ...d.properties,
        latitude: d.geometry.coordinates[0],
        longitude: d.geometry.coordinates[1],
      }))
      
      // 透過 commit 來操作 mutations
      commit('setStores', data)
    }
  },
  modules: {
  }
})
