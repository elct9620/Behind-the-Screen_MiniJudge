import VueRouter from 'vue-router';

import Home from './home.vue';

const routes = [
  { path: '/', component: Home  }
];

export default new VueRouter({routes});
