import Vue from 'vue';
import results from './result.yml';

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

const minBound = (compare, value) => (compare.min === -1 ? true : value >= compare.min);
const maxBound = (compare, value) => (compare.max === -1 ? true : value <= compare.max);
const scoreBound = (type, compare, player) =>
  minBound(compare[type], player[type]) && maxBound(compare[type], player[type]);

const characterFilter = playerScore => character =>
  scoreBound('trust', character.score, playerScore) && scoreBound('action', character.score, playerScore) && scoreBound('empathy', character.score, playerScore);

export default bus;
export const getScore = () => Object.assign({}, PlayerScore);
export const getResult = () => results.filter(characterFilter(getScore()))[0];
export const resetScore = () => {
  PlayerScore.trust = 0;
  PlayerScore.action = 0;
  PlayerScore.empathy = 0;
};

window.getResult = () => results.filter(characterFilter(PlayerScore));
window.scoreBound = scoreBound;
