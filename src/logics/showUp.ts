import { ref } from 'vue'
import type { Ref } from 'vue'

export function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export const useShowUp = (length: number) => {
  return {
    opacities: ref(new Array(length).fill(0)),
    translations: ref(new Array(length).fill(30)),
    translate: (
      opacities: Ref<Array<number>>,
      translations: Ref<Array<number>>
    ) =>
      async function () {
        for (let i = 0; i < length; i++) {
          opacities.value[i] = 1
          translations.value[i] = 0
          await sleep(280)
        }
      }
  }
}
