// packages/ui/tailwind-preset.cjs
module.exports = {
  theme: {
    extend: {
      // sizes are neutral; colors use CSS vars (brandable)
      spacing: { '18': '4.5rem' },
      borderRadius: { '2xl': '1rem' },
      fontSize: {
        // fluid type via clamp
        display: ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.1' }],
        body: ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6' }],
      },
      colors: {
        bg: 'var(--c-bg)',
        text: 'var(--c-text)',
        primary: 'var(--c-primary)',
        muted: 'var(--c-muted)',
      },
    },
  },
  plugins: [],
}
