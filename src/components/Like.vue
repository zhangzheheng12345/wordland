<template>
  <div class="flex items-center">
    <span
      class="m-3px"
      :class="toLike ? 'i-tabler-thumb-up-filled' : 'i-tabler-thumb-up'"
    ></span>
    <span @click="toggle" class="font-550">{{ likesCount }}</span>
  </div>
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'
import { getStorageKeyForArticleLikes } from '../logics/utils'
import { getArticleLikes, toggleLike } from '../logics/articleLikes'

const props = defineProps<{
  name: string
}>()

const toLike = useLocalStorage(getStorageKeyForArticleLikes(props.name), false)
const likesCount = ref(await getArticleLikes(props.name))

function toggle() {
  toggleLike(props.name, toLike, likesCount)
}
</script>
