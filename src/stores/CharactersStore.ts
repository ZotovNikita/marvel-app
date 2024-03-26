import { observable, action, makeObservable, runInAction } from 'mobx';
import { getTotalCharacters, getCharacters } from '../api/GetCharacters';
import { Item } from '../types/Item';

class CharactersStore {
  @observable
  characterList: Item[] = [];

  @observable
  totalNumber: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  fetchTotalCharacters = async (): Promise<void> => {
    try {
      const total = await getTotalCharacters();
      runInAction(() => {
        this.totalNumber = total;
      });
    } catch (error) {
      console.error('Error fetching total:', error);
    }
  };

  @action
  fetchCharacters = async (page: number): Promise<void> => {
    try {
      const offset = (page - 1) * 12; 
      const characters = await getCharacters(offset);
      runInAction(() => {
        this.characterList = characters;
      });
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };
  
}

const charactersStore = new CharactersStore();

export default charactersStore;
