// store.js 中都mutation中增加添加和删除token的方法
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = { // 全局管理的数据存储
  isLogin: '0',
  ser: null,
  userCode: document.cookie ? localStorage.userCode : null,
  token: document.cookie ? localStorage.token : '' // token
}

export default new Vuex.Store({
  state,
  getters: { // 监听数据变化的
    getStorage (key) { // 获取本地存储的登录信息
      if (!state.token) {
        state.token = JSON.parse(localStorage.getItem('token'))
      }
      if (!state.userCode) {
        state.userCode = JSON.parse(localStorage.getItem('userCode'))
      }
      return state.token
    }
  },
  mutations: {
    $_setToken (state, value) { // 设置存储token
      state.token = value
      localStorage.setItem('token', value)
      console.log(state)
      console.log(value)
      document.cookie = value
    },
    $_setUserCode (state, value) {
      state.userCode = value
      localStorage.setItem('userCode', value)
      document.cookie = value
    },
    $_removeStorage (state) { // 删除token
      localStorage.removeItem('token')
    }
  }
})
