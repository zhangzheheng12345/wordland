import Fuse from 'fuse.js'

export interface Article {
  title: string
  url: string
  pubDate: string
  author: string
  description: Array<string>
}

export function search(words: string, list: Array<Article>): Array<Article> {
  if (words === '') return list
  else
    return new Fuse(list, { keys: ['title', 'description', 'author'] })
      .search(words)
      .map((item) => {
        return item.item
      })
}
