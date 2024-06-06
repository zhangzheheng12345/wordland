<template>
  <h2
    v-if="mode === 'Simple'"
    class="title-recent flex items-center mt-8px mb-20px w-auto cursor-default"
  >
    <span class="i-tabler-chevrons-down text-1.1em transition-150"></span>
    <span class="text-1.1em">最近</span>
  </h2>
  <div v-else class="flex items-center flex-nowrap mb-5px">
    <input
      v-model="searchWords"
      class="w-full pushable focus:shadow-lg hover:shadow-lg transition-160"
    />
    <span class="i-tabler-search text-1.2em m-6px"></span>
  </div>
  <div class="slide-enter-content">
    <div
      class="list p-10px pl-20px mb-20px items-center flex flex-wrap hover:shadow-lg transition-180"
      v-for="article in articlesToShow"
      :class="mode === 'Full' ? 'rounded-10px' : 'rounded-8px'"
    >
      <a
        :href="article.url"
        class="pushable article-link text-1.35em font-bold m-5px ml-2px mr-0 hover:decoration-none flex items-center"
      >
        <span>{{ article.title }}</span>
        <span class="i-tabler-chevrons-right transition-180"></span>
      </a>
      <div class="w-100%"></div>
      <time class="ml-20px m-5px not-italic">{{ article.pubDate }}</time>
      <span class="ml-8px">
        {{ article.author }}
      </span>
      <span class="i-tabler-ballpen ml-3px"></span>
      <div class="w-100%"></div>
      <div v-if="mode === 'Full'" class="m-8px ml-20px w-full">
        <p v-for="sentence in article.description" class="m-6px ml-0">
          <i>{{ sentence }}</i>
        </p>
      </div>
    </div>
    <a
      v-if="mode === 'Simple'"
      href="/words"
      class="pushable all-articles-link hover:shadow-lg transition-180 flex m-auto mt-33px mb-73px items-center justify-center max-w-110px rounded-10px p-5px text-very-dark-gray"
    >
      <span>全部文章</span>
      <span class="ml-1px i-tabler-chevrons-right transition-160"></span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import type { Article } from '../logics/searchArticle'
import { search } from '../logics/searchArticle'

const props = defineProps<{
  articles: Array<Article>
  mode: 'Full' | 'Simple'
}>()

const articlesToShow = ref(
  props.mode === 'Full' ? props.articles : props.articles.slice(0, 5)
)

// Search article
const searchWords = ref('')
watchEffect(() => {
  if (props.mode === 'Full')
    articlesToShow.value = search(searchWords.value, props.articles)
})
</script>

<style scoped>
div.list {
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
