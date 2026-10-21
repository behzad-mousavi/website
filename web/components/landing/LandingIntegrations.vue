<script setup lang="ts">
const logos = [
  { name: 'Vercel', label: 'VC' },
  { name: 'GitHub', label: 'GH' },
  { name: 'Supabase', label: 'SB' },
  { name: 'PlanetScale', label: 'PS' },
  { name: 'Cloudflare', label: 'CF' },
  { name: 'Neon', label: 'NE' },
  { name: 'Stripe', label: 'ST' },
  { name: 'Datadog', label: 'DD' },
]
</script>

<template>
  <section id="integrations" class="border-y border-border bg-card/50">
    <div class="mx-auto max-w-content px-6 py-10 md:py-12">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="mono text-xs font-semibold tracking-widest text-accent">INTEGRATIONS</p>
          <h2 class="mt-2 font-heading text-xl font-bold tracking-tight">Plays well with your stack</h2>
          <p class="mt-2 max-w-[46ch] text-sm leading-6 text-muted-foreground">Connect once — Forge keeps env, secrets, and deploys in sync.</p>
        </div>
        <a href="#docs" class="hidden md:inline-flex btn-ghost">Browse integrations</a>
      </div>

      <div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        <div
          v-for="l in logos"
          :key="l.name"
          class="group flex items-center gap-3 rounded-md border border-border bg-card px-4 py-4 hover:border-border-strong hover:shadow-sm transition-all cursor-default"
        >
          <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-muted font-heading text-xs font-bold tracking-tight ring-1 ring-border group-hover:bg-accent group-hover:text-accent-foreground group-hover:ring-accent transition-colors">{{ l.label }}</span>
          <span class="mono text-xs font-semibold leading-none">{{ l.name }}</span>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span class="inline-flex items-center gap-1.5"><span class="h-1.5 w-1.5 rounded-full bg-accent" /> OAuth · Webhooks · CLI tokens</span>
        <span class="hidden sm:inline">·</span>
        <span>Self-hosted adapter available</span>
        <a href="#docs" class="ml-auto mono font-semibold text-accent hover:underline md:hidden">Browse integrations →</a>
      </div>
    </div>
  </section>
</template>
