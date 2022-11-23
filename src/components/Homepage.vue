<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { EmojiReaction } from 'emoji-reaction'
import { DeviceUUID } from 'device-uuid'
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://kjslqwyilnpzselvwdib.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc2xxd3lpbG5wenNlbHZ3ZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxODI0MjMsImV4cCI6MTk4NDc1ODQyM30.ePHLfYPvu4E5Ts_CVJo3wUXTnc6L0tEMuzQ-SX0bDDo'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
const reactor = ref('')

async function react(reaction: string) {
  await supabase
  .from('home-reactions')
  .insert([
    { reactor: reactor.value, reaction },
  ])
}

async function unreact(reaction: string) {
  await supabase
  .from('home-reactions')
  .delete()
  .eq('reactor', reactor.value)
  .eq('reaction', reaction)
}

async function getReactions() {
    const { data } = await supabase.from('home-reactions').select('reactor, reaction')
    return data?.reduce((pre: {reaction: string, reactors: string[]}[], curr)=>{
      const indexExists = pre.findIndex(p=>p.reaction===curr.reaction);
      if(indexExists>-1){
        if(!pre[indexExists].reactors.includes(curr.reactor)){
          pre[indexExists].reactors.push(curr.reactor)
        }
      }else{
        pre.push({
          reaction: curr.reaction,
          reactors: [curr.reactor]
        })
      }
      return pre
    }, [])
}

onMounted(()=>{
  reactor.value = new DeviceUUID().get();
})
</script>

<template>
  <div class="container">
    <h1 class="title">Hello.</h1>
    <h3 class="divider subtitle">My name is Allen Tao.</h3>
    <p class="paragraph">I am a software developer, <span class="underline">a fine-weather-photography</span> enthusiast, a rookie in contributing to open source projects.</p>
    <p class="paragraph">In spare time, I'm keen on developing some <span class="underline">individual projects</span> and expect to become an awesome independent software developer some day.</p>
    <p class="divider filled"></p>
    <div class="emoji-reaction">
        <emoji-reaction
            react-to="tkzt.cn"
            :reactor="reactor"
            :react="react"
            :unreact="unreact"
            :getReactions="getReactions"
        />
    </div>
    <p class="divider filled"></p>
    <footer class="footer">
        &copy;&nbsp;
        <small>2022{{2022===new Date().getFullYear()?'':' - Present'}}&nbsp;Allen Tao</small>
        <span class="divider-vertical">-</span>
        <a href="mailto:taoqingqiu@gmail.com" class="icon-link">
          <i class="fa-regular fa-envelope icon"></i>
        </a>
        <a href="https://github.com/boring-plans" class="icon-link">
          <i class="fab fa-github icon"></i>
        </a>
    </footer>
</div>
</template>

<style scoped>
.container {
    margin: auto;
    padding: 24px;
    width: 80% !important;
}

.divider {
    font-size: xx-small;
    margin: 3.7vh 0;
}

.divider.filled {
    height: 12px;
    margin-bottom: 0;
}

.divider-vertical {
    font-size: xx-small;
    margin: 0 1.85vh;
    transform: rotate(90deg);
}

.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
  padding: 3px;
  border-radius: 50%;
  cursor: pointer;
}

.icon:hover {
  background-color: #f5f5f5;
}

.icon-link {
  height: 21px;
  color: rgba(0, 0, 0, .27);
  text-decoration: none;
}

.title {
    font-weight: bolder;
    font-size: 3.3rem;
    margin: 0;
}

.subtitle {
    font-weight: bold;
    font-size: 1.5rem;
}

.paragraph {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, .78);
    text-align: justify;
}

.footer{
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, .27);
    font-size: small;
}

.emoji-reaction{
  font-family: initial;
}

@media screen and (min-width: 1200px) {
    .container {
        width: 37% !important;
    }
}

@media screen and (min-width: 1800px) {
     .container {
        width: 30% !important;
    }
}

.underline{
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.underline::after {
  content: '';
  position: absolute;
  height: 6px;
  width: 100%;
  background-color: violet;
  left: 0;
  bottom: 3px;
  border-radius: 2px;
  z-index: -1;
  opacity: .5;
  transition: .06s ease-in-out;
}

.underline:hover::after {
  height: 8px;
  opacity: .8;
}
</style>
