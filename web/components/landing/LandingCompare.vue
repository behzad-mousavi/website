<script setup lang="ts">
type Row = { feature: string; starter: boolean | string; pro: boolean | string; team: boolean | string }
const rows: Row[] = [
  { feature: 'Projects', starter: '3', pro: 'Unlimited', team: 'Unlimited' },
  { feature: 'Deployments / month', starter: '100', pro: '5,000', team: 'Unlimited' },
  { feature: 'Custom domains', starter: false, pro: true, team: true },
  { feature: 'Preview URLs', starter: true, pro: true, team: true },
  { feature: 'Rollback & promotions', starter: false, pro: true, team: true },
  { feature: 'Log retention', starter: '24h', pro: '14 days', team: '90 days' },
  { feature: 'Team members', starter: '1', pro: '5', team: 'Unlimited' },
  { feature: 'SSO / SAML', starter: false, pro: false, team: true },
  { feature: 'SLO & alerts', starter: false, pro: true, team: true },
]
</script>

<template>
  <section id="compare" class="mx-auto max-w-content px-6 py-14 md:py-16">
    <div class="mb-8">
      <p class="mono text-xs font-semibold tracking-widest text-accent">COMPARISON</p>
      <h2 class="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">Choose your surface</h2>
      <p class="mt-2 max-w-[60ch] text-sm leading-6 text-muted-foreground">Same runtime, different limits. Start free — upgrade only when your traffic does.</p>
    </div>

    <div class="overflow-hidden rounded-md border border-border bg-card">
      <div class="overflow-x-auto">
        <table class="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr class="border-b border-border bg-muted/60">
              <th scope="col" class="px-5 py-4 font-heading text-xs font-semibold tracking-widest text-muted-foreground">FEATURE</th>
              <th scope="col" class="px-5 py-4 mono text-xs font-semibold">Starter</th>
              <th scope="col" class="px-5 py-4 mono text-xs font-semibold">
                <span class="inline-flex items-center gap-2">Pro <span class="rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold tracking-widest text-accent-foreground">POPULAR</span></span>
              </th>
              <th scope="col" class="px-5 py-4 mono text-xs font-semibold">Team</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border">
            <tr v-for="r in rows" :key="r.feature" class="hover:bg-muted/40 transition-colors">
              <th scope="row" class="px-5 py-3.5 text-sm font-medium">{{ r.feature }}</th>
              <td class="px-5 py-3.5">
                <span v-if="typeof r.starter === 'boolean'" :class="r.starter ? 'text-accent' : 'text-muted-foreground'" aria-hidden="true">{{ r.starter ? '✓' : '—' }}</span>
                <span v-else class="mono text-sm">{{ r.starter }}</span>
                <span class="sr-only">{{ typeof r.starter === 'boolean' ? (r.starter ? 'Yes' : 'No') : r.starter }}</span>
              </td>
              <td class="px-5 py-3.5">
                <span v-if="typeof r.pro === 'boolean'" :class="r.pro ? 'text-accent' : 'text-muted-foreground'" aria-hidden="true">{{ r.pro ? '✓' : '—' }}</span>
                <span v-else class="mono text-sm font-medium">{{ r.pro }}</span>
                <span class="sr-only">{{ typeof r.pro === 'boolean' ? (r.pro ? 'Yes' : 'No') : r.pro }}</span>
              </td>
              <td class="px-5 py-3.5">
                <span v-if="typeof r.team === 'boolean'" :class="r.team ? 'text-accent' : 'text-muted-foreground'" aria-hidden="true">{{ r.team ? '✓' : '—' }}</span>
                <span v-else class="mono text-sm">{{ r.team }}</span>
                <span class="sr-only">{{ typeof r.team === 'boolean' ? (r.team ? 'Yes' : 'No') : r.team }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/40 px-5 py-4">
        <p class="text-xs text-muted-foreground">All plans include CLI, SDKs, and HTTP API. Need enterprise limits? <a href="#docs" class="font-semibold text-accent hover:underline">Talk to us</a>.</p>
        <a href="#pricing" class="mono text-xs font-semibold text-accent hover:underline">See pricing →</a>
      </div>
    </div>
  </section>
</template>
