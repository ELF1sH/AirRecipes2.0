import { expandImage, shrinkImage } from '../../../../helpers/headerScrollBehavior';
import { HeaderState } from '../headerState';

export class UnfixedHeaderState extends HeaderState {
  init() { }

  OFFSET_Y = 10;

  handleScroll() {
    const rectImage = this.imageRef.current?.getBoundingClientRect();

    if (!rectImage || !this.inputMiddleY.current) {
      return;
    }

    if (rectImage && rectImage.bottom > this.inputMiddleY.current + this.OFFSET_Y) {
      shrinkImage(this.imageRef, rectImage, this.headerWrapperRef);
    }
  }

  async handleWheel(event: WheelEvent) {
    const rectImage = this.imageRef.current?.getBoundingClientRect();

    if (!rectImage || !this.defImageHeight.current || !this.rectTextField.current) {
      return;
    }

    if (event.deltaY < 0 && rectImage.height < this.defImageHeight.current
      && rectImage.bottom > this.rectTextField.current.top && window.scrollY < 1
    ) {
      await expandImage(this.imageRef, rectImage, this.headerWrapperRef);
    }
  }
}
