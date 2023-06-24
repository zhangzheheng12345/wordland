import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import UnoCSS from 'unocss/astro'
import { presetUno, presetIcons } from 'unocss'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify/functions'
import vue from '@astrojs/vue'

const siteDomain = 'wordland.site'

export default defineConfig({
  site: 'https://' + siteDomain,
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons({
          scale: 1.5,
          cdn: 'https://esm.sh'
        })
      ]
    }),
    vue()
  ],
  output: 'server',
  adapter: netlify()
})
