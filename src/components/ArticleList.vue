<template>
  <ul class="list-none p-unset">
    <li
      class="p-10px mb-20px rounded-5px items-center flex flex-wrap transition-700"
      v-for="(article, index) in props.articles"
      :style="{
        opacity: showUp.opacities.value[index],
        transform: `translate(0px, ${showUp.translations.value[index]}px)`
      }"
    >
      <time class="mr-10px not-italic">{{ article.pubDate }}</time>
      <a :href="article.url" class="text-1.35em font-bold">{{
        article.title
      }}</a>
      <div class="w-100%"></div>
      <span class="ml-20px">✏️ {{ AUTHORS[article.author].cnName }}</span>
      <div class="w-100%"></div>
      <div class="m-10px ml-20px w-100%">
        <p v-for="sentence in article.description" class="m-6px ml-0">
          <i>{{ sentence }}</i>
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { AUTHORS } from '../config'
import { onMounted, ref } from 'vue'
import { useShowUp } from '../logics/showUp'

const props = defineProps<{
  articles: Array<{
    title: string
    url: string
    pubDate: string
    author: string
    description: Array<string>
  }>
}>()

const showUp = useShowUp(props.articles.length)

onMounted(showUp.translate(showUp.opacities, showUp.translations))
</script>

<style scoped>
ul li {
  border: 2px solid #222;
}
</style>
