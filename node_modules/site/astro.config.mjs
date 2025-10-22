import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        // point @starter/ui straight to the source
        '@starter/ui': fileURLToPath(new URL('../../packages/ui/src', import.meta.url)),
      },
    },
  },
})
