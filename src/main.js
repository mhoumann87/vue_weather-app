import Vue from 'vue';
import VueGeolocation from 'vue-browser-geolocation';
import App from './App.vue';
import router from './router';


Vue.config.productionTip = false;
Vue.use(VueGeolocation);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
