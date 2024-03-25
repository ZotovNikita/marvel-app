import { observable, action, makeObservable, runInAction } from 'mobx';
import { getCharacterByID, getCharacterComics } from '../api/GetCharacters';
import { Item } from '../types/Item';

class CharacterDetailsStore {
  @observable
  characterDetails: Item[] = [];

  @observable
  characterComics: { [id: number]: string } = {};

  constructor() {
    makeObservable(this);
  }

  @action
  fetchCharacterDetails = async (id: number): Promise<void> => {
    try {
      const details = await getCharacterByID(id);
      runInAction(() => {
        this.characterDetails = details;
      });
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  @action
  fetchCharacterComics = async (id: number): Promise<void> => {
    try {
      const comics = await getCharacterComics(id);
      runInAction(() => {
        this.characterComics = comics;
      });
    } catch (error) {
      console.error('Error fetching comics:', error);
    }
  };
}

const characterDetailsStore = new CharacterDetailsStore();

export default characterDetailsStore;
