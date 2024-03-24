import { Character } from './Character';

export interface CharactersResponse {
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  };
}
