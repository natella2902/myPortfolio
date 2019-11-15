import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import { store } from './store';
import axios from './request';
import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

store.$axios = axios;

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});