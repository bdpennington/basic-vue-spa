import { describe, it, expect, vi } from 'vitest';
import { ensureAndFetchData } from '@/composables/useLoadData';
import { useMovieStore } from '@/store/movies';
import { useActorStore } from '@/store/actors';

vi.mock('@/services/movies');
vi.mock('@/services/actors');

describe('useLoadData composable', () => {
  it('should fetch movies and actors', async () => {
    const movieStore = useMovieStore();
    const actorStore = useActorStore();
    expect(movieStore.movies.length).toBe(0);
    expect(actorStore.actors.length).toBe(0);
    await ensureAndFetchData();
    expect(movieStore.movies.length).toBe(10);
    expect(actorStore.actors.length).toBe(10);
  });
});
