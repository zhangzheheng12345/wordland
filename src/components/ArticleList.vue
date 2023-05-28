<template>
  <ul>
    <li class="p-5px m-10px flex-wrap" v-for="article in props.articles">
      <time>{{ article.pubDate }}</time>
      <a :href="article.url">{{ article.title }}</a>
      <span>{{ AUTHORS[article.author].cnName }}</span>
      <div class="w-100%"></div>
      <i>{{ article.description }} </i>
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
ul {
  list-style-type: none;
}
ul li {
  display: flex;
  flex-basis: 130px;
}
ul li a {
  font-weight: bold;
}
</style>
