<script setup lang="ts">
const features = [
  { title: 'Backend Architecture', desc: 'Designing scalable services, APIs, and distributed systems — from database modeling to deployment.', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
  { title: 'Go & Python', desc: 'Primary stacks for building performant, type-safe applications across backend and frontend.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { title: 'System Design', desc: 'From monolith to microservices — choosing the right architecture for the problem at hand.', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { title: 'Clean Code', desc: 'Maintainable, well-tested codebases that teammates enjoy working with and extending.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Team Collaboration', desc: 'Mentoring, code reviews, and cross-functional work to ship together — not just solo.', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { title: 'Performance First', desc: 'Optimizing for speed at every layer — database queries, API latency, and frontend rendering.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
]
</script>

<template>
  <section id="features" class="mx-auto max-w-content px-6 py-14 md:py-16">
    <div class="mb-8">
      <p class="mono text-xs font-semibold tracking-widest text-accent">SKILLS</p>
      <h2 class="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">What I bring to the table</h2>
      <p class="mt-2 max-w-[52ch] text-sm leading-6 text-muted-foreground">Core strengths honed over years of building and shipping production software.</p>
    </div>
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="f in features" :key="f.title" class="card card-hover group">
        <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-accent/12 text-accent ring-1 ring-accent/15 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path :d="f.icon" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <h3 class="font-heading text-[15px] font-semibold tracking-tight">{{ f.title }}</h3>
        <p class="mt-2 text-sm leading-6 text-muted-foreground">{{ f.desc }}</p>
      </div>
    </div>
  </section>
</template>
