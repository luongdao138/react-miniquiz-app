export interface ListResponse<T> {
  response_code: number;
  results: T[];
}
