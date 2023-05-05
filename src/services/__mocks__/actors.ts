import { type ActorResponse } from '@/types/actors';

const data = [
  {
    "actorId": 124,
    "name": "Jennifer Connelly"
  },
  {
    "actorId": 63,
    "name": "Anthony Quinn"
  },
  {
    "actorId": 99,
    "name": "Patricia Arquette"
  },
  {
    "actorId": 422,
    "name": "John Goodman"
  },
  {
    "actorId": 160,
    "name": "Ethan Hawke"
  },
  {
    "actorId": 324,
    "name": "Barbara Carrera"
  },
  {
    "actorId": 168,
    "name": "Samuel L. Jackson"
  },
  {
    "actorId": 237,
    "name": "John Travolta"
  },
  {
    "actorId": 352,
    "name": "Vincent D'Onofrio"
  },
  {
    "actorId": 95,
    "name": "Woody Allen"
  }
]

export default class ActorsService {
  public getActors(): Promise<ActorResponse> {
    return new Promise((res) => res(data));
  }
}
