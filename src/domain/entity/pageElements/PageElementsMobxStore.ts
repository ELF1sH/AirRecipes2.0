import { makeAutoObservable, observable, action } from 'mobx';

export class PageElementsMobxStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable private _contentContainer: HTMLDivElement | null = null;

  public get contentContainer(): HTMLDivElement | null {
    return this._contentContainer;
  }

  @action public setContentContainer(contentContainer: HTMLDivElement) {
    this._contentContainer = contentContainer;
  }
}

export const pageElementsMobxStore = new PageElementsMobxStore();
