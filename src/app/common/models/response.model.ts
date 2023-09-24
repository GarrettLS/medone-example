/**
 * Common response object from medoneinterviewapi
 */
export interface IResponse<T> {
  result: T;
  messages: string[];
  errors: string[];
}