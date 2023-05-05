<script setup lang="ts">
import { useActorStore } from '@/store/actors';
import ValidationServiceModule from '@/services/validation';
import { ensureAndFetchData } from '@/composables/useLoadData';
import {
  setFirstActor,
  setSecondActor,
  awfulActors,
  awesomeActors,
  getMoviesWithActorAndSharedActors,
} from '@/composables/useActorFinder';
import CoStarTable from '@/components/CoStarTable.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';
import IconCheck from '~icons/mdi/check';
import IconInvalid from '~icons/mdi/close';

import {
  computed,
  reactive,
  watch,
  ref,
  onMounted,
  onUnmounted,
  nextTick,
} from 'vue';

const ValidationService = new ValidationServiceModule();

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
  actor1.value = awfulActors.value?.keanu.toString() ?? '';
  actor2.value = awfulActors.value?.cage.toString() ?? '';
};

const presetAwesome = () => {
  actor1.value = awesomeActors.value?.goodman.toString() ?? '';
  actor2.value = awesomeActors.value?.dafoe.toString() ?? '';
};

const isValidateButtonVisible = computed(() => {
  return (
    Number(actor1.value) === awfulActors.value?.keanu &&
    Number(actor2.value) === awfulActors.value?.cage
  );
});

type DataRow = {
  Name: string;
  Actor1Movies: string[];
  Actor2Movies: string[];
};

const tableData = reactive<DataRow[]>([]);

function setTableData() {
  const actor1Set = getMoviesWithActorAndSharedActors(Number(actor1.value));
  const actor2Set = getMoviesWithActorAndSharedActors(Number(actor2.value));

  const result: DataRow[] = [];

  Object.entries(actor1Set).map(([Name, movies]) => {
    result.push({
      Name,
      Actor1Movies: movies,
      Actor2Movies: actor2Set[Name] ?? [],
    });
  });
  return result;
}

watch(
  [actor1, actor2],
  () => {
    if (actor1.value && actor2.value) {
      setFirstActor(Number(actor1.value ?? NaN));
      setSecondActor(Number(actor2.value ?? NaN));
      Object.assign(tableData, setTableData());
    }
  },
  { immediate: true }
);

const isValidated = ref<boolean | undefined>(undefined);

async function validate() {
  presetAwful();
  await nextTick(); // render cycle
  const payload = tableData.map((data) => ({
    Name: data.Name,
    KRMovies: data.Actor1Movies,
    NCMovies: data.Actor2Movies,
  }));

  try {
    await ValidationService.validateResult(payload);
    isValidated.value = true;
  } catch (error) {
    isValidated.value = false;
  }
}

onMounted(() => {
  ensureAndFetchData();
});
onUnmounted(() => undefined);
</script>

<template>
  <h1 id="costar-heading-1">Find Shared Co-Stars</h1>
  <p class="costar-description">
    Select two separate stars, and find out which co-starts they have both
    worked with.
  </p>
  <hr />
  <section class="search" aria-describedby="costar-heading-1">
    <form class="search-form" @submit.prevent="() => undefined">
      <BaseSelect
        class="form-control"
        v-model="actor1"
        :options="actorOptions"
        placeholder="Select Actor 1"
      />

      <BaseSelect
        class="form-control"
        v-model="actor2"
        :options="actorOptions"
        placeholder="Select Actor 2"
      />

      <p>
        <span style="margin-right: 8px">Or</span>
        <BaseButton @click="presetAwful">
          Select awful actors for me
        </BaseButton>
        <br /><br />
        <span style="margin-right: 8px">Or</span>
        <BaseButton @click="presetAwesome">
          Select awesome actors for me
        </BaseButton>
      </p>
    </form>
  </section>

  <section class="results" aria-labelledby="costar-result-heading">
    <h2 id="costar-results-heading">Results</h2>

    <BaseButton
      class="validate-button"
      v-if="isValidateButtonVisible"
      variant="secondary"
      @click="validate"
    >
      <div class="validate-button-content">
        <span>Validate</span>
        <IconInvalid v-if="isValidated === false" class="invalid-icon" />
        <IconCheck v-if="isValidated === true" class="check-icon" />
      </div>
    </BaseButton>

    <CoStarTable
      v-if="tableData.length"
      :actor1="actor1"
      :actor2="actor2"
      :tableData="tableData"
    />
    <div v-else class="no-results">
      <h3>No results found</h3>
      <p>Try changing the actors selected above</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
hr {
  background-color: var(--divider);
  margin: 12px 0;
}

#costar-heading-1 {
  margin-bottom: 12px;
}

.search {
  margin-bottom: 24px;

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

.results {
  padding-bottom: 48px;

  .validate-button {
    margin: 12px 0;

    .validate-button-content {
      display: flex;
      align-items: center;

      .check-icon {
        color: var(--green-dark);
        border: 2px solid var(--green-dark);
        border-radius: var(--radius-round);
      }

      .invalid-icon {
        color: var(--red);
        border: 2px solid var(--red);
        border-radius: var(--radius-round);
      }

      :first-child {
        margin-right: 4px;
      }
    }
  }

  #costar-results-heading {
    margin-bottom: 12px;
  }

  .no-results {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;

    h3 {
      margin-bottom: 12px;
    }
  }
}
</style>
