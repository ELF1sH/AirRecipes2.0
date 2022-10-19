import { HeaderState } from '../headerState';

export class FixedHeaderState extends HeaderState {
  init() {
    if (this.imageRef.current) {
      this.imageRef.current.style.height = `${this.inputMiddleY.current}px`;
    }
    if (this.headerWrapperRef.current) {
      this.headerWrapperRef.current.style.marginBottom = `${this.inputMiddleY.current}px`;
    }
  }

  handleScroll() { }

  handleWheel() { }
}
