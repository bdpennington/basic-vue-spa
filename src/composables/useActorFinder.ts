import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';
import { computed, reactive, watch, ref } from 'vue';
import { type Actor } from '@/types/actors';

const movieStore = useMovieStore();
const actorStore = useActorStore();

const firstSelectedActorId = ref<Actor['actorId']>(NaN);
const secondSelectedActorId = ref<Actor['actorId']>(NaN);

function setFirstActor(actorId: Actor['actorId']) {
  firstSelectedActorId.value = actorId;
}
function setSecondActor(actorId: Actor['actorId']) {
  secondSelectedActorId.value = actorId;
}

const awfulActors = computed(() => {
  if (!actorStore.actors.length) return;

  const keanu = actorStore.actors.find(
    ({ name }) => name === 'Keanu Reeves'
  ) as Actor;
  const cage = actorStore.actors.find(
    ({ name }) => name === 'Nicolas Cage'
  ) as Actor;
  return {
    keanu: keanu.actorId,
    cage: cage.actorId,
  };
});

const firstSelectedActor = computed(() => {
  return actorStore.actors.find(
    ({ actorId }) => actorId === firstSelectedActorId.value
  );
});
const secondSelectedActor = computed(() => {
  return actorStore.actors.find(
    ({ actorId }) => actorId === secondSelectedActorId.value
  );
});

const actorsWhoStarredWithFirstActor = computed(() => {
  if (!firstSelectedActor.value) return [];
  const includedMovies = movieStore.movies
    .filter(({ actors }) => actors.includes(firstSelectedActorId.value))
    .flatMap(({ actors }) => actors);
  return Array.from(new Set(includedMovies));
});

const actorsWhoStarredWithSecondActor = computed(() => {
  if (!secondSelectedActor.value) return [];
  const includedMovies = movieStore.movies
    .filter(({ actors }) => actors.includes(secondSelectedActorId.value))
    .flatMap(({ actors }) => actors);
  return Array.from(new Set(includedMovies));
});

const sharedActors = computed(() => {
  return actorsWhoStarredWithFirstActor.value.filter((value) =>
    actorsWhoStarredWithSecondActor.value.includes(value)
  );
});

const sharedActorNames = computed(() => {
  return sharedActors.value.map((actorId) => {
    return actorStore.actorsById[actorId];
  });
});

const sharedActorObject = computed(() => {
  return actorStore.actors.filter(({ actorId }) => sharedActors.value.includes(actorId))
});

export { setFirstActor, setSecondActor, awfulActors, sharedActors, sharedActorObject };
