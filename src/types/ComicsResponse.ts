import { Comics } from './Comics';

export interface ComicsResponse {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Comics[];
  };
}
