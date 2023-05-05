import { describe, it, expect, vi } from 'vitest';
import { ensureAndFetchData } from '@/composables/useLoadData';
import {
  setFirstActor,
  setSecondActor,
  sharedActors,
  getMoviesWithActorAndSharedActors,
} from '@/composables/useActorFinder';

vi.mock('@/services/movies');
vi.mock('@/services/actors');

await ensureAndFetchData();

describe('useActorFinder composable', () => {
  it('actors with nothing in common should have no results', async () => {
    setFirstActor(124); // Jennifer Connelly
    setSecondActor(63); // Anthony Quinn
    expect(sharedActors.value).toHaveLength(0);
    expect(getMoviesWithActorAndSharedActors(124)).toEqual({}); // checks properties, not reference
  });
});
