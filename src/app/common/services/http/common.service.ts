import { environment } from 'src/environments/environment';

export abstract class CommonService {
  readonly uri: string;

  constructor(target: string) {
    this.uri = `${environment.API_ENDPOINT}/api/v1/${target}`;
  }
}