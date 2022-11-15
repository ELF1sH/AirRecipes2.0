import { PageElementsMobxStore } from '../../../domain/entity/pageElements/PageElementsMobxStore';

export class ContentContainerViewModel {
  private readonly pageElementsRefsStore: PageElementsMobxStore;

  constructor(pageElementsRefsStore: PageElementsMobxStore) {
    this.pageElementsRefsStore = pageElementsRefsStore;
  }

  public setContentContainer(contentContainer: HTMLDivElement): void {
    this.pageElementsRefsStore.setContentContainer(contentContainer);
  }
}
