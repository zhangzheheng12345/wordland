<template>
  <ul>
    <li class="p-5px m-10px flex flex-wrap" v-for="article in props.articles">
      <time>{{ article.pubDate }}</time>
      <a :href="article.url" class="min-w-70px">{{ article.title }}</a>
      <span>{{ AUTHORS[article.author].cnName }}</span>
      <div class="w-100%"></div>
      <i class="ml-5px">{{ article.description }}</i>
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
  padding: unset;
}
  ul li * {
    margin: 5px;
    margin-right: 10px;
  }
ul li a {
  font-weight: bold;
}
</style>
