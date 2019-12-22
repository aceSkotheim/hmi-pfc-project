import Vue from 'vue'
import Router from 'vue-router'
import Complaints from './components/base/Complaints.vue'
import Contact from './components/base/Contact.vue'
import Files from './components/base/Files.vue'
import Home from './components/base/Home.vue'
import Inventory from './components/base/Inventory.vue'
import Orders from './components/base/Orders.vue'
import Production from './components/base/Production.vue'
import User from './components/core/User.vue'
import JsonEditor from './components/core/JsonEditor.vue'
import TestUpload from './components/base/TestUpload.vue'

Vue.use(Router)

export default new Router({
  mode: 'history', // Required for Adal library
  routes: 
  [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact/',
      name: 'contact',
      component: Contact
    },
    {
      path: '/complaints/',
      name: 'complaints',
      component: Complaints
    },
    {
      path: '/files/',
      name: 'files',
      component: Files
    },
    {
      path: '/inventory/',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/orders/',
      name: 'orders',
      component: Orders
    },
    {
      path: '/production/',
      name: 'production',
      component: Production
    },
    {
      path: '/user/',
      name: 'user',
      component: User
    },
    {
      path: '/jsoneditor/',
      name: 'JsonEditor',
      component: JsonEditor
    },
    {
      path: '/testupload/',
      name: 'TestUpload',
      component: TestUpload
    }

  ]
})

// Global route guard