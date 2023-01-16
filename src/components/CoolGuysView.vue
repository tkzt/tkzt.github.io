<template>
    <p>是的，这是一个友情链接页面。</p>
    <p>
        主要用来致敬一些
        <ruby>好看的<rt>Beautiful</rt></ruby>
        或者
        <ruby>好看的<rt>Wonderful</rt></ruby>
        网站。
    </p>
    <p class="divider-filled"></p>
    <ul>
        <li v-for="{title, href}, index in coolGuys" :key="index">
            <a :href="href" target="_blank" class="text-link">{{ title }}</a>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';

const coolGuys = ref([
  { title: '祖师爷', href: 'https://evanyou.me/' },
  { title: 'Anthony Fu', href: 'https://antfu.me/' },
  { title: '李辉', href: 'https://greyli.com/' },
  { title: 'Skonhed Studio', href: 'https://skonhed.studio/' },
  { title: '谢益辉', href: 'https://yihui.org/cn/' },
]);
</script>

<style scoped>
p {
    margin: 8px 0;
    font-size: 1.5rem;
}
</style>
