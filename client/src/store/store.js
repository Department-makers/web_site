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
    user_id: 1,
    isUserLoggedIn: false
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setAccessToken (state, access_token) {
      state.access_token = access_token
      state.isUserLoggedIn = !!(access_token)
    },
    setUpdateToken (state, refresh_token) {
      state.refresh_token = refresh_token
    },
    setUserID (state, user_id) {
      state.user_id = user_id
    }
  },
  actions: {
    setAccessToken ({commit}, access_token) {
      commit('setAccessToken', access_token)
    },
    setUpdateToken ({commit}, refresh_token) {
      commit('setUpdateToken', refresh_token)
    },
    setUserID ({commit}, user_id) {
      commit('setUserID', user_id)
    }
  }
})