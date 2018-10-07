<template>
  <div>
    <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  props: ['paragraphs'],
};
</script>
