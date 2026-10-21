<script setup lang="ts">
</script>

<template>
  <section class="relative overflow-hidden border-b border-border">
    <div class="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
    <div class="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[90px]" aria-hidden="true" />

    <div class="relative mx-auto max-w-content px-6 py-14 md:py-20">
      <div class="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div class="space-y-6 animate-fade-in">
          <div class="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
            <span class="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(34,197,94,0.6)]" aria-hidden="true" />
            <span class="font-heading text-[11px] font-semibold tracking-widest text-muted-foreground">Available for new opportunities</span>
          </div>

          <h1 class="text-balance font-heading text-[32px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[46px]">
            Behzad Baladeh<br />
            <span class="text-accent">Software Engineer</span>
          </h1>
          <p class="max-w-[48ch] text-[15px] leading-7 text-muted-foreground">
            I build reliable backend systems and thoughtful product experiences — from architecture to deployment. Focused on clean code, performance, and shipping.
          </p>

          <div class="flex flex-wrap items-center gap-3 pt-1">
            <a href="#contact" class="btn-ghost">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Get in touch
            </a>
            <a href="/Behzad Baladeh - Backend Engineer Resume.pdf" download="Behzad_Baladeh_Resume.pdf" class="btn-primary">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Download Resume
            </a>
          </div>

          <div class="flex flex-wrap gap-6 pt-2 font-heading text-xs text-muted-foreground">
            <span class="inline-flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-accent" /> Open to opportunities</span>
            <span>Based in Armenia · Remote friendly</span>
          </div>

          <div class="grid grid-cols-3 gap-4 border-t border-border pt-6 max-w-[520px]">
            <div>
              <div class="mono text-lg font-bold tracking-tight">5+</div>
              <div class="text-xs text-muted-foreground">Years experience</div>
            </div>
            <div class="border-l border-border pl-4">
              <div class="mono text-lg font-bold tracking-tight">Go</div>
              <div class="text-xs text-muted-foreground">Primary stack</div>
            </div>
            <div class="border-l border-border pl-4">
              <div class="mono text-lg font-bold tracking-tight">20+</div>
              <div class="text-xs text-muted-foreground">Projects shipped</div>
            </div>
          </div>
        </div>

        <div class="code-window shadow-xl animate-fade-in" style="animation-delay: 80ms">
          <div class="flex items-center gap-1.5 border-b border-border bg-card px-4 py-3">
            <span class="h-3 w-3 rounded-full bg-[#FF5F57] border border-black/10" aria-hidden="true" />
            <span class="h-3 w-3 rounded-full bg-[#FFBD2E] border border-black/10" aria-hidden="true" />
            <span class="h-3 w-3 rounded-full bg-[#28CA42] border border-black/10" aria-hidden="true" />
            <span class="ml-3 mono text-xs text-muted-foreground">zsh — behzad</span>
          </div>
          <pre class="overflow-x-auto p-4 mono text-[13px] leading-6"><code><span style="color:var(--syntax-comment)"># quick intro</span>
<span style="color:var(--syntax-operator)">$</span> <span style="color:var(--syntax-function)">whoami</span>
<span style="color:var(--color-foreground)">Behzad Baladeh — Software Engineer</span>
<span style="color:var(--syntax-operator)">$</span> <span style="color:var(--syntax-function)">cat</span> <span style="color:var(--syntax-string)">stack.txt</span>
<span style="color:var(--color-foreground)">Go · TypeScript · Python · Docker · PostgreSQL</span>
<span style="color:var(--syntax-operator)">$</span> <span style="color:var(--syntax-function)">cat</span> <span style="color:var(--syntax-string)">focus.txt</span>
<span style="color:var(--color-foreground)">Backend systems · APIs · Distributed services</span>
<span style="color:var(--syntax-operator)">$</span> <span style="color:var(--syntax-function)">curl</span> <span style="color:var(--syntax-string)">hidden-tools.ir/resume.pdf</span> <span style="color:var(--syntax-comment)"># grab my resume</span></code></pre>
        </div>
      </div>
    </div>
  </section>
</template>
