<template>
  <section id="pricing" class="mx-auto max-w-[1200px] px-6 py-16">
    <div class="mb-10 text-center">
      <h2 class="font-heading text-3xl font-bold tracking-tight">Simple pricing</h2>
      <p class="mt-3 text-muted-foreground">Start free. Scale when you need to.</p>
    </div>
    <div class="grid gap-6 md:grid-cols-3">
      <div class="card">
        <h3 class="font-heading font-semibold">Starter</h3>
        <p class="mt-2 text-3xl font-bold font-heading">$0<span class="text-sm font-normal text-muted-foreground">/mo</span></p>
        <ul class="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>Unlimited projects</li>
          <li>Community templates</li>
          <li>Local deploys</li>
        </ul>
        <a href="#" class="btn-secondary mt-6 w-full">Get started</a>
      </div>
      <div class="card border-accent/40 ring-1 ring-accent/20">
        <div class="mb-2 inline-flex rounded-sm bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground">Popular</div>
        <h3 class="font-heading font-semibold">Team</h3>
        <p class="mt-2 text-3xl font-bold font-heading">$19<span class="text-sm font-normal text-muted-foreground">/mo</span></p>
        <ul class="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>Everything in Starter</li>
          <li>Team workspaces & secrets</li>
          <li>Hosted logs & traces</li>
        </ul>
        <a href="#" class="btn-primary mt-6 w-full justify-center">Start free trial</a>
      </div>
      <div class="card">
        <h3 class="font-heading font-semibold">Enterprise</h3>
        <p class="mt-2 text-3xl font-bold font-heading">Custom</p>
        <ul class="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>SSO & audit logs</li>
          <li>Dedicated support</li>
          <li>On-prem option</li>
        </ul>
        <a href="#" class="btn-secondary mt-6 w-full">Contact sales</a>
      </div>
    </div>
  </section>
</template>
