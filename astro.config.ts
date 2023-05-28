import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import UnoCSS from 'unocss/astro'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify/functions'

import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  site: 'https://wordland.netlify.app',
  integrations: [mdx(), sitemap(), UnoCSS(), vue()],
  output: 'server',
  adapter: netlify()
})
