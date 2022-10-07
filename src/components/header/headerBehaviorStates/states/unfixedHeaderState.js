import { expandImage, shrinkImage } from '../../../../helpers/headerScrollBehavior';
import { HeaderState } from '../headerState';

export class UnfixedHeaderState extends HeaderState {
  init() { return undefined; }

  handleScroll() {
    const rectImage = this.imageRef.current.getBoundingClientRect();

    if (rectImage.bottom > this.inputMiddleY.current + 10) {
      shrinkImage(this.imageRef, rectImage, this.headerWrapperRef);
    }
  }

  async handleWheel(event) {
    const rectImage = this.imageRef.current.getBoundingClientRect();

    if (event.deltaY < 0 && rectImage.height < this.defImageHeight.current
      && rectImage.bottom > this.rectTextField.current.top && window.scrollY < 1
    ) {
      await expandImage(this.imageRef, rectImage, this.headerWrapperRef);
    }
  }
}
