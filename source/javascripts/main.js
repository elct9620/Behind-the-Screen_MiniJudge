import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './app.vue';

Vue.use(VueRouter);

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount('#app');
});
