<template>
  <div class="container">
    <div id="waline"></div>
  </div>
  <p class="divider-filled"></p>
</template>

<script setup>
import '@waline/client/dist/waline.css';
import { init } from '@waline/client';
import { onBeforeUnmount, onMounted } from 'vue';

let walineInstance = null;

onMounted(async () => {
  walineInstance = init({
    el: '#waline',
    serverURL: 'waline-homepage.tkzt.cn',
    dark: 'auto',
    locale: {
      placeholder: (await (await fetch('https://v1.jinrishici.com/all.txt')).text()),
      sofa: '空空如也。',
    },
  });
});

onBeforeUnmount(() => {
  if (walineInstance) {
    walineInstance.destroy();
  }
});
</script>
