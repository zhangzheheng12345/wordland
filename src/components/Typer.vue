<template>
  <noscript>
    <p v-for="sentence in processedSentences">
      {{ sentence }}
    </p>
  </noscript>
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
  sentences: string
}>()

const processedSentences = props.sentences.split(' ')

const sentences = ref(new Array(props.sentences.length).fill('|'))

onMounted(async () => {
  for (let i = 0; i < sentences.value.length; i++) {
    for (let j = 0; j < processedSentences[i].length; j++) {
      if (j == 0) sentences.value[i] = processedSentences[i][0]
      else sentences.value[i] += processedSentences[i][j]
      await sleep(70)
    }
    await sleep(120)
  }
})
</script>
