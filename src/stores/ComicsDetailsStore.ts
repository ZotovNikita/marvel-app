import { observable, action, makeObservable, runInAction } from 'mobx';
import { getComicsByID, getComicsCharacters } from '../api/GetComics';
import { Item } from '../types/Item';

class ComicsDetailsStore {
  @observable
  comicsDetails: Item[] = [];

  @observable
  comicsCharacters: { [id: number]: string } = {};

  constructor() {
    makeObservable(this);
  }

  @action
  fetchComicsDetails = async (id: number): Promise<void> => {
    try {
      const details = await getComicsByID(id);
      runInAction(() => {
        this.comicsDetails = details;
      });
    } catch (error) {
      console.error('Error fetching details:', error);
    }
  };

  @action
  fetchComicsCharacters = async (id: number): Promise<void> => {
    try {
      const characters = await getComicsCharacters(id);
      runInAction(() => {
        this.comicsCharacters = characters;
      });
    } catch (error) {
      console.error('Error fetching comics:', error);
    }
  };
}

const comicsDetailsStore = new ComicsDetailsStore();

export default comicsDetailsStore;
