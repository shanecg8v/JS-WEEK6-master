import Vue from 'vue';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);
Vue.use(VueAxios, axios);

Vue.prototype.$ajax = axios;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
