<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue';
</script>

<template>
  <SiteHeader />

  <main id="main">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
#main {
  margin: 36px 24px;
}
</style>
