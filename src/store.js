import Vue from 'vue';

const bus = new Vue();

const PlayerScore = {
  trust: 0,
  action: 0,
  empathy: 0,
};

bus.$on('UpdateScore', (score) => {
  PlayerScore.trust += score.trust;
  PlayerScore.action += score.action;
  PlayerScore.empathy += score.empathy;
});

export default bus;
