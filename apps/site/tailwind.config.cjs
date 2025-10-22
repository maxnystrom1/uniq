const preset = require('../../packages/ui/tailwind-preset.cjs')
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    './src/**/*.{astro,md,mdx,html,ts,tsx}',
    '../../packages/ui/src/**/*.{astro,ts,tsx,mdx,html}',
  ],
}
