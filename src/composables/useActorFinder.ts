import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';
import { computed, ref } from 'vue';
import { type Actor, type ActorMovieData } from '@/types/actors';

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

const awesomeActors = computed(() => {
  if (!actorStore.actors.length) return;

  const dafoe = actorStore.actors.find(
    ({ name }) => name === 'Willem Dafoe'
  ) as Actor;
  const goodman = actorStore.actors.find(
    ({ name }) => name === 'John Goodman'
  ) as Actor;
  return {
    goodman: goodman.actorId,
    dafoe: dafoe.actorId,
  };
});

const actorsWhoStarredWithFirstActor = computed(() => {
  const includedMovies = movieStore.movies
    .filter(({ actors }) => actors.includes(firstSelectedActorId.value))
    .flatMap(({ actors }) => actors);
  return Array.from(new Set(includedMovies));
});

const actorsWhoStarredWithSecondActor = computed(() => {
  const includedMovies = movieStore.movies
    .filter(({ actors }) => actors.includes(secondSelectedActorId.value))
    .flatMap(({ actors }) => actors);
  return Array.from(new Set(includedMovies));
});

const sharedActors = computed(() => {
  return actorsWhoStarredWithFirstActor.value.filter((actorId) =>
    actorsWhoStarredWithSecondActor.value.includes(actorId)
  );
});

function getMoviesWithActorAndSharedActors(actorId: Actor['actorId']) {
  return sharedActors.value.reduce((acc, _actorId) => {
    const movieList = movieStore.movies
      .filter(({ actors }) => {
        return actors.includes(_actorId) && actors.includes(actorId);
      })
      .map(({ movieId }) => movieId);

    acc[actorStore.actorsById[_actorId]] = movieList.map(
      (movieId) => movieStore.moviesById[movieId]
    );
    return acc;
  }, {} as ActorMovieData);
}

export {
  setFirstActor,
  setSecondActor,
  awfulActors,
  awesomeActors,
  sharedActors,
  getMoviesWithActorAndSharedActors,
};
