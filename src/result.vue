<template>
  <div id="result">
    <p>
      <img v-bind:src="image">
    </p>
    <div class="text-center">
      <button class="btn btn-primary btn-large"  @click="restart">重新開始</button>
      <a class="btn btn-primary btn-large" href="https://18light.cc/bs.html" target="_blank">螢幕判官</a>
      <button class="btn btn-primary btn-large"  @click="share">分享</button>
    </div>
  </div>
</template>

<script>
import { getResult, getScore } from './store';

export default {
  data() {
    return {
      result: getResult(),
      score: getScore(),
    };
  },
  created() {
    if (this.score.trust == 0 && this.score.action == 0 && this.score.empathy == 0) {
      this.$router.push('/');
    }
  },
  computed: {
    image() {
      return `/images/result/${this.result.image}`;
    },
  },
  methods: {
    share() {
      const BASE_URL = "https://bs.18light.cc"
      let image = BASE_URL + this.image + `?fbrefresh=${(new Date).getTime()}`;
      FB.ui({
        method: 'share_open_graph',
        action_type: 'og.likes',
        action_properties: JSON.stringify({
          object: {
            'og:url': BASE_URL,
            'og:title': this.result.name,
            'og:description': this.result.description,
            'og:image:width': '1200',
            'og:image:height': '630',
            'og:image': image,
          }
        }),
      }, function(response){});
    },
    restart() {
      this.$router.push('/');
    },
  },
};
</script>
