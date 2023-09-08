<template>
  <template v-for="{ title, works: { classified, list, extraClass } }, index in  works " :key="index">
    <h2>{{ title }}</h2>
    <template v-if="classified">
      <template v-for="{ title: _title, list: _list, extraClass: _extraClass }, index in list" :key="index">
        <boring-plans :list="_list" :class="_extraClass||''" :title="_title"/>
      </template>
    </template>
    <boring-plans :list="list" v-else  :class="extraClass||''"/>
  </template>
</template>

<style scoped>
h2 {
  text-align: center;
  margin: 3.7rem 0;
}
</style>

<script setup>
import BoringPlans from './BoringPlans.vue';

const works = [
  {
    title: 'Creator',
    works: {
      classified: true,
      list: [
        {
          title: 'Building',
          list: [
            {
              title: 'Qiuying RPA',
              link: 'https://github.com/qiuying-rpa',
              logo: 'https://raw.githubusercontent.com/qiuying-rpa/designer/f9650405849c730eaf6c25be049895c4f7d1df23/public/qiuying.svg',
              description: '众所周知，秋英是一种有着小而美花的植物',
            },
            {
              title: 'Multipaste',
              link: 'https://github.com/tkzt/multipaste',
              logo: 'MTP',
              description: '简洁的剪切板管理工具',
            }
          ]
        },
        {
          title: 'Alive',
          list: [
            {
              title: 'Boring Days',
              link: 'https://github.com/tkzt/boring-days',
              logo: 'https://raw.githubusercontent.com/tkzt/boring-days/5c29c1a47122b7648385628c287c23c31f7c5d17/public/logo.svg',
              description: '一个记账类的应用',
            },
            {
              title: 'Emoji Reaction',
              link: 'https://github.com/tkzt/emoji-reaction',
              logo: 'https://raw.githubusercontent.com/tkzt/emoji-reaction/e75bf200e4bfb7f0447a850e1c881b6b6f3a3562/public/logo.svg',
              description: '一个 Emoji 反馈组件',
            },
            {
              title: 'Hex Map',
              link: 'https://github.com/tkzt/hex-map',
              logo: 'https://raw.githubusercontent.com/tkzt/hex-map/ed50da97ecf3c03cde5e7243120d69b08122b9e1/logo.svg',
              description: '根据海克斯科技强化筛选优选阵容',
            },
            {
              title: 'DDT Sharp Shooter',
              link: 'https://github.com/tkzt/ddt-sharp-shooter',
              logo: 'https://raw.githubusercontent.com/tkzt/ddt-sharp-shooter/3e0d2fc02e0c6f3605bb818294400c5d8b1cee07/assets/logo.svg',
              description: '熟悉的 BGM 响起，事情却不一样了起来',
            },
            {
              title: 'Vue SJV',
              link: 'https://github.com/tkzt/vue-sjv',
              logo: 'SJV',
              description: '一个简单的 Vue JSON Viewer',
            },
            {
              title: 'Resume Template',
              link: 'https://github.com/tkzt/resume-template',
              logo: 'RT',
              description: '一个基于 AlpineJS & UnoCSS 的简历模板',
            },
          ]
        },
        {
          title: 'Dead',
          list: [
            {
              title: 'TMD Editor',
              link: 'https://github.com/tkzt/tmd-editor',
              logo: 'https://raw.githubusercontent.com/tkzt/tmd-editor/263a9a01078712eb0ca4c4a6f2d7a3f71504e0d7/public/tmd.svg',
              description: 'A simple ProseMirror based markdown editor.',
            },
          ],
          extraClass: 'gray-text'
        }
      ]
    }
  },
  {
    title: 'Contributor',
    works: {
      classified: false,
      list: [
        {
          title: 'TMD Editor',
          link: 'https://github.com/apiflask/apiflask',
          logo: 'https://apiflask.com/_assets/favicon.png',
          description: 'A lightweight Python web API framework',
        }
      ],
    }
  }
];
</script>
