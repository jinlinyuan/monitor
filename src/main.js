import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.less'
import './assets/js/formatDate'

// import {
// 	Table, 
// 	TableColumn,
// 	Card,
// 	Menu
// } from 'element-ui'
// Vue.use(Table)
// Vue.use(TableColumn)
// Vue.use(Card)
// Vue.use(Menu)

import ElementUI from 'element-ui'
Vue.use(ElementUI)

import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
