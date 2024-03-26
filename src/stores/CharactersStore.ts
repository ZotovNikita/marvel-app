import { observable, action, makeObservable, runInAction } from 'mobx';
import { getTotalCharacters, getCharacters } from '../api/GetCharacters';
import { Item } from '../types/Item';
import { Character } from '../types/Character';

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
        this.characterList = characters.map((character: Character) => ({
          id: character.id,
          imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          name: character.name,
          description: character.description
        }));;
      });
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };
  
}

const charactersStore = new CharactersStore();

export default charactersStore;
