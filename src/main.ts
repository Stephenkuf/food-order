import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


Vue.component('app-navbar', Navbar);
Vue.component('app-footer', Footer);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
