<script setup lang="ts">
type Tab = 'shell' | 'typescript' | 'go' | 'curl'
const active = ref<Tab>('shell')
const copied = ref(false)

const tabs: { id: Tab; label: string; file: string }[] = [
  { id: 'shell', label: 'Shell', file: 'forge.sh' },
  { id: 'typescript', label: 'TypeScript', file: 'deploy.ts' },
  { id: 'go', label: 'Go', file: 'main.go' },
  { id: 'curl', label: 'cURL', file: 'request.sh' },
]

const code = {
  shell: `<span style="color:var(--syntax-comment)"># one-time setup</span>
<span style="color:var(--syntax-operator)">$</span> <span style="color:var(--syntax-function)">forge</span> init my-api <span style="color:var(--syntax-string)">--template go</span>
<span style="color:var(--syntax-string)">✓</span> <span style="color:var(--color-foreground)">Scaffolded in 0.84s</span> <span style="color:var(--syntax-comment)">· go 1.22 · chi + postgres</span>
<span style="color:var(--syntax-operator)">$</span> <span style="color:var(--syntax-function)">forge</span> env set <span style="color:var(--syntax-string)">DATABASE_URL</span> <span style="color:var(--syntax-operator)">=</span> <span style="color:var(--syntax-string)">$NEON_URL</span> <span style="color:var(--syntax-string)">--prod</span>
<span style="color:var(--syntax-operator)">$</span> <span style="color:var(--syntax-function)">forge</span> deploy <span style="color:var(--syntax-string)">--prod</span> <span style="color:var(--syntax-comment)"># preview URL + rollback on failure</span>
<span style="color:var(--syntax-string)">✓</span> <span style="color:var(--color-foreground)">https://my-api.forge.run</span>  <span style="color:var(--syntax-number)">412ms</span>  <span style="color:var(--syntax-comment)">trace 8f3a2c</span>`,
  typescript: `<span style="color:var(--syntax-keyword)">import</span> { <span style="color:var(--syntax-type)">Forge</span> } <span style="color:var(--syntax-keyword)">from</span> <span style="color:var(--syntax-string)">'@forge/sdk'</span>

<span style="color:var(--syntax-keyword)">const</span> <span style="color:var(--syntax-function)">forge</span> <span style="color:var(--syntax-operator)">=</span> <span style="color:var(--syntax-keyword)">new</span> <span style="color:var(--syntax-type)">Forge</span>({ <span style="color:var(--syntax-function)">token</span>: process.<span style="color:var(--syntax-function)">env</span>.<span style="color:var(--syntax-string)">FORGE_TOKEN</span> })

<span style="color:var(--syntax-keyword)">await</span> forge.<span style="color:var(--syntax-function)">deploy</span>({
  <span style="color:var(--syntax-function)">env</span>: <span style="color:var(--syntax-string)">'prod'</span>,
  <span style="color:var(--syntax-function)">region</span>: <span style="color:var(--syntax-string)">'eu-west'</span>,
  <span style="color:var(--syntax-function)">strategy</span>: <span style="color:var(--syntax-string)">'rolling'</span>,
})

<span style="color:var(--syntax-keyword)">for await</span> (<span style="color:var(--syntax-keyword)">const</span> line <span style="color:var(--syntax-keyword)">of</span> forge.<span style="color:var(--syntax-function)">logs</span>.<span style="color:var(--syntax-function)">tail</span>({ <span style="color:var(--syntax-function)">service</span>: <span style="color:var(--syntax-string)">'api'</span> })) {
  <span style="color:var(--syntax-function)">console</span>.<span style="color:var(--syntax-function)">log</span>(line) <span style="color:var(--syntax-comment)">// 200 GET /api/health — 11ms</span>
}`,
  go: `<span style="color:var(--syntax-keyword)">package</span> main

<span style="color:var(--syntax-keyword)">import</span> <span style="color:var(--syntax-string)">"github.com/forge/cli/sdk/go"</span>

<span style="color:var(--syntax-keyword)">func</span> <span style="color:var(--syntax-function)">main</span>() {
  <span style="color:var(--syntax-function)">client</span> <span style="color:var(--syntax-operator)">:=</span> forge.<span style="color:var(--syntax-function)">New</span>(os.<span style="color:var(--syntax-function)">Getenv</span>(<span style="color:var(--syntax-string)">"FORGE_TOKEN"</span>))
  <span style="color:var(--syntax-function)">dep</span>, <span style="color:var(--syntax-function)">err</span> <span style="color:var(--syntax-operator)">:=</span> client.<span style="color:var(--syntax-function)">Deploy</span>(ctx, <span style="color:var(--syntax-operator)">&amp;</span>forge.<span style="color:var(--syntax-type)">DeployOpts</span>{
    <span style="color:var(--syntax-function)">Env</span>: <span style="color:var(--syntax-string)">"prod"</span>,
    <span style="color:var(--syntax-function)">Region</span>: <span style="color:var(--syntax-string)">"eu-west"</span>,
  })
  <span style="color:var(--syntax-keyword)">if</span> err <span style="color:var(--syntax-operator)">!=</span> <span style="color:var(--syntax-keyword)">nil</span> { <span style="color:var(--syntax-function)">log</span>.<span style="color:var(--syntax-function)">Fatal</span>(err) }
  <span style="color:var(--syntax-function)">fmt</span>.<span style="color:var(--syntax-function)">Println</span>(dep.<span style="color:var(--syntax-function)">URL</span>) <span style="color:var(--syntax-comment)">// https://my-api.forge.run</span>
}`,
  curl: `<span style="color:var(--syntax-comment)"># deploy via HTTP — same as CLI</span>
<span style="color:var(--syntax-function)">curl</span> <span style="color:var(--syntax-string)">-X POST https://api.forge.run/v1/deploys</span> \\
  <span style="color:var(--syntax-string)">-H</span> <span style="color:var(--syntax-string)">"Authorization: Bearer $FORGE_TOKEN"</span> \\
  <span style="color:var(--syntax-string)">-H</span> <span style="color:var(--syntax-string)">"Content-Type: application/json"</span> \\
  <span style="color:var(--syntax-string)">-d</span> <span style="color:var(--syntax-string)">'{"env":"prod","region":"eu-west"}'</span>

<span style="color:var(--syntax-comment)"># stream logs</span>
<span style="color:var(--syntax-function)">curl</span> <span style="color:var(--syntax-string)">-N https://api.forge.run/v1/logs?service=api\\&tail=true</span> \\
  <span style="color:var(--syntax-string)">-H</span> <span style="color:var(--syntax-string)">"Authorization: Bearer $FORGE_TOKEN"</span>
<span style="color:var(--syntax-comment)"># 200 GET /api/health — 11ms</span>`,
}

function copy() {
  const textMap: Record<Tab, string> = {
    shell: 'forge init my-api --template go\nforge deploy --prod',
    typescript: `import { Forge } from '@forge/sdk'\nconst forge = new Forge({ token: process.env.FORGE_TOKEN })\nawait forge.deploy({ env: 'prod' })`,
    go: 'client := forge.New(os.Getenv("FORGE_TOKEN"))\ndep, err := client.Deploy(ctx, &forge.DeployOpts{Env: "prod"})',
    curl: 'curl -X POST https://api.forge.run/v1/deploys -H "Authorization: Bearer $FORGE_TOKEN"',
  }
  navigator.clipboard.writeText(textMap[active.value])
  copied.value = true
  setTimeout(() => (copied.value = false), 1600)
}
</script>

<template>
  <section id="snippets" class="mx-auto max-w-content px-6 py-14 md:py-16">
    <div class="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="mono text-xs font-semibold tracking-widest text-accent">CODE PREVIEWS</p>
        <h2 class="mt-2 font-heading text-2xl font-bold tracking-tight md:text-3xl">Copy-paste friendly</h2>
        <p class="mt-2 max-w-[52ch] text-sm leading-6 text-muted-foreground">Every CLI command has an SDK and an HTTP equivalent. Pick the surface you live in — behavior stays identical.</p>
      </div>
      <a href="#docs" class="hidden md:inline-flex mono text-sm font-semibold text-accent hover:underline">Open docs →</a>
    </div>

    <div class="code-window shadow-lg">
      <div class="flex flex-wrap items-center gap-2 border-b border-border bg-card px-3 py-2.5">
        <div class="flex items-center gap-1.5">
          <span class="h-3 w-3 rounded-full bg-[#FF5F57] border border-black/10" aria-hidden="true" />
          <span class="h-3 w-3 rounded-full bg-[#FFBD2E] border border-black/10" aria-hidden="true" />
          <span class="h-3 w-3 rounded-full bg-[#28CA42] border border-black/10" aria-hidden="true" />
        </div>
        <div class="ml-2 flex items-center gap-1 rounded-sm bg-muted p-1" role="tablist" aria-label="Code language">
          <button
            v-for="t in tabs"
            :key="t.id"
            role="tab"
            :aria-selected="active === t.id"
            :class="active === t.id ? 'bg-card text-foreground shadow-sm border border-border' : 'text-muted-foreground hover:text-foreground'"
            class="rounded-sm px-3 py-1 mono text-xs font-semibold transition-colors cursor-pointer"
            @click="active = t.id"
          >{{ t.label }}</button>
        </div>
        <span class="ml-2 hidden sm:inline mono text-xs text-muted-foreground">{{ tabs.find(t=>t.id===active)?.file }}</span>
        <button type="button" class="ml-auto inline-flex items-center gap-1.5 rounded-sm border border-border bg-card px-3 py-1.5 mono text-xs font-semibold hover:border-border-strong transition-colors cursor-pointer" @click="copy">
          <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          {{ copied ? 'Copied' : 'Copy' }}
        </button>
      </div>

      <div class="grid lg:grid-cols-[1.15fr_0.85fr]">
        <pre class="overflow-x-auto p-5 mono text-[13px] leading-6" style="background: var(--syntax-bg)"><code v-html="code[active]" /></pre>
        <div class="border-t border-border bg-card p-5 lg:border-l lg:border-t-0">
          <p class="mono text-xs font-semibold tracking-widest text-muted-foreground">OUTPUT</p>
          <div class="mt-3 space-y-2 mono text-xs leading-5">
            <div class="flex gap-2"><span class="text-accent">✓</span><span>Build cached — 0.2s</span><span class="ml-auto text-muted-foreground">p95 18ms</span></div>
            <div class="flex gap-2"><span class="text-accent">✓</span><span>Health check passed</span><span class="ml-auto text-muted-foreground">200 · 11ms</span></div>
            <div class="rounded-sm border border-border bg-muted px-3 py-2.5">
              <div class="text-muted-foreground">Deployed URL</div>
              <a href="#" class="font-semibold text-accent hover:underline break-all">https://my-api.forge.run</a>
              <div class="mt-1 text-muted-foreground">Rollback: <span class="text-foreground">forge rollback --to prev</span></div>
            </div>
            <div class="flex items-center gap-2 pt-1 text-muted-foreground">
              <span class="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              Streaming logs — press <kbd class="rounded border border-border bg-muted px-1 py-0.5 text-[10px]">q</kbd> to exit
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-6 grid gap-3 sm:grid-cols-3">
      <div class="rounded-md border border-border bg-card px-4 py-3">
        <div class="mono text-xs font-semibold">Typed SDKs</div>
        <div class="mt-1 text-sm text-muted-foreground">TS, Go, Python — same types as the API.</div>
      </div>
      <div class="rounded-md border border-border bg-card px-4 py-3">
        <div class="mono text-xs font-semibold">Rate-limit aware</div>
        <div class="mt-1 text-sm text-muted-foreground">429s with retry-after, no silent drops.</div>
      </div>
      <div class="rounded-md border border-border bg-card px-4 py-3">
        <div class="mono text-xs font-semibold">Versioned</div>
        <div class="mt-1 text-sm text-muted-foreground">Pin <span class="mono text-xs">/v1</span> — breaking changes never surprise.</div>
      </div>
    </div>
  </section>
</template>
