<template>
  <h1 class="title">Hello.</h1>
  <h3 class="divider subtitle">
    <ruby>
      吾姓陶名康，自號清秋。
      <rt>My name is Allen Tao, aka Qingqiu.</rt>
    </ruby>
  </h3>
  <p class="paragraph">
    <ruby>
      一名新生代農民工
      <rt>
        A plain software developer
      </rt>
    </ruby>
  </p>
  <p class="paragraph">
    <ruby>
      一個<a href="https://fine-weather-gallery.tkzt.cn" target="_blank" class="underline">好天氣攝影</a>愛好者
      <rt>
        Love taking photos when sunny
      </rt>
    </ruby>
  </p>
  <p class="paragraph">
    <ruby>
      會一些花拳綉腿，有幾個<router-link to="/boring-plans" class="underline">拙劣作品</router-link>
      <rt>
        Keen on developing some individual projects
      </rt>
    </ruby>
  </p>
  <p class="paragraph">
    <ruby>
      偶爾寫一些<router-link to="/boring-blogs" class="underline">博客</router-link>
      <rt>
        Have a blog site
      </rt>
    </ruby>
  </p>
  <p class="divider-filled"></p>
  <div class="emoji-reaction">
    <emoji-reaction react-to="tkzt.cn" :reactor="reactor" :react="react" :unreact="unreact"
      :getReactions="getReactions" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { EmojiReaction } from 'emoji-reaction';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://kjslqwyilnpzselvwdib.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtqc2xxd3lpbG5wenNlbHZ3ZGliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxODI0MjMsImV4cCI6MTk4NDc1ODQyM30.ePHLfYPvu4E5Ts_CVJo3wUXTnc6L0tEMuzQ-SX0bDDo';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const reactor = ref('');

const fpPromise = FingerprintJS.load();
(async () => {
  const fp = await fpPromise;
  const result = await fp.get();
  reactor.value = result.visitorId;
})();

async function react(reaction) {
  await supabase
    .from('home-reactions')
    .insert([
      { reactor: reactor.value, reaction },
    ]);
}

async function unreact(reaction) {
  await supabase
    .from('home-reactions')
    .delete()
    .eq('reactor', reactor.value)
    .eq('reaction', reaction);
}

async function getReactions() {
  const { data } = await supabase.from('home-reactions').select('reactor, reaction');
  return data?.reduce((pre, curr) => {
    const indexExists = pre.findIndex((p) => p.reaction === curr.reaction);
    if (indexExists > -1) {
      if (!pre[indexExists].reactors.includes(curr.reactor)) {
        pre[indexExists].reactors.push(curr.reactor);
      }
    } else {
      pre.push({
        reaction: curr.reaction,
        reactors: [curr.reactor],
      });
    }
    return pre;
  }, []);
}
</script>

<style scoped>
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
  color: rgba(0, 0, 0, .85);
}

.paragraph>ruby {
  ruby-align: left;
}

.paragraph::before {
  content: '*';
  margin-right: 12px;
  font-size: xx-small;
}

.emoji-reaction {
  font-family: initial;
}

@media (max-width: 500px) {
  .paragraph > ruby > rt {
    display: none;
  }

  .paragraph {
    font-size: medium;
  }

  .sm-hidden {
    display: none;
  }
}

.underline {
  display: inline-block;
  position: relative;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  transform-style: preserve-3d;
}

.underline::before {
  content: '';
  position: absolute;
  height: 6px;
  width: 100%;
  background-color: var(--tkzt-primary);
  left: 0;
  bottom: 3px;
  border-radius: 2px;
  transition: .06s ease-in-out;
  transform: translateZ(-1px);
}

.underline:hover::before {
  background-color: var(--tkzt-primary-dark);
}

.underline:hover {
  color: rgba(0, 0, 0, 1);
}

@media (prefers-color-scheme: dark) {
  .paragraph {
    color: rgba(255, 255, 255, .85);
  }

  .underline:hover {
    color: rgba(255, 255, 255, 1);
  }
}
</style>
