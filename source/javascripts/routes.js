import VueRouter from 'vue-router';

import Home from './home.vue';
import Question from './question';
import Result from './result';

const routes = [
  { path: '/', component: Home  },
  { path: '/question', component: Question },
  { path: '/result', component: Result }
];

export default new VueRouter({routes});
