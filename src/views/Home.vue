<script setup lang="ts">
import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';
import ValidationServiceModule from '@/services/validation';
import { ensureAndFetchData } from '@/composables/useLoadData';
import {
  setFirstActor,
  setSecondActor,
  awfulActors,
  sharedActors,
  sharedActorObject,
} from '@/composables/useActorFinder';

import { computed, reactive, watch, ref, onMounted, onUnmounted } from 'vue';
import { type Actor } from '@/types/actors';

const ValidationService = new ValidationServiceModule();

const movieStore = useMovieStore();
const actorStore = useActorStore();

const actor1 = ref<string>('');
const actor2 = ref<string>('');

const actorOptions = computed(() => {
  return actorStore.actors.map((actor) => {
    return {
      value: actor.actorId.toString(),
      label: actor.name,
    };
  });
});

const presetAwful = () => {
  setFirstActor(Number(awfulActors.value?.keanu ?? NaN));
  setSecondActor(Number(awfulActors.value?.cage ?? NaN));
  actor1.value = awfulActors.value?.keanu.toString() ?? '';
  actor2.value = awfulActors.value?.cage.toString() ?? '';
};

onMounted(() => {
  ensureAndFetchData();
});
onUnmounted(() => undefined);
</script>

<template>
  <h1 id="heading-1">
    Find Shared Co-Stars
  </h1>
  <p>
    Select two separate stars, and find out which co-starts they have both
    worked with.
  </p>
  <hr>
  <section class="search">
    <form
      class="search-form"
      @submit.prevent="() => undefined"
    >
      <select
        id="actor1"
        v-model="actor1"
        class="form-control"
        name="actor1"
      >
        <option
          value=""
          disabled
        >
          Select Actor 1
        </option>
        <option
          v-for="option in actorOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <select
        id="actor2"
        v-model="actor2"
        class="form-control"
        name="actor2"
      >
        <option
          value=""
          disabled
        >
          Select Actor 2
        </option>
        <option
          v-for="option in actorOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <p>
        Or
        <button @click="presetAwful">
          Select the two worst actors automatically
        </button>
      </p>
    </form>
  </section>

  <section class="results">
    <h2>Results</h2>
    <button @click="ValidationService.validateResult(sharedActors)">
      Validate
    </button>
    <ul>
      <li
        v-for="actorId in sharedActors"
        :key="actorId"
      >
        {{ actorStore.actorsById[actorId] }}
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
hr {
  background-color: var(--divider);
  margin: 12px 0;
}

.search {
  .search-form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-control {
      width: 100%;
      max-width: 400px;
      margin: 12px 0;
    }
  }
}
</style>
