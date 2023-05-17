import { type Actor } from './actors';
import { type Movie } from './movies';

export type ValidationRequest = Validation[];

export type Validation = {
  Name: Actor['name'];
  KRMovies: Movie['title'][];
  NCMovies: Movie['title'][];
};
