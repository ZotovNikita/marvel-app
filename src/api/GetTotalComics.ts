import axios from 'api/helpers/axios';
import { ComicsResponse } from '../types/ComicsResponse';

export const getTotalComics = async (): Promise<number> => {
  const response = await axios.get<ComicsResponse>(
    '/comics?ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a'
  );
  return response.data.data.total;
};
