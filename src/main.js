import Vue from 'vue'
import App from './App.vue';
import './assets/global.css';
import VueFullPage from 'vue-fullpage'
import router from './router'

Vue.use(VueFullPage)

new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
  