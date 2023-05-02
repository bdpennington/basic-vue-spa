import HttpClient from '@/services/common/http';
import { type ActorResponse } from '@/types/actors';

export default class ActorsService {
  private http: HttpClient = HttpClient.getInstance();

  // Endpoint prefix definitions.
  private get actorsPrefix() {
    return 'actors';
  }

  public getActors(): Promise<ActorResponse> {
    return this.http.get(`${this.actorsPrefix}`);
  }
}
