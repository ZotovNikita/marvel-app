import { observable, action, makeObservable, runInAction } from 'mobx';
import { getTotalComics, getComics } from '../api/GetComics';
import { Item } from '../types/Item';

class ComicsPageStore {
  @observable
  comicsList: Item[] = [];

  @observable
  totalNumber: number = 0;

  constructor() {
    makeObservable(this);
  }

  @action
  fetchTotalComics = async (): Promise<void> => {
    try {
      const total = await getTotalComics();
      runInAction(() => {
        this.totalNumber = total;
      });
    } catch (error) {
      console.error('Error fetching total:', error);
    }
  };

  @action
  fetchComics = async (page: number): Promise<void> =>{
    try {
      const offset = (page - 1) * 12;
      const comics = await getComics(offset);
      runInAction(() => {
        this.comicsList = comics;
      });
    } catch (error) {
      console.error('Error fetching comics:', error);
    }
  };
}

const comicsPageStore = new ComicsPageStore();

export default comicsPageStore;
