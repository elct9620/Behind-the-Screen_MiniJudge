<template>
  <div id="home">
    <button class="btn btn-primary btn-large" @click="gotoQuestion">開始測驗</button>
  </div>
</template>

<script>
export default {
  methods: {
    gotoQuestion() {
      this.$router.push('/question')
    }
  }
}
</script>
