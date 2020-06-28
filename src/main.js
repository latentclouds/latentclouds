import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/style.scss'
import BootstrapVue from 'bootstrap-vue'
import router from './config/router.js'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  router
})
