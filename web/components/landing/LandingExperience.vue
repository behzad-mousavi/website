<script setup lang="ts">
type Experience = {
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
}

const experiences: Experience[] = [
  {
    role: 'Backend Software Engineer',
    company: 'Boomerang',
    location: 'Tehran, Iran',
    period: 'May 2025 – Present',
    bullets: [
      'Built Go services with MySQL, Redis, Elasticsearch, ClickHouse deployed via Docker.',
      'Replaced slow SQL LIKE queries with Elasticsearch (match-phrase/fuzzy), added Redis caching—improved search accuracy and OCR result quality.',
      'Developed backend for client promotions: 30M printable codes, JWT-based SMS login, monthly lottery (~100 RPM). Optimized MySQL with unique/composite indexes.',
      'Set up observability stack (Prometheus, Grafana, OpenTelemetry, Jaeger) and configured ClickHouse data warehouse.',
      'Built survey/CRM platform with multiple question types; connected CH-UI to AI via LiteLLM for analyst work.',
      'Refactored services to clean/hexagonal architecture; built Telegram proxy service for push notifications via Firebase SDK.',
      'Found and fixed race condition between cron job and session-result API using per-row locking and longer timeouts.',
    ],
  },
  {
    role: 'Backend Software Engineer',
    company: 'Snapp (Driver Engagement & Retention)',
    location: 'Tehran, Iran',
    period: 'Jun 2022 – May 2025',
    bullets: [
      'Driver Incentive Program: Go services with PostgreSQL, Redis, NATS on Kubernetes. Cash rewards for ride/fare targets with recovery of missed events.',
      'Persistent Redis cluster with cache-aside pattern for low-latency reward API; optimized MySQL queries for progress data serving.',
      'Driver Rating System: Consumed passenger ratings from NATS. Implemented badge rules based on last 100 ratings, reduced response time 70ms→30ms and DB load 12.5→5 QPS via Redis caching.',
      'Driver Performance Report: Daily reports aggregated nightly via cron job—covers completed/cancelled rides, income, rewards.',
    ],
  },
  {
    role: 'Senior Software QA Engineer',
    company: 'Snapp',
    location: 'Tehran, Iran',
    period: 'Mar 2021 – Jun 2022',
    bullets: [
      'Led manual feature/regression testing for driver apps; planned test cycles and mentored junior QA engineers.',
      'Wrote Python API tests to accelerate backend testing workflows.',
      'Helped redesign QA organization—added engineering manager role, split teams under EMs reporting to QA director.',
    ],
  },
  {
    role: 'Software QA Engineer',
    company: 'Snapp',
    location: 'Tehran, Iran',
    period: 'Jul 2019 – Mar 2021',
    bullets: [
      'Performed manual feature and regression testing for driver applications.',
      'Designed test cases covering main workflows and edge cases.',
    ],
  },
  {
    role: 'Software QA Engineer & Business Analyst',
    company: 'Golsoft (Insurance Software)',
    location: 'Tehran, Iran',
    period: 'Jan 2017 – Jun 2019',
    bullets: [
      'Localized NTT Data insurance platform: translation, client-specific rules/calculations, on-prem deployment.',
      'Manually tested premium/claim business logic; stepped in as lead BA when team lead departed.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="mx-auto max-w-content px-6 py-14 md:py-16">
    <div class="mb-8">
      <p class="mono text-xs font-semibold tracking-widest text-accent">EXPERIENCE</p>
      <h2 class="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">Where I've worked</h2>
      <p class="mt-2 max-w-[52ch] text-sm leading-6 text-muted-foreground">Backend engineer building systems at scale with Go, Rust, and distributed technologies.</p>
    </div>

    <div class="relative">
      <div class="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" aria-hidden="true" />

      <div class="space-y-6">
        <div
          v-for="(exp, idx) in experiences"
          :key="idx"
          class="relative rounded-md border border-border bg-card p-5 md:pl-8 md:ml-4"
        >
          <span class="absolute left-[-20px] top-6 hidden h-3 w-3 rounded-full border-2 border-accent bg-background md:block" aria-hidden="true" />
          <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 class="font-heading text-[15px] font-semibold tracking-tight">{{ exp.role }}</h3>
              <p class="mt-0.5 text-sm text-muted-foreground">
                <span class="font-medium text-foreground">{{ exp.company }}</span>
                <span class="mx-1.5 text-border-strong">·</span>
                {{ exp.location }}
              </p>
            </div>
            <span class="mono inline-flex shrink-0 rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">{{ exp.period }}</span>
          </div>
          <ul class="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-6 text-muted-foreground marker:text-accent">
            <li v-for="(b, j) in exp.bullets" :key="j">{{ b }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
