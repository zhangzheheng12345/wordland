<template>
  <div
    class="pushable max-w-8em m-auto mt-4vh mb-7vh p-2px rounded-10px flex items-center justify-center cursor-pointer throttle transition-220 shadow-md hover:shadow-lg"
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
import { onMounted, ref } from 'vue'
import { getStorageKeyToLike } from '../logics/utils'
import { getArticleLikes, toggleLike } from '../logics/articleLikes'
import { sleep } from '../logics/showUp'

const props = defineProps<{
  name: string
}>()

const toLike = useLocalStorage(getStorageKeyToLike(props.name), false)
const likesCount = ref(0)

const res = await getArticleLikes(props.name)
likesCount.value = res ? res as number : 0

onMounted(async () => {
  // Refresh toLike
  toLike.value = !toLike.value
  setTimeout(() => {
    toLike.value = !toLike.value
  }, 0)
})

function toggle() {
  toggleLike(props.name, toLike, likesCount)
}
</script>

<style scoped>
div {
  font-family: var(--mono-more);
  background-image: linear-gradient(
    145deg,
    var(--light-sea-blue) 0%,
    var(--sea-blue) 65%,
    var(--dark-sea-blue) 90%,
    var(--dark-sea-blue) 100%
  );
}
div:active {
  transform: scale(1.04, 1.02);
}
div * {
  color: white;
}
</style>
