<template>
  <div class="slide-enter-content">
    <div
      v-for="author in AUTHORS"
      class="list p-20px mb-20px rounded-10px hover:shadow-lg transition-160"
    >
      <h2 class="text-1.3em m-0 mb-5px">{{ author.cnName }}</h2>
      <div class="flex flex-wrap m-10px">
        <span
          v-for="badge in author.badges"
          class="badge text-white line-height-100% m-5px p-7px rounded-5px shadow-sm hover:shadow-md transition-160"
        >
          {{ badge }}
        </span>
      </div>
      <p class="m-0 ml-15px flex items-center email">
        <span class="i-tabler-mailbox mx-6px transition-160"></span>
        <i class="text-1.06rem">{{ author.email }}</i>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AUTHORS } from '../config'
</script>

<style scoped>
div.list {
  border: 2px solid #222;
}
.email:hover .i-tabler-mailbox {
  transform: translateY(-3px);
}
</style>
