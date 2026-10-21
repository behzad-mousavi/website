/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: 'var(--color-primary)', foreground: 'var(--color-on-primary)' },
        secondary: { DEFAULT: 'var(--color-secondary)', foreground: 'var(--color-on-secondary)' },
        accent: { DEFAULT: 'var(--color-accent)', foreground: 'var(--color-on-accent)' },
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: { DEFAULT: 'var(--color-card)', foreground: 'var(--color-card-foreground)' },
        muted: { DEFAULT: 'var(--color-muted)', foreground: 'var(--color-muted-foreground)' },
        border: { DEFAULT: 'var(--color-border)', strong: 'var(--color-border-strong)' },
        destructive: { DEFAULT: 'var(--color-destructive)', foreground: 'var(--color-on-destructive)' },
        ring: 'var(--color-ring)',
        syntax: {
          bg: 'var(--syntax-bg)',
          keyword: 'var(--syntax-keyword)',
          string: 'var(--syntax-string)',
          fn: 'var(--syntax-function)',
          comment: 'var(--syntax-comment)',
          number: 'var(--syntax-number)',
          type: 'var(--syntax-type)',
        }
      },
      fontFamily: {
        heading: ['JetBrains Mono', 'monospace'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px'
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.2)',
        md: '0 4px 16px rgba(0,0,0,0.25)',
        lg: '0 10px 30px rgba(0,0,0,0.35)',
        xl: '0 20px 50px rgba(0,0,0,0.45)'
      },
      maxWidth: {
        content: '1200px'
      },
      keyframes: {
        'fade-in': { from: { opacity: '0', transform: 'translateY(6px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'shimmer': { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
      }
    }
  },
  plugins: []
}
