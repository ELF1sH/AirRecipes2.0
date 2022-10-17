import { RefObject } from 'react';

export class HeaderState {
  imageRef: RefObject<HTMLDivElement>;

  headerWrapperRef: RefObject<HTMLDivElement>;

  rectTextField: RefObject<DOMRect>;

  inputMiddleY: RefObject<number>;

  defImageHeight: RefObject<number>;

  constructor(
    imageRef: RefObject<HTMLDivElement>,
    headerWrapperRef: RefObject<HTMLDivElement>,
    rectTextField: RefObject<DOMRect>,
    inputMiddleY: RefObject<number>,
    defImageHeight: RefObject<number>,
  ) {
    this.imageRef = imageRef;
    this.headerWrapperRef = headerWrapperRef;
    this.rectTextField = rectTextField;
    this.inputMiddleY = inputMiddleY;
    this.defImageHeight = defImageHeight;
  }
}
