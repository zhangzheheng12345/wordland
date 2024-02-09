<template>
  <div class="slide-enter-content">
    <div v-for="author in AUTHORS" class="list p-20px mb-20px rounded-10px">
      <h2 class="text-1.3em m-0 mb-5px">{{ author.cnName }}</h2>
      <div class="ml-10px flex flex-wrap">
        <span
          v-for="badge in author.badges"
          class="badge text-white line-height-100% m-5px p-6px rounded-5px shadow-sm"
          >{{ badge }}</span
        >
      </div>
      <p class="m-0 ml-15px">
        <i>{{ author.email }}</i>
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
</style>
