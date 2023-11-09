<template>
  <div class="flex items-center flex-wrap flex-col flex-col-reverse md:flex-row">
    <div class="w-100% shrink-0 md:w-50% mt-6 md:mt-0">
      <div class="ma-auto tracking-.37">
        <div class="md:text-5xl text-2xl">你好。</div>
        <div class="my-6 md:text-2xl text-xl">
          这是陶康的主页。此人：
        </div>
        <div class="text-sm md:text-4">
          于 2019 年毕业于<a href="https://www.bing.com/search?q=%E8%A0%A1%E4%B8%93" target="_blank"
            class="link">蠡湖专科<i class="outlink">
            </i></a>，继而成为一名新生代农民工；目前在<a href="https://iot.tcl.com/" target="_blank"
            class="link">这个车间<i
              class="outlink"></i></a>上班；生性胆小，爱好和平，不善表达，嗜睡，同时喜爱武侠与科幻；先后在南京、上海、无锡、上海痛恨、改造、亲手制造过若干座屎山，艰难积攒财富的同时，轻易地得到了肥胖、肩颈疾病、高血压；是一个<a
            href="https://fine-weather-gallery.tkzt.cn" target="_blank" class="link">好天气摄影<i
              class="outlink"></i></a>爱好者；胡乱学过一些花拳绣腿，造了一些<router-link to="/boring-plans"
            class="link">玩具</router-link>；云顶之弈好玩赌狗阵容、饥荒里常选伍迪；由淮扬菜组成，更喜欢苏帮菜，最爱鸡蛋灌饼、煎饼馃子类食物；偶尔心血来潮，写一些<router-link
            to="/boring-blogs"
            class="link">不堪卒读的文章</router-link>；喜欢看岩井俊二、姜文的电影，听宋冬野、逼哥、李宗盛、周杰伦、马飞、王菲和新裤子的歌。
        </div>
        <div class="mt-6">
          <emoji-reaction react-to="tkzt.cn" :reactor="reactor" :react="react" :unreact="unreact"
            :getReactions="getReactions" :dark="isDark" />
        </div>
      </div>
    </div>
    <div class="grow-1 items-center flex md:(justify-end md:mt-0) mt-6 justify-center">
      <div class="relative">
        <img src="https://images.tkzt.cn/fine-weather/thumbnail/1.jpg"
          class="md:w-300px w-100% min-w-300px min-h-200px dark:bg-[rgba(0,0,0,.37)] bg-[rgba(0,0,0,.05)]" />
        <div class="text-right caption mt-1 text-xs md:(text-sm mt-3)">
          2020
          <span class="mx-1">·</span>
          无锡
          <span class="mx-1">·</span>
          「窗台上的雏菊」
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { EmojiReaction } from 'emoji-reaction'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import { createClient } from '@supabase/supabase-js'
import { useDark } from '@vueuse/core'

const SUPABASE_URL = 'https://kjslqwyilnpzselvwdib.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc2xxd3lpbG5wenNlbHZ3ZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxODI0MjMsImV4cCI6MTk4NDc1ODQyM30.ePHLfYPvu4E5Ts_CVJo3wUXTnc6L0tEMuzQ-SX0bDDo'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const isDark = useDark()

const reactor = ref('')

const fpPromise = FingerprintJS.load();
(async () => {
  const fp = await fpPromise
  const result = await fp.get()
  reactor.value = result.visitorId
})()

async function react(reaction) {
  await supabase
    .from('home-reactions')
    .insert([
      { reactor: reactor.value, reaction },
    ])
}

async function unreact(reaction) {
  await supabase
    .from('home-reactions')
    .delete()
    .eq('reactor', reactor.value)
    .eq('reaction', reaction)
}

async function getReactions() {
  const { data } = await supabase.from('home-reactions').select('reactor, reaction')
  return data?.reduce((pre, curr) => {
    const indexExists = pre.findIndex((p) => p.reaction === curr.reaction)
    if (indexExists > -1) {
      if (!pre[indexExists].reactors.includes(curr.reactor)) {
        pre[indexExists].reactors.push(curr.reactor)
      }
    } else {
      pre.push({
        reaction: curr.reaction,
        reactors: [curr.reactor],
      })
    }
    return pre
  }, [])
}
</script>

<style scoped>
.link {
  --at-apply: decoration-none c-inherit relative inline-block;
  --at-apply: before:content-[''] before:h-5px before:bg-[var(--tkzt-primary)] before:w-100% before:inline-block;
  --at-apply: before:absolute before:bottom-0 before:left-0 before:z--1 before:rd-1 before:hover:bg-[var(--tkzt-primary-dark)];
}

.outlink {
  --at-apply: inline-block scale-75 origin-b i-mdi-arrow-top-right;
}
</style>
