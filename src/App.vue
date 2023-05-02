<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';

const movieStore = useMovieStore();
movieStore.getMovies();
const actorStore = useActorStore();
actorStore.getActors();
</script>
