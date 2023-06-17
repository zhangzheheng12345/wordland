import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import UnoCSS from 'unocss/astro'
import presetIcons from '@unocss/preset-icons'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify/functions'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://wordland.netlify.app',
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      presets: [presetIcons()]
    }),
    vue()
  ],
  output: 'server',
  adapter: netlify()
})
