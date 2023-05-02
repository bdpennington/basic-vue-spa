import { Movie } from '@/types/movies';
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import MovieServiceModule from '@/services/movies';

const MovieService = new MovieServiceModule();

export const useMovieStore = defineStore('movies', () => {
  const movies = reactive<Movie[]>([]);

  const getMovies = async () => {
    try {
      const _movies = await MovieService.getMovies();
      Object.assign(movies, _movies);
    } catch (_err) {
      console.log(_err);
    }
  }

  return { movies, getMovies };
});
