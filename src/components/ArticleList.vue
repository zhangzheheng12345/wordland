<template>
  <h2
    v-if="mode === 'Simple'"
    class="title-recent flex items-center mt-0 mb-33px w-auto cursor-default"
  >
    <span class="i-tabler-chevrons-down text-1.1em transition-150"></span>
    <span class="text-1.1em">最近</span>
  </h2>
  <ul class="list-none p-unset">
    <li
      class="p-10px pl-20px mb-20px items-center flex flex-wrap transition-700"
      v-for="(article, index) in articlesToShow"
      :class="mode === 'Full' ? 'rounded-10px' : 'rounded-7px'"
      :style="{
        opacity: showUp.opacities.value[index],
        transform: `translate(0px, ${showUp.translations.value[index]}px)`
      }"
    >
      <a
        :href="article.url"
        class="article-link text-1.35em font-bold m-5px ml-2px mr-0 hover:decoration-none flex items-center"
      >
        <span>{{ article.title }}</span>
        <span class="i-tabler-chevrons-right transition-180"></span>
      </a>
      <div class="w-100%"></div>
      <time class="ml-20px m-5px not-italic">{{ article.pubDate }}</time>
      <span class="ml-8px">
        {{ AUTHORS[article.author].cnName }}
      </span>
      <span class="i-tabler-ballpen ml-3px hover:"></span>
      <div class="w-100%"></div>
      <div v-if="mode === 'Full'" class="m-8px ml-20px w-100%">
        <p v-for="sentence in article.description" class="m-6px ml-0">
          <i>{{ sentence }}</i>
        </p>
      </div>
    </li>
  </ul>
  <a
    v-if="mode === 'Simple'"
    href="/words"
    class="pushable all-articles-link transition-450 flex m-auto mt-33px mb-73px items-center justify-center max-w-110px rounded-10px p-5px text-#222"
    :style="{
      opacity: showUp.opacities.value[showUp.opacities.value.length - 1],
      transform: `translate(0px, ${
        showUp.translations.value[showUp.translations.value.length - 1]
      }px)`
    }"
  >
    <span>全部文章</span>
    <span class="ml-1px i-tabler-chevrons-right transition-160"></span>
  </a>
</template>

<script setup lang="ts">
import { AUTHORS } from '../config'
import { onMounted } from 'vue'
import { useShowUp } from '../logics/showUp'

const props = defineProps<{
  articles: Array<{
    title: string
    url: string
    pubDate: string
    author: string
    description: Array<string>
  }>
  mode: 'Full' | 'Simple'
}>()

const articlesToShow =
  props.mode === 'Full' ? props.articles : props.articles.slice(0, 5)

const showUp = useShowUp(articlesToShow.length + 1)

onMounted(() => showUp.translate())
</script>

<style scoped>
ul li {
  border: 2px solid var(--very-dark-gray);
}
.title-recent {
  width: intrinsic;
  width: -moz-max-content;
  width: -webkit-max-content;
}
.title-recent:hover .i-tabler-chevrons-down {
  transform: translate(0px, 5px);
}
.article-link .i-tabler-chevrons-right {
  opacity: 0;
}
.article-link:hover .i-tabler-chevrons-right {
  opacity: 1;
  transform: translate(10px, 0px);
}
.all-articles-link {
  border: 2px solid var(--very-dark-gray);
  text-decoration: none;
  user-select: none;
}
.all-articles-link:hover .i-tabler-chevrons-right {
  transform: translate(8px, 0px);
}
</style>
