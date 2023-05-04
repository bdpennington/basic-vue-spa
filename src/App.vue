<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue';
import MobileFooter from '@/components/MobileFooter.vue';
</script>

<template>
  <SiteHeader />

  <main id="main">
    <RouterView />
  </main>

  <MobileFooter />
</template>

<style lang="scss" scoped>
#main {
  margin: 36px 24px;
}
</style>
