import axios from 'api/helpers/axios';
import {Item } from 'types/Item';
import { Character } from '../types/Character';
import { CharactersResponse } from '../types/CharactersResponse';

export const getCharacters = async (
  offset: number = 0,
  limit: number = 12,
): Promise<Item[]> => {
  const response = await axios.get<CharactersResponse>('/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a', {
    params: { offset, limit }
  });
  return response.data.data.results.map((character: Character) => ({
    id: character.id,
    imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    name: character.name,
    description: character.description,
  }));
};
