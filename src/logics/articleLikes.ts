import { supabase } from './supabaseClient'
import type Ref from 'vue'

export async function newLikesCount(name: string) {
  const { data, error } = await supabase
    .from('article_likes')
    .insert({ article_name: name, likes_count: 0 })
}

export async function getArticleLikes(name: string): number {
  const { data, error } = await supabase
    .from('article_likes')
    .select()
    .eq('article_name', name)
  if (error !== undefined) {
    newLikesCount(name)
    return 0
  } else return data[0].likes_count
}

export async function toggleLike(
  name: string,
  toLike: Ref<boolean>,
  likesCount: Ref<number>
) {
  if (toLike.value) likesCount.value--
  else likesCount.value++
  toLike.value = !toLike.value
  const { error } = await supabase
    .from('article_likes')
    .update({ likes_count: likesCount.value })
    .eq('article_name', name)
}
