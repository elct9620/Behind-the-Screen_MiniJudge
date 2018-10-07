<template>
  <div id="wrapper">
    <div class="inner">
      <header id="header">
        <h1>迷你判官</h1>
      </header>
      <div id="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import router from './routes';

export default {
  router,
};
</script>
