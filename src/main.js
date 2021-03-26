import Vue from 'vue'
import App from './App.vue';
import VueRouter from 'vue-router';
import './assets/global.css';
import VueFullPage from 'vue-fullpage'

Vue.use(VueRouter);
Vue.use(VueFullPage)

new Vue({
    render: h => h(App),
}).mount('#app');