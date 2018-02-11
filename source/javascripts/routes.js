import VueRouter from 'vue-router';

import Home from './home.vue';
import Question from './question';

const routes = [
  { path: '/', component: Home  },
  { path: '/question', component: Question }
];

export default new VueRouter({routes});
