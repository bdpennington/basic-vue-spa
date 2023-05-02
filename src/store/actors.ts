import { Actor } from '@/types/actors';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import ActorServiceModule from '@/services/actors';

const ActorService = new ActorServiceModule();

export const useActorStore = defineStore('actors', () => {
  const actors = reactive<Actor[]>([]);

  const actorsById = computed(() => {
    return Object.fromEntries(actors.map(({ actorId, name }) => [actorId, name]));
  });

  const getActors = async () => {
    try {
      const _actors = await ActorService.getActors();
      Object.assign(actors, _actors);
    } catch (_err) {
      console.log(_err);
    }
  }

  return { actors, getActors, actorsById };
});
