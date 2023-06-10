<template>
  <div
    v-for="(author, index) in authors"
    class="list p-20px mb-20px rounded-5px transition-700"
    :style="{
      opacity: showUp.opacities.value[index],
      transform: `translate(0px, ${showUp.translations.value[index]}px)`
    }"
  >
    <h2 class="text-1.3em m-0 mb-5px">{{ author.cnName }}</h2>
    <div class="ml-10px flex flex-wrap">
      <span
        v-for="badge in author.badges"
        class="text-white bg-#3273dc line-height-100% m-5px p-5px rounded-5px"
        >{{ badge }}</span
      >
    </div>
    <p class="m-0 ml-15px">
      <i>{{ author.email }}</i>
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { AUTHORS } from '../config'
import { useShowUp } from '../logics/showUp'

const authors = []
for (let author in AUTHORS) {
  authors.push(AUTHORS[author])
}

const showUp = useShowUp(authors.length)

onMounted(() => showUp.translate())
</script>

<style scoped>
div.list {
  border: 2px solid #222;
}
</style>
