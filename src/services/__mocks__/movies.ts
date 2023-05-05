import { type MovieResponse } from '@/types/movies';

const data = [
  {
    movieId: 4192148,
    title: 'Highly Functional',
    actors: [3188187, 3306943, 132257, 47265],
  },
  {
    movieId: 365478,
    title: 'Man with the Screaming Brain',
    actors: [331341, 132257, 126364, 1646],
  },
  {
    movieId: 261289,
    title: 'Serving Sara',
    actors: [665114, 132257, 167, 1612],
  },
  {
    movieId: 238463,
    title: 'Timequest',
    actors: [335691, 132257, 70691, 805789],
  },
  {
    movieId: 179861,
    title: 'Icebreaker',
    actors: [5078, 132257, 877888, 276],
  },
  {
    movieId: 120042,
    title: 'Running Time',
    actors: [132257, 731230, 1017853, 56342],
  },
  {
    movieId: 102357,
    title: 'Lunatics: A Love Story',
    actors: [13520, 132257, 286033, 1646],
  },
  {
    movieId: 100152,
    title: 'Mindwarp',
    actors: [19580, 780133, 132257, 448731],
  },
  {
    movieId: 100107,
    title: 'Maniac Cop 2',
    actors: [1108, 160004, 132257, 503627],
  },
  {
    movieId: 85602,
    title: 'Going Back',
    actors: [945591, 539985, 397794, 132257],
  },
];

export default class MoviesService {
  public getMovies(): Promise<MovieResponse> {
    return new Promise((res) => res(data));
  }
}
