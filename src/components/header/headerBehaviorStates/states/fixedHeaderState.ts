import { HeaderState } from '../headerState';

export class FixedHeaderState extends HeaderState {
  init() {
    this.imageRef.current.style.height = `${this.inputMiddleY.current}px`;
    this.headerWrapperRef.current.style.marginBottom = `${this.inputMiddleY.current}px`;
  }

  handleScroll() { }

  handleWheel() { }
}
