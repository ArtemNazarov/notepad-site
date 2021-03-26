import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFullPage from 'vue-fullpage'
import './assets/global.css';


Vue.config.productionTip = false

Vue.use(VueFullPage)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
