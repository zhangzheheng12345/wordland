<template>
  <div
    class="flex items-center cursor-default animate-iteration-1 animate-bounce-alt active:animate-none throttle"
    @click="toggle"
    :style="`animation-duration:${duration}s;`"
  >
    <span
      class="m-3px"
      :class="toLike ? 'i-tabler-thumb-up-filled' : 'i-tabler-thumb-up'"
    ></span>
    <span class="font-550">{{ likesCount }}</span>
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
