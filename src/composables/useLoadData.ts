import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';

const movieStore = useMovieStore();
const actorStore = useActorStore();

const moviesFetched = !!movieStore.movies.length;
const actorsFetched = !!actorStore.actors.length;

/**
 * Checks stores to see if data exists, and if not, fetches it.
 * Fetches both movies and actors.
 */
async function ensureAndFetchData() {
  const promises: Promise<void>[] = [];
  if (!moviesFetched) {
    promises.push(movieStore.getMovies());
  }
  if (!actorsFetched) {
    promises.push(actorStore.getActors());
  }
  await Promise.all(promises);
}

export { ensureAndFetchData };
