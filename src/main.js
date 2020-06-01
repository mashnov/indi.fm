import Vue from 'vue';
// eslint-disable-next-line import/order
import App from './App';
// eslint-disable-next-line import/order
import router from './router';
// eslint-disable-next-line import/order
import store from './store';

// eslint-disable-next-line import/order
import VueFileAgent from 'vue-file-agent';
// eslint-disable-next-line import/order
import VueCircleSlider from 'vue-circle-slider';
// eslint-disable-next-line import/order
import VueYandexMetrika from 'vue-yandex-metrika';
// eslint-disable-next-line import/order
import Vue2TouchEvents from 'vue2-touch-events';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'vue-file-agent/dist/vue-file-agent.css';

Vue.use(VueFileAgent);
Vue.use(VueCircleSlider);
Vue.use(Vue2TouchEvents);
Vue.use(VueYandexMetrika, {
  id: '62856289',
  env: process.env.NODE_ENV,
  router,
});

Vue.config.productionTip = false;

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
