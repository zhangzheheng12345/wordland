<template>
  <ul>
    <li v-for="author in AUTHORS">
      <p>
        <strong>{{ author.cnName }}</strong> {{ author.email }}
      </p>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {AUTHORS} from '../config'
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
