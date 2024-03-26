import axios from 'api/helpers/axios';
import envs from 'config/environments';
import { Item } from 'types/Item';
import { Character } from '../types/Character';
import { Comics } from '../types/Comics';
import { CharactersResponse } from '../types/CharactersResponse';

export const getTotalCharacters = async (): Promise<number> => {
  const response = await axios.get<CharactersResponse>(
    `/characters?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`
  );
  return response.data.data.total;
};

export const getCharacters = async (
  offset: number = 0,
  limit: number = 12,
  nameStartsWith: string | null = null
): Promise<Character[]> => {
  const response = await axios.get<CharactersResponse>(
    `/characters?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`,
    {
      params: { offset, limit, nameStartsWith }
    }
  );
  return response.data.data.results
};

export const getCharacterByID = async (id: number): Promise<Item[]> => {
  const response = await axios.get(
    `/characters/${id}?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`,
    {
      params: { id }
    }
  );
  return response.data.data.results.map((character: Character) => ({
    id: character.id,
    imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
    name: character.name,
    description: character.description
  }));
};

export const getCharacterComics = async (
  characterId: number
): Promise<{ [id: number]: string }> => {
  const response = await axios.get(
    `/characters/${characterId}/comics?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`,
    {
      params: { characterId }
    }
  );
  return response.data.data.results
    .map((comics: Comics) => ({
      id: comics.id,
      value: comics.title
    }))
    .reduce(
      (acc: { [id: number]: string }, curr: { id: number; value: string }) => {
        acc[curr.id] = curr.value;
        return acc;
      },
      {}
    );
};
