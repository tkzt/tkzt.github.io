<template>
  <main>
    <div class="container">
      <router-view />
      <p class="divider-filled"></p>
      <footer>
        <div class="d-flex align-center">
          &copy; 2022 <span class="divider-short-dash">-</span> Present
          Allen Tao
          <span class="divider-vertical">-</span>
          <router-link
            title="Teleport"
            class="text-link font-sm"
            to="/cool-guys"
            v-if="route.path==='/'"
          >傳送</router-link>
          <router-link title="Recall" class="text-link font-sm" to="/" v-else>回城</router-link>
        </div>
        <div class="d-flex align-center" v-if="route.path==='/'">
          <router-link
            title="Leave a message"
            class="text-link"
            to="/leave-a-message"
          >留言</router-link>
          <span class="divider-vertical">-</span>
          <router-link title="Contact" class="text-link font-sm" to="/contact">聯係</router-link>
        </div>
      </footer>
    </div>
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  color: rgba(0, 0, 0, .87);
}

.container {
  margin: auto;
  padding: 24px;
  width: 80%;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(0, 0, 0, .27);
  font-size: xx-small;
}

@media (min-width: 1400px) {
  .container {
    width: 70%;
  }
}

@media (min-width: 1920px) {
  .container {
    width: 60%;
  }
}

@media (prefers-color-scheme: dark) {
  main {
    color: rgba(255, 255, 255, .87);
  }

  footer {
    color: rgba(255, 255, 255, .27);
  }
}
</style>
