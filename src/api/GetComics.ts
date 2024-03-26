import axios from 'api/helpers/axios';
import envs from 'config/environments';
import { Item } from 'types/Item';
import { Character } from 'types/Character';
import { Comics } from 'types/Comics';
import { ComicsResponse } from 'types/ComicsResponse';

export const getTotalComics = async (): Promise<number> => {
  const response = await axios.get<ComicsResponse>(
    `/comics?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`
  );
  return response.data.data.total;
};

export const getComics = async (
  offset: number = 0,
  limit: number = 12
): Promise<Item[]> => {
  const response = await axios.get<ComicsResponse>(
    `/comics?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`,
    {
      params: { offset, limit }
    }
  );
  return response.data.data.results.map((comics: Comics) => ({
    id: comics.id,
    imageUrl: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
    name: comics.title,
    description: comics.description
  }));
};

export const getComicsByID = async (id: number): Promise<Item[]> => {
  const response = await axios.get(
    `/comics/${id}?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`,
    {
      params: { id }
    }
  );
  return response.data.data.results.map((comics: Comics) => ({
    id: comics.id,
    imageUrl: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
    name: comics.title,
    description: comics.description
  }));
};

export const getComicsCharacters = async (
  comicId: number
): Promise<{ [id: number]: string }> => {
  const response = await axios.get(
    `/comics/${comicId}/characters?ts=${envs.ts}&apikey=${envs.apiKey}&hash=${envs.hash}`,
    {
      params: { comicId }
    }
  );
  return response.data.data.results
    .map((character: Character) => ({
      id: character.id,
      value: character.name
    }))
    .reduce(
      (acc: { [id: number]: string }, curr: { id: number; value: string }) => {
        acc[curr.id] = curr.value;
        return acc;
      },
      {}
    );
};
