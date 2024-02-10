<template>
  <div v-if="loading" class="text-sm">Loading..</div>
  <div v-else>
    <div v-for="{ list, year }, index in articles" :key="index"
      class="articles text-sm md:text-4 lh-6.18">
      <h3>{{ year }}</h3>
      <ul>
        <li v-for="{ title, date, link }, idx in list" :key="idx" target="_blank">
          <a :href="link" class="text-btn c-inherit" target="_blank">
            <span>
              <template v-if="date.match(/\d{4}-\d{2}-\d{2}/)">
                {{ date.match(/\d{2}-\d{2}/g, '').pop() }}
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
  articles.value = articlesFlattened.reduce((pre, curr) => {
    const year = new Date(curr.date)?.getFullYear() || "此前"
    const yearExists = pre.find((p) => p.year === year)
    curr.date ??= ""
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
