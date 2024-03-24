import axios from 'api/helpers/axios';
import { CharactersResponse } from '../types/CharactersResponse';

export const getTotalCharacters = async (): Promise<number> => {
  const response = await axios.get<CharactersResponse>(
    '/characters?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a'
  );
  return response.data.data.total;
};
