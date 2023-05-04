import { type Movie } from './movies';

export type ActorResponse = Actor[];

export type Actor = {
  actorId: number;
  name: string;
};

export type ActorMovieData = {
  [actorName: Actor['name']]: Movie['title'][];
};
