<template>
  <div>
    <h3 v-if="title">{{ title }}</h3>
    <div class="d-flex">
      <div class="work" v-for=" { title, link, description, logo }, index  in list" :key="index"
        @click="toWork(link)">
        <img :src="logo" v-if="logo.startsWith('http')">
        <div v-else class="logo">{{ logo }}</div>
        <div class="work-info">
          <h4 :title="title">{{ title }}</h4>
          <p :title="description">{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['list', 'title']);

function toWork(link) {
  const a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  a.click();
}
</script>

<style scoped>
.d-flex {
  flex-wrap: wrap;
}

.work {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  width: calc(100% - 24px);
  margin: 12px;
}

.work::before {
  pointer-events: none;
  content: '';
  width: calc(100% + 12px);
  height: calc(100% + 12px);
  position: absolute;
  border-radius: 8px;
  top: -6px;
  left: -6px;
  background-color: transparent;
}

.work:hover::before {
  background-color: rgba(0, 0, 0, .037);
}

.work:active::before {
  background-color: rgba(0, 0, 0, .06);
}

.work img {
  width: 2.5rem;
  height: 2.5rem;
}

.work .logo {
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(162, 96, 209, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(65, 73, 84);
  font-weight: bold;
}

.work-info {
  margin-left: 8px;
  overflow: hidden;
}

.work-info p,
.work-info h4 {
  margin: 0;
}

.work-info p,
.work-info h4 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
}

.gray-text h3 {
  color: rgba(0, 0, 0, .37);
}

@media (prefers-color-scheme: dark) {
  .work:hover::before {
    background-color: rgba(255, 255, 255, .037);
  }

  .work:active::before {
    background-color: rgba(255, 255, 255, .06);
  }

  .work .logo {
    background-color: rgba(217, 176, 245, 0.37);
    color: rgb(140, 161, 181);
  }

  .gray-text {
    color: rgba(255, 255, 255, .37);
  }

  .gray-text img {
    filter: drop-shadow(rgba(255, 255, 255, .37) 100px 0 0);
  }

  .gray-text h3 {
    color: rgba(255, 255, 255, .37);
  }

}

@media (min-width: 900px) {
  .work {
    width: 30%;
  }
}
</style>
