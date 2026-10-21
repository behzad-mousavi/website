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
    company: 'Boomerang App',
    location: 'Tehran, Iran',
    period: 'Jun 2025 – Present',
    bullets: [
      'Refactored legacy backend services including User Authentication and Central Notification services observing clean architecture standards.',
      'Developed a proxy service to reverse-proxy Telegram alerting notifications and adapt local push notification requests with Firebase SDK.',
      'Improved product search by replacing simple SQL LIKE queries with ElasticSearch queries for a more engaging search experience.',
      'Enhanced observability by deploying OpenTelemetry with Jaeger UI and exporting insightful spans across services.',
      'Developed a sophisticated CRM panel for a private client with an independent auth system (ACL) and voucher management to award proportionate vouchers to active clients.',
      'Designed transactional business processes for CRM and voucher systems, ensuring atomic updates and consistent state across related entities.',
      'Built a daily sync job aggregating ClickHouse with the main operational database to form the company data warehouse.',
    ],
  },
  {
    role: 'Backend Software Engineer',
    company: 'Snapp',
    location: 'Tehran, Iran',
    period: 'Jun 2022 – May 2025',
    bullets: [
      'Developed and maintained critical backend systems including Drivers Incentive Program, Loyalty Program, Scoring & Badging System, and Performance Report Generator supporting over 5M daily rides.',
      'Built services with a test-driven approach, ensuring high unit test coverage using Go testing and Testify.',
      'Built and maintained Helm charts for application deployment; synchronized environments using ArgoCD.',
      'Integrated time-series data storage with TimescaleDB for efficient performance tracking.',
      'Visualized key performance metrics using Grafana and PromQL; integrated tracing with Jaeger and OpenTelemetry.',
      'Designed scalable Redis caching layers handling over 20K RPM with < 50ms latency at p95.',
      'Led load testing using K6 Operator to ensure resiliency under production traffic patterns.',
    ],
  },
  {
    role: 'Senior Software QA Engineer',
    company: 'Snapp',
    location: 'Tehran, Iran',
    period: 'Mar 2021 – Jun 2022',
    bullets: [
      'Conducted manual feature and regression testing plans for driver applications.',
      'Designed test strategies, reviewed QA documentation, and mentored junior QA engineers.',
      'Developed Python scripts to automate API and backend testing workflows.',
      'Built and executed load testing scenarios using K6.',
      'Collaborated with cross-functional teams to ensure release quality and catch defects early.',
    ],
  },
  {
    role: 'Software QA Engineer',
    company: 'Snapp',
    location: 'Tehran, Iran',
    period: 'Jul 2019 – Mar 2021',
    bullets: [
      'Performed manual feature and regression testing for driver applications.',
      'Designed sophisticated test case scenarios covering main workflows and tricky edge cases.',
    ],
  },
  {
    role: 'Software QA Engineer',
    company: 'Golsoft',
    location: 'Tehran, Iran',
    period: 'Jan 2017 – Jun 2019',
    bullets: [
      'Worked on a large-scale insurance software implementation with a Japanese consulting firm.',
      'Performed thorough manual testing of business logic, premium calculations, and configuration rules.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="mx-auto max-w-content px-6 py-14 md:py-16">
    <div class="mb-8">
      <p class="mono text-xs font-semibold tracking-widest text-accent">EXPERIENCE</p>
      <h2 class="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">Where I've worked</h2>
      <p class="mt-2 max-w-[52ch] text-sm leading-6 text-muted-foreground">A timeline of roles building and testing systems at scale.</p>
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
