<script setup lang="ts">
const faqs = [
  { q: 'What does Forge CLI actually do?', a: 'Forge scaffolds full-stack projects, deploys them, and gives you log/trace observability — all from your terminal. Think create-next-app meets Vercel deploy meets tail -f.' },
  { q: 'Do I need to use Forge hosting?', a: 'No. Forge deploys to your own infra or any cloud. The hosting adapter is pluggable — bring your own target.' },
  { q: 'Is it free?', a: 'Core CLI is MIT licensed and free forever. Team features and hosted observability have paid tiers — see pricing below.' },
  { q: 'How do I get started?', a: 'Run npm i -g @forge/cli, then forge init. You will have a running project in under a minute.' },
]
const open = ref<number | null>(0)
</script>

<template>
  <section id="faq" class="mx-auto max-w-content px-6 py-14 md:py-16">
    <div class="mb-6">
      <p class="mono text-xs font-semibold tracking-widest text-accent">FAQ</p>
      <h2 class="mt-2 font-heading text-2xl font-bold tracking-tight">Quick answers</h2>
      <p class="mt-2 text-sm text-muted-foreground">Full docs at <a href="https://forge.run/docs" target="_blank" rel="noopener" class="font-semibold text-accent hover:underline">forge.run/docs</a></p>
    </div>
    <div class="overflow-hidden rounded-md border border-border bg-card">
      <div v-for="(f, i) in faqs" :key="f.q" class="border-b border-border last:border-0">
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-muted/50 transition-colors cursor-pointer"
          :aria-expanded="open === i"
          @click="open = open === i ? null : i"
        >
          <span class="mono text-sm font-semibold">{{ f.q }}</span>
          <svg class="h-4 w-4 shrink-0 text-muted-foreground transition-transform" :class="{ 'rotate-180': open === i }" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div v-show="open === i" class="px-5 pb-4 text-sm leading-6 text-muted-foreground">{{ f.a }}</div>
      </div>
    </div>
  </section>
</template>
