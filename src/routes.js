import VueRouter from 'vue-router';

import Home from './home.vue';
import Question from './question.vue';
import Result from './result.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/question', component: Question },
  { path: '/result', component: Result },
];

export default new VueRouter({ routes });
