<script setup lang="ts">
import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';
import ValidationServiceModule from '@/services/validation';
import { computed, reactive, watch } from 'vue';

const ValidationService = new ValidationServiceModule();

const movieStore = useMovieStore();
const actorStore = useActorStore();
</script>

<template>
  <div />
</template>

<style lang="scss" scoped></style>
