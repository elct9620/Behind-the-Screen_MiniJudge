<template>
  <div id="home">
    <p>
      我們生活在一個資訊爆炸的年代，每天有太多太多的是非對錯要評斷。
      當我們正在謾罵新聞中的法官判決，有沒有想過：自己面對種種事件，是否也能公正不阿？
      在這些片面資訊轟炸的時刻，你還能堅守自己心中的道德觀嗎？
      拿起槌子，開始判官測驗吧！
    </p>
    <button class="btn btn-primary btn-hammer btn-large" @click="gotoQuestion">開始測驗</button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      document.documentElement.className = 'jf-loading';
      if (_jf) { _jf.flush(); }
    });
  },
  methods: {
    gotoQuestion() {
      this.$router.push('/question')
    }
  }
}
</script>
