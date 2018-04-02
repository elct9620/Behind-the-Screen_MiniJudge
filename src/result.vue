<template>
  <div id="result">
    <img v-bind:src="image">
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
};
</script>
