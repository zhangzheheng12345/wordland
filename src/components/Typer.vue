<template>
  <br />
  <p v-for="sentence in sentences" @dblclick="typer">
    <i>{{ sentence }}</i>
  </p>
  <br />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { sleep } from '../logics/showUp'

const props = defineProps<{
  sentences: string
}>()

const processedSentences = props.sentences.split(' ')

const sentences = ref(new Array(processedSentences.length).fill('|'))
const typer = async () => {
  sentences.value = new Array(processedSentences.length).fill('|')
  for (let i = 0; i < sentences.value.length; i++) {
    for (let j = 0; j < processedSentences[i].length; j++) {
      if (j == 0) sentences.value[i] = processedSentences[i][0]
      else sentences.value[i] += processedSentences[i][j]
      await sleep(90)
    }
    await sleep(140)
  }
}

onMounted(typer)
</script>

<style>
/* no selection for better dbclick */
p {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
</style>
