<template>
  <div
    class="max-w-130px m-auto mt-20px p-1px rounded-10px flex items-center justify-center cursor-pointer animate-iteration-1 animate-jello active:animate-none throttle"
    @click="toggle"
    :style="`animation-duration:${duration}s;`"
  >
    <span
      class="m-5px"
      :class="toLike ? 'i-tabler-thumb-up-filled' : 'i-tabler-thumb-up'"
    ></span>
    <span>{{ likesCount }}</span>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { onMounted, ref } from 'vue'
import {
  getStorageKeyForArticleLikes,
  getStorageKeyToLike
} from '../logics/utils'
import { getArticleLikes, toggleLike } from '../logics/articleLikes'

const props = defineProps<{
  name: string
}>()

const toLike = useLocalStorage(getStorageKeyForArticleLikes(props.name), false)
const likesCount = useLocalStorage(getStorageKeyToLike(props.name), 0)

const duration = ref(0)

onMounted(async () => {
  const res = await getArticleLikes(props.name)
  if (res) likesCount.value = res as number
  setTimeout(() => {
    duration.value = 1
  }, 1000)
})

function toggle() {
  toggleLike(props.name, toLike, likesCount)
}
</script>

<style scoped>
div {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    145deg,
    var(--light-sea-blue) 0%,
    var(--sea-blue) 85%,
    var(--dark-sea-blue) 96%,
    var(--dark-sea-blue) 100%
  );
}
div * {
  color: white;
}
</style>
