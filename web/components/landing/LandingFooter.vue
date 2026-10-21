<template>
  <footer class="border-t border-border py-10">
    <div class="mx-auto max-w-content px-6">
      <div class="flex flex-col gap-8 md:flex-row md:justify-between">
        <div>
          <div class="flex items-center gap-2 font-heading text-sm font-bold">
            <span class="flex h-7 w-7 items-center justify-center rounded-sm bg-accent text-accent-foreground text-xs">B</span>
            Behzad Baladeh
          </div>
          <p class="mt-2 max-w-[32ch] text-sm leading-6 text-muted-foreground">Software engineer focused on backend systems and clean architecture.</p>
        </div>
        <div class="grid grid-cols-2 gap-8 text-sm md:grid-cols-2">
          <div>
            <div class="mono text-xs font-semibold tracking-widest text-muted-foreground">EXPLORE</div>
            <ul class="mt-3 space-y-2 text-muted-foreground">
              <li><a href="#features" class="hover:text-foreground">Skills</a></li>
              <li><a href="#experience" class="hover:text-foreground">Experience</a></li>
              <li><a href="#contact" class="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <div class="mono text-xs font-semibold tracking-widest text-muted-foreground">CONNECT</div>
            <ul class="mt-3 space-y-2 text-muted-foreground">
              <li><a href="https://github.com/behzad-mousavi" target="_blank" rel="noopener" class="hover:text-foreground">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/behzad-baladeh-129251aa/" target="_blank" rel="noopener" class="hover:text-foreground">LinkedIn</a></li>
              <li><a href="mailto:behzad.mousavibaladeh@gmail.com" class="hover:text-foreground">Email</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Behzad Baladeh. All rights reserved.</div>
    </div>
  </footer>
</template>
