import { createStore } from 'vuex'

export default createStore({
  state: {
    currCity: '臺北市',
    currDistrict: '北投區',
    location: [],
    stores: [],
    keywords: '',
    showModal: false,
    infoBoxSid: null,

  },
  getters: {
    cityList (state) {
      // 城市
      return state.location.map(d => d.name)
    },
    districtList (state) {
      return state.location.find(d => d.name === state.currCity) ?.districts || []
    },
    filteredStores (state) {
      // 依縣市與行政區分組
      const { stores } = state

      // 加入關鍵字判斷功能
      return state.keywords
        ? stores.filter(d => d.name.includes(state.keywords))
        : stores.filter(d => d.county === state.currCity && d.town === state.currDistrict)
    },
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
    setKeywords (state, payload) {
      state.keywords = payload
    },
    setshowModal (state, payload) {
      state.showModal = payload
    },
    setInfoBoxSid (state, payload) {
      state.infoBoxSid = payload
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
