<template>
  <div id="home">
    <h1>迷你判官</h1>
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
