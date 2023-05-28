<template>
  <ul>
    <li class="p-10px mb-20px items-center flex flex-wrap" v-for="article in props.articles">
      <time class="mr-10px">{{ article.pubDate }}</time>
      <a :href="article.url" class="text-1.25em">{{ article.title }}</a>
      <div class="w-100%"></div>
      <span class="ml-5px">✏️ {{ AUTHORS[article.author].cnName }}</span>
      <div class="w-100%"></div>
      <i class="m-5px ml-20px">{{ article.description }}</i>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { AUTHORS } from '../config'
const props = defineProps<{
  articles: Array<{
    title: string
    url: string
    pubDate: string
    author: string
    description: string
  }>
}>()
</script>

<style scoped>
time {
  font-style: none;
}
ul {
  list-style-type: none;
  padding: unset;
}
ul li {
  border: 2px solid #222;
  border-radius: 5px;
}
ul li a {
  font-weight: bold;
}
</style>
