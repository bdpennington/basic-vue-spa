import HttpClient from '@/services/common/http';
import { type ValidationRequest } from '@/types/validation';

export default class ValidationService {
  private http: HttpClient = HttpClient.getInstance();

  // Endpoint prefix definitions.
  private get validationPrefix() {
    return 'validation';
  }

  public validateResult(data: any): Promise<void> {
    return this.http.post(`${this.validationPrefix}`, data);
  }
}
