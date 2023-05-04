import HttpClient from '@/services/common/http';
import { type ValidationResponse } from '@/types/validation';

export default class ValidationService {
  private http: HttpClient = HttpClient.getInstance();

  // Endpoint prefix definitions.
  private get validationPrefix() {
    return 'validation';
  }

  public validateResult(data: number[]): Promise<ValidationResponse> {
    return this.http.post(`${this.validationPrefix}`, data);
  }
}
