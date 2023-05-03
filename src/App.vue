<script setup lang="ts">
import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';
import ValidationServiceModule from '@/services/validation';
import { computed, reactive, watch } from 'vue';
import SiteHeader from '@/components/SiteHeader.vue';

const ValidationService = new ValidationServiceModule();

const movieStore = useMovieStore();
const actorStore = useActorStore();

</script>

<template>
  <SiteHeader />
  <main id="main">
    <RouterView />
  </main>
</template>

<style scoped></style>
