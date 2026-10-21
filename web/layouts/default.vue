<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <LandingNavbar />
    <main>
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
