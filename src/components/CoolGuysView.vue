<template>
    <main>
        <section>
            <article>
                <div>
                    <p>是的，这是一个友情链接页面。</p>
                    <p>
                        主要致敬一些
                        <ruby>好看的<rt>Beautiful</rt></ruby>
                        或者
                        <ruby>好看的<rt>Awesome Content</rt></ruby>
                        网站。
                    </p>
                    <ul>
                        <li v-for="{title, href}, index in coolGuys" :key="index">
                            <a :href="href" target="_blank">{{ title }}</a>
                        </li>
                    </ul>
                </div>
            </article>
            <footer>
                &copy;&nbsp;
                <small>
                    2022{{ 2022 === new Date().getFullYear() ? '' : ' - Present' }}&nbsp;
                    Allen Tao
                </small>
                <span class="divider-vertical">-</span>
                <router-link title="Back" class="text-link" to="/">回城</router-link>
            </footer>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';

const coolGuys = ref([
  { title: '祖师爷', href: 'https://evanyou.me/' },
  { title: 'Anthony Fu', href: 'https://antfu.me/' },
  { title: '李辉 | Web 开发者，写作爱好者', href: 'https://greyli.com/neighbors/' },
  { title: 'skonhed.studio', href: 'https://skonhed.studio/' },
]);
</script>

<style>
main {
    display: flex;
    width: 100%;
    min-height: 95vh;
    color: rgba(0, 0, 0, .79);
    box-sizing: border-box;
}

section {
    width: 100%;
    margin: auto;
    padding: 24px;
}

article {
    display: flex;
    font-size: 1.5rem;
}

article > div > p {
    margin: 8px 0;
}

article ul {
    margin: 72px 0;
}

article li {
    font-size: medium;
}

@media screen and (min-width: 1400px) {
    section {
        width: 62%;
    }
}

@media screen and (min-width: 1920px) {
    section {
        width: 37%;
    }
}

@media (prefers-color-scheme: dark) {
    main {
        color: rgba(255, 255, 255, .79);
    }

    a {
        color: #c4b5fd;
    }
}
</style>
