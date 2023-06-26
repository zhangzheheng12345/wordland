<template>
  <div
    class="pushable max-w-130px m-auto mt-20px p-1px rounded-10px flex items-center justify-center cursor-pointer throttle transition-250"
    @click="toggle"
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
import { ref } from 'vue'
import { getStorageKeyToLike } from '../logics/utils'
import { getArticleLikes, toggleLike } from '../logics/articleLikes'

const props = defineProps<{
  name: string
}>()

const toLike = useLocalStorage(getStorageKeyToLike(props.name), false)
const likesCount = ref(0)

const res = await getArticleLikes(props.name)
if (res) likesCount.value = res as number

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
    var(--sea-blue) 65%,
    var(--dark-sea-blue) 90%,
    var(--dark-sea-blue) 100%
  );
}
div:hover {
  transform: scale(1.04, 1.02);
}
div * {
  color: white;
}
</style>
