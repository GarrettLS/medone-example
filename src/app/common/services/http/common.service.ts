import { environment } from 'src/environments/environment';

/**
 * Abstract class to keep a standard api pattern
 */
export abstract class CommonService {
  readonly uri: string;

  constructor(target: string) {
    this.uri = `${environment.API_ENDPOINT}/api/v1/${target}`;
  }
}