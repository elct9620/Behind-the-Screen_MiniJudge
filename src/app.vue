<template>
  <div id="wrapper">
    <header id="header">
      <h1>迷你判官</h1>
    </header>
    <div id="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from './routes';

export default {
  router
}
</script>
