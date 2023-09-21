export abstract class CommonService {
  private _target = '';
  readonly uri = `https://medoneinterviewapi.azurewebsites.net/api/v1/${this._target}`;

  constructor(target: string) {
    this._target = target;
  }
}