<template>
  <ul>
    <li v-for="author in AUTHORS" class="p-5px m-10px flex-wrap">
      <h3>{{ author.cnName }}</h3>
      <p class="ml-10px"><i>{{ author.email }}</i></p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { AUTHORS } from '../config'
</script>

<style scoped>
ul {
  list-style-type: none;
}
ul li {
  display: flex;
}
ul li a {
  font-weight: bold;
}
</style>
