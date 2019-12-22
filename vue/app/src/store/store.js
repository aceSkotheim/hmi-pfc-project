import Vue from 'vue'
import Vuex from 'vuex'
import { LoaderPlugin } from 'vue-google-login'
import axios from 'axios';

Vue.use(Vuex, axios)

// Google login information to access the api
Vue.use(LoaderPlugin, {
  client_id: "327662722428-hfoutlscnpa4cutmdol0ajn672ke1j1o.apps.googleusercontent.com"
});

export const store = new Vuex.Store({
  state: {
    user: {},
    status: '',
    token: localStorage.getItem('token') || '',
    access_token: localStorage.getItem('access_token') || ''
  },
  getters: {
    USER: state => {
      return state.user;
    },
    STATUS: state => {
      return state.status;
    },
    TOKEN: state => {
      return state.token;
    },
    ACCESSTOKEN: state => {
      return state.access_token;
    }
  },
  mutations: {
    SET_USER : (state, payload) => {
      state.user = payload
      state.status = true
    },
    SET_TOKEN : (state, payload) => {
      state.token = payload
    },
    auth_success (state, { token, user }) {
      state.user = user;
      state.token = token;
    },
    SET_ACCESSTOKEN : (state, payload) => {
      state.access_token = payload
    }
  },
  actions: {
    login({commit}, items){
      return new Promise((resolve, reject) => {
        axios({url: 'https://hmidev.ddns.net/auth/google/', data: items, method: 'POST'})
        .then(resp => {
          window.console.log(resp)
          window.console.log(resp.config.data)
          var JSONobj = JSON.parse(resp.config.data)
          window.console.log(JSONobj)
          window.console.log(JSONobj.access_token)
          const token = resp.data.key
          axios.defaults.headers.common['Authorization'] = token
          commit('SET_ACCESSTOKEN', JSONobj.access_token)
          commit('SET_TOKEN', token)
          this.dispatch('RETRIEVE_USER', items.access_token )
          resolve(resp)
        })
        .catch(err => {
          // commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve)=>{
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('access_token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    SET_USER : async (context, user) => {
      context.dispatch('SET_USER', user);
    },
    RETRIEVE_USER({commit}, access_token){
      return new Promise((resolve) => {
        var url = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=' + access_token
        axios({url: url, method: 'GET'})
        .then(resp => {
          commit('SET_USER', resp.data)
          resolve()
        })
      })
    }
  }
})