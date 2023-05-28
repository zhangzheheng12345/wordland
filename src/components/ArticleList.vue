<template>
  <ul>
    <li class="p-5px m-10px flex-wrap" v-for="article in props.articles">
      <time>{{ article.pubDate }}</time>
      <a :href="article.url">{{ article.title }}</a>
      <i>{{ article.author }}</i>
    </li>
  </ul>
</template>

<script setup lang="ts">
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
}
ul li a {
  font-weight: bold;
}
</style>
