export interface IResponse<T> {
  result: T | string;
  messages: string[];
  errors: string[];
}