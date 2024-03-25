import axios from 'api/helpers/axios';
import { Item} from 'types/Item';
import { Character } from 'types/Character';
import { Comics } from 'types/Comics';
import { ComicsResponse } from 'types/ComicsResponse';

export const getTotalComics = async (): Promise<number> => {
  const response = await axios.get<ComicsResponse>(
    '/comics?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a'
  );
  return response.data.data.total;
};

export const getComics = async (
  offset: number = 0,
  limit: number = 12
): Promise<Item[]> => {
  const response = await axios.get<ComicsResponse>(
    '/comics?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a',
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
    `/comics/${id}?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`,
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

export const getComicsCharacters = async (id: number): Promise<Item[]> => {
  const response = await axios.get(
    `/comics/${id}/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`,
    {
      params: { id }
    }
  );
  return response.data.data.results.map((charcter: Character) => ({
    id: charcter.id,
    imageUrl: `${charcter.thumbnail.path}.${charcter.thumbnail.extension}`,
    name: charcter.name,
    description: charcter.description
  }));
};
