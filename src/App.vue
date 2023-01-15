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
          <router-link title="Next" class="text-link" to="/cool-guys" v-if="route.path==='/'">
            傳送
          </router-link>
          <router-link title="Next" class="text-link" to="/" v-else>回城</router-link>
        </div>
        <div class="d-flex align-center" v-if="route.path==='/'">
          <router-link title="Next" class="text-link" to="/leave-a-message">留言</router-link>
          <span class="divider-vertical">-</span>
          <a href="mailto:taoqingqiu@gmail.com" class="icon-link">
            <i class="fa-regular fa-envelope icon"></i>
          </a>
          <a href="https://github.com/boring-plans" class="icon-link">
            <i class="fab fa-github icon"></i>
          </a>
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
    width: 52%;
  }
}

@media (min-width: 1920px) {
  .container {
    width: 37%;
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
