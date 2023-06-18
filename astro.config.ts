import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import UnoCSS from 'unocss/astro'
import { presetUno, presetIcons } from 'unocss'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify/functions'
import vue from '@astrojs/vue'

export default defineConfig({
  site: 'https://wordland.netlify.app',
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
