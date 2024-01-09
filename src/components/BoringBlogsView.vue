<template>
  <div v-if="loading" class="text-sm">Loading..</div>
  <div v-else>
    <div v-for="{ list, year }, index in articles" :key="index" class="articles text-sm md:text-4">
      <h3>{{ year }}</h3>
      <ul>
        <li v-for="{ title, date, link }, idx in list" :key="idx" target="_blank">
          <a :href="link" class="text-btn c-inherit" target="_blank">
            <span>
              <template v-if="date.match(/\d{4}-\d{2}-\d{2}/)">
                {{ date.replace(/^\d{4}-/, '') }}
              </template>
              {{ title }}
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const articles = ref([])
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  const articlesFlattened = (await (await fetch('https://n-notes.tkzt.cn/blogs.json')).json())
  articles.value = articlesFlattened.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  ).reduce((pre, curr) => {
    const year = new Date(curr.date)?.getFullYear() || curr.date
    const yearExists = pre.find((p) => p.year === year)
    if (yearExists) {
      yearExists.list.push(curr)
    } else {
      pre.push({
        year,
        list: [curr],
      })
    }

    return pre
  }, [])
  loading.value = false
})
</script>

<style scoped>
.articles h3:nth-of-type(n+2) {
  margin-top: 36px;
}
</style>
