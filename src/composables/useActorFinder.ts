import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';
import { ensureAndFetchData } from './useLoadData';
import { computed, reactive, watch, ref } from 'vue';
import { type Actor } from '@/types/actors';

const movieStore = useMovieStore();
const actorStore = useActorStore();

await ensureAndFetchData();

const firstSelectedActorId = ref<Actor['actorId']>(NaN);
const secondSelectedActorId = ref<Actor['actorId']>(NaN);

function setFirstActor(actorId: Actor['actorId']) {
  firstSelectedActorId.value = actorId;
}
function setSecondActor(actorId: Actor['actorId']) {
  secondSelectedActorId.value = actorId;
}


const firstSelectedActor = computed(() => {
  return actorStore.actors.find(({ actorId }) => actorId === firstSelectedActorId.value);
});
const secondSelectedActor = computed(() => {
  return actorStore.actors.find(({ actorId }) => actorId === secondSelectedActorId.value);
});

export { setFirstActor, setSecondActor };
