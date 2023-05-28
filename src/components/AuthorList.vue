<template>
  <div v-for="author in AUTHORS" class="p-20px">
    <h2>{{ author.cnName }}</h3>
    <p class="ml-10px">
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
