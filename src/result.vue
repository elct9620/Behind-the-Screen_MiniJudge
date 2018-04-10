<template>
  <div id="result">
    <p>
      <img v-bind:src="image">
    </p>
    <div class="text-center">
      <button class="btn btn-primary btn-large"  @click="share">分享</button>
    </div>
  </div>
</template>

<script>
import results from './result.yml';

export default {
  data() {
    return {};
  },
  computed: {
    image() {
      return `/images/result/${this.result.image}`;
    },
    result() {
      const ID = parseInt(this.$route.params.resultID, 10);
      let i;

      for (i = 0; i < results.length; i += 1) {
        if (results[i].match.includes(ID)) {
          return results[i];
        }
      }
      return {};
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
    }
  },
};
</script>
