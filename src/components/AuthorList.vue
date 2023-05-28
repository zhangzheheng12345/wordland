<template>
  <div v-for="author in AUTHORS" class="p-20px mb-20px">
    <h2 class="text-1.25em m-0">{{ author.cnName }}</h2>
    <p class="m-0 ml-10px">
      <i>{{ author.email }}</i>
    </p>
  </div>
</template>

<script setup lang="ts">
import { AUTHORS } from '../config'
</script>

<style scoped>
div {
  border: 2px solid #222;
  border-radius: 5px;
}
</style>
