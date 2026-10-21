export function useTheme() {
  const theme = ref<'dark' | 'light'>('dark')

  function apply(t: 'dark' | 'light') {
    theme.value = t
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', t)
      localStorage.setItem('forge-theme', t)
      localStorage.setItem('forge-theme-manual', '1')
    }
  }

  function toggle() {
    apply(theme.value === 'dark' ? 'light' : 'dark')
  }

  function timeBasedTheme(): 'dark' | 'light' {
    const hour = new Date().getHours()
    return hour >= 7 && hour < 19 ? 'light' : 'dark'
  }

  onMounted(() => {
    const manual = localStorage.getItem('forge-theme-manual')
    const saved = localStorage.getItem('forge-theme') as 'dark' | 'light' | null

    if (manual && saved) {
      apply(saved)
    } else {
      apply(timeBasedTheme())
    }

    const checkInterval = setInterval(() => {
      if (!localStorage.getItem('forge-theme-manual')) {
        const expected = timeBasedTheme()
        if (expected !== theme.value) apply(expected)
      }
    }, 60_000)

    onUnmounted(() => clearInterval(checkInterval))
  })

  return { theme, toggle, apply }
}
