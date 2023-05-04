import { Movie } from '@/types/movies';
import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import MovieServiceModule from '@/services/movies';

const MovieService = new MovieServiceModule();

export const useMovieStore = defineStore('movies', () => {
  const movies = reactive<Movie[]>([]);

  const moviesById = computed(() => {
    return Object.fromEntries(
      movies.map(({ movieId, title }) => [movieId, title])
    );
  });

  const getMovies = async () => {
    try {
      const _movies = await MovieService.getMovies();
      Object.assign(movies, _movies);
    } catch (_err) {
      console.log(_err);
    }
  };

  return { movies, getMovies, moviesById };
});
