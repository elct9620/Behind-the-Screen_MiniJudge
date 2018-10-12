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

const minBound = (value, compare) => (compare.min === -1 ? true : value >= compare.min);
const maxBound = (value, compare) => (compare.max === -1 ? true : value <= compare.max);
const scoreBound = (type, score, base) =>
  minBound(score[type], base[type]) && maxBound(score[type], base[type]);

const characterFilter = score => character =>
  scoreBound('trust', score, character.score) && scoreBound('action', score, character.score) && scoreBound('empathy', score, character.score);

export default bus;
export const getResult = () => results.filter(characterFilter(PlayerScore))[0];
export const getScore = () => Object.assign({}, PlayerScore);
export const resetScore = () => {
  PlayerScore.trust = 0;
  PlayerScore.action = 0;
  PlayerScore.empathy = 0;
};
