<template>
  <br />
  <p v-for="sentence in sentences">
    <i>{{ sentence }}</i>
  </p>
  <br />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { sleep } from '../logics/showUp'

const props = defineProps<{
  sentences: Array<string>
}>()

const sentences = ref(new Array(props.sentences.length).fill('|'))

onMounted(async () => {
  await sleep(700)
  for (let i = 0; i < sentences.value.length; i++) {
    for (let j = 0; j < props.sentences[i].length; j++) {
      if (j == 0) sentences.value[i] = props.sentences[i][0]
      else sentences.value[i] += props.sentences[i][j]
      await sleep(70)
    }
    await sleep(120)
  }
})
</script>
