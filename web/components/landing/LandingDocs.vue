<template>
  <section id="docs" class="mx-auto max-w-content px-6 py-14 md:py-16">
    <div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="rounded-md border border-border bg-card p-6 md:p-8">
        <p class="mono text-xs font-semibold tracking-widest text-accent">DOCUMENTATION</p>
        <h2 class="mt-2 font-heading text-2xl font-bold tracking-tight">Start in 60 seconds</h2>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">Three steps from zero to deployed. No account required for the first deploy.</p>

        <ol class="mt-6 space-y-4">
          <li class="flex gap-3">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent font-heading text-xs font-bold text-accent-foreground">1</span>
            <div>
              <div class="mono text-sm font-semibold">Install the CLI</div>
              <code class="mt-1 inline-block rounded bg-muted px-2 py-1 mono text-xs">npm i -g @forge/cli</code>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted font-heading text-xs font-bold ring-1 ring-border">2</span>
            <div>
              <div class="mono text-sm font-semibold">Scaffold & configure</div>
              <code class="mt-1 inline-block rounded bg-muted px-2 py-1 mono text-xs">forge init my-api --template go</code>
              <p class="mt-1 text-xs text-muted-foreground">Creates <span class="mono text-foreground">.forge/config.yml</span> — edit or keep defaults.</p>
            </div>
          </li>
          <li class="flex gap-3">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted font-heading text-xs font-bold ring-1 ring-border">3</span>
            <div>
              <div class="mono text-sm font-semibold">Deploy</div>
              <code class="mt-1 inline-block rounded bg-muted px-2 py-1 mono text-xs">forge deploy --prod</code>
              <p class="mt-1 text-xs text-muted-foreground">Returns a live URL and streams logs. Roll back with <span class="mono text-foreground">forge rollback</span>.</p>
            </div>
          </li>
        </ol>

        <div class="mt-6 flex flex-wrap gap-3">
          <a href="https://forge.run/docs" target="_blank" rel="noopener" class="btn-primary">Open documentation</a>
          <a href="#snippets" class="btn-ghost">View code samples</a>
        </div>

        <div class="mt-6 flex flex-wrap gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          <span class="inline-flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-accent" /> Versioned API — pin <span class="mono">/v1</span></span>
          <span>Searchable · Offline mirror</span>
        </div>
      </div>

      <div class="space-y-4">
        <div class="rounded-md border border-border bg-card p-5">
          <h3 class="mono text-sm font-semibold">Quick links</h3>
          <ul class="mt-3 space-y-2 text-sm">
            <li><a href="https://forge.run/docs/quickstart" target="_blank" rel="noopener" class="text-accent hover:underline">Quickstart →</a> <span class="text-muted-foreground">— 5 min, no account</span></li>
            <li><a href="https://forge.run/docs/api" target="_blank" rel="noopener" class="text-accent hover:underline">HTTP API reference →</a> <span class="text-muted-foreground">— OpenAPI + examples</span></li>
            <li><a href="https://forge.run/docs/sdk" target="_blank" rel="noopener" class="text-accent hover:underline">SDKs →</a> <span class="text-muted-foreground">— TS, Go, Python</span></li>
            <li><a href="https://forge.run/docs/self-host" target="_blank" rel="noopener" class="text-accent hover:underline">Self-host →</a> <span class="text-muted-foreground">— Docker & k8s</span></li>
          </ul>
        </div>
        <div class="rounded-md border border-accent/20 bg-accent/10 p-5">
          <h3 class="mono text-sm font-semibold">Need a hand?</h3>
          <p class="mt-1 text-sm leading-6 text-muted-foreground">Docs include live examples, rate-limit behavior, and webhook payloads. If you're stuck, open an issue — we reply within a day.</p>
          <a href="https://github.com" target="_blank" rel="noopener" class="mt-3 inline-flex mono text-sm font-semibold text-accent hover:underline">Open GitHub →</a>
        </div>
      </div>
    </div>
  </section>
</template>
