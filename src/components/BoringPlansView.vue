<template>
  <h3>Building</h3>
  <div class="d-flex">
    <div class="work" v-for="{ title, link, description, logo }, index in worksBuilding" :key="index"
      @click="toWork(link)">
      <img :src="logo" :alt="title + ' Logo'">
      <div class="work-info">
        <h4 :title="title">{{ title }}</h4>
        <p :title="description">{{ description }}</p>
      </div>
    </div>
  </div>
  <h3>Live</h3>
  <div class="d-flex">
    <div class="work" v-for="{ title, link, description, logo }, index in works" :key="index"
      @click="toWork(link)">
      <img :src="logo">
      <div class="work-info">
        <h4 :title="title">{{ title }}</h4>
        <p :title="description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  flex-wrap: wrap;
}

.work>img {
  width: 40px;
  height: 40px;
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

@media (prefers-color-scheme: dark) {
  .work:hover::before {
    background-color: rgba(255, 255, 255, .037);
  }

  .work:active::before {
    background-color: rgba(255, 255, 255, .06);
  }

}

@media (min-width: 900px) {
  .work {
    width: fit-content;
  }

  .work-info {
    width: 150px;
  }
}

@media (min-width: 1440px) {
  .work-info {
    width: 200px;
  }
}
</style>

<script setup>
import { reactive } from 'vue';

const works = reactive([
  {
    title: 'Boring Days',
    link: 'https://github.com/boring-plans/boring-days',
    logo: 'https://raw.githubusercontent.com/tkzt/boring-days/5c29c1a47122b7648385628c287c23c31f7c5d17/public/logo.svg',
    description: '一个记账类的应用',
  },
  {
    title: 'Emoji Reaction',
    link: 'https://github.com/boring-plans/emoji-reaction',
    logo: 'https://raw.githubusercontent.com/tkzt/emoji-reaction/e75bf200e4bfb7f0447a850e1c881b6b6f3a3562/public/logo.svg',
    description: '一个 Emoji 反馈组件',
  },
  {
    title: 'Hex Map',
    link: 'https://github.com/boring-plans/hex-map',
    logo: 'https://raw.githubusercontent.com/tkzt/hex-map/ed50da97ecf3c03cde5e7243120d69b08122b9e1/logo.svg',
    description: '根据海克斯科技强化筛选优选阵容',
  },
  {
    title: 'DDT Sharp Shooter',
    link: 'https://github.com/boring-plans/ddt-sharp-shooter',
    logo: 'https://raw.githubusercontent.com/tkzt/ddt-sharp-shooter/3e0d2fc02e0c6f3605bb818294400c5d8b1cee07/assets/logo.svg',
    description: '熟悉的 BGM 响起，事情却不一样了起来',
  },
]);
const worksBuilding = reactive([
  {
    title: 'TMD Editor',
    link: 'https://github.com/boring-plans/tmd-editor',
    logo: new URL('../assets/tmd.svg', import.meta.url).href,
    description: 'A simple ProseMirror based markdown editor.',
  },
]);

function toWork (link) {
  const a = document.createElement('a');
  a.href = link;
  a.target = '_blank';
  a.click();
}
</script>
