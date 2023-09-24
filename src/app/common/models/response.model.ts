export interface IResponse<T> {
  result: T;
  messages: string[];
  errors: string[];
}