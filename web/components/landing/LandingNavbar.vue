<script setup lang="ts">
const { theme, toggle } = useTheme()
const menuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded-sm focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-accent-foreground">Skip to content</a>
    <nav class="mx-auto flex h-[60px] max-w-content items-center justify-between gap-4 px-6" aria-label="Primary">
      <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0">
        <span class="flex h-8 w-8 items-center justify-center rounded-sm bg-accent font-heading text-sm font-bold text-accent-foreground tracking-tight">B</span>
        <span class="font-heading text-[15px] font-bold tracking-tight">Behzad Mousavi</span>
      </NuxtLink>

      <div class="hidden items-center gap-1 md:flex">
        <a href="#features" class="rounded-sm px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">Skills</a>
        <a href="#experience" class="rounded-sm px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">Experience</a>
        <a href="#contact" class="rounded-sm px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">Contact</a>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          class="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-border-strong hover:bg-muted transition-colors cursor-pointer"
          @click="toggle"
        >
          <svg v-if="theme === 'dark'" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <svg v-else class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <a href="https://github.com/behzad-mousavi" target="_blank" rel="noopener" aria-label="GitHub" class="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-border-strong hover:bg-muted transition-colors">
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 11.017c0 3.985 2.577 7.364 6.153 8.558.45.083.614-.196.614-.435 0-.214-.008-.78-.012-1.531-2.503.544-3.031-1.207-3.031-1.207-.409-1.04-.999-1.317-.999-1.317-.817-.558.062-.547.062-.547.903.063 1.378.928 1.378.928.803 1.377 2.107.98 2.62.749.081-.582.314-.98.571-1.205-1.998-.228-4.098-1-4.098-4.451 0-.983.351-1.787.926-2.417-.093-.228-.401-1.145.088-2.387 0 0 .756-.242 2.476.923a8.55 8.55 0 012.253-.303c.765.004 1.535.103 2.254.303 1.72-1.165 2.475-.923 2.475-.923.49 1.242.182 2.159.089 2.387.576.63.926 1.434.926 2.417 0 3.46-2.103 4.22-4.106 4.443.324.28.613.83.613 1.673 0 1.208-.011 2.182-.011 2.478 0 .24.163.521.619.433A11.03 11.03 0 0022 11.017C22 6.484 17.523 2 12 2z"/></svg>
        </a>
        <a href="/resume.pdf" download="Behzad_Mousavi_Resume.pdf" class="btn-primary hidden sm:inline-flex">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Download Resume
        </a>
        <button type="button" aria-label="Open menu" :aria-expanded="menuOpen" class="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border md:hidden cursor-pointer" @click="menuOpen = !menuOpen">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path v-if="!menuOpen" d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/><path v-else d="M6 18L18 6M6 6l12 12" stroke-linecap="round"/></svg>
        </button>
      </div>
    </nav>
    <div v-if="menuOpen" class="border-t border-border bg-card px-6 py-4 md:hidden">
      <div class="flex flex-col gap-1">
        <a href="#features" class="rounded-sm px-3 py-2 text-sm hover:bg-muted" @click="menuOpen=false">Skills</a>
        <a href="#experience" class="rounded-sm px-3 py-2 text-sm hover:bg-muted" @click="menuOpen=false">Experience</a>
        <a href="#contact" class="rounded-sm px-3 py-2 text-sm hover:bg-muted" @click="menuOpen=false">Contact</a>
        <a href="/resume.pdf" download="Behzad_Mousavi_Resume.pdf" class="btn-primary mt-2 justify-center" @click="menuOpen=false">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          Download Resume
        </a>
      </div>
    </div>
  </header>
</template>
