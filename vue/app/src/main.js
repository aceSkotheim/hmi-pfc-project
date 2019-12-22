import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Axios from 'axios'
import { store } from './store/store'

Vue.config.productionTip = false;

// Trying to handle authentication within Vuex aith Axios to communicate with backend
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
