import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    access_token: null,
    refresh_token: null,
    user_id: null,
    isUserLoggedIn: false
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setAccessToken (state, token) {
      state.access_token = token
      state.isUserLoggedIn = !!(access_token)
    },
    setUpdateToken (state, token) {
      state.refresh_token = token
    },
    setUserID (state, user_id) {
      state.user_id = user_id
    }
  },
  actions: {
    setAccessToken ({commit}, token) {
      commit('setAccessToken', token)
    },
    setUpdateToken ({commit}, token) {
      commit('setUpdateToken', token)
    },
    setUserID ({commit}, user_id) {
      commit('setUserID', user_id)
    }
  }
})