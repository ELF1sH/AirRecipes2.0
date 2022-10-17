import { RefObject } from 'react';

import { FixedHeaderState } from './states/fixedHeaderState';
import { UnfixedHeaderState } from './states/unfixedHeaderState';

const getHeaderState = (
  isFixed: boolean,
  imageRef: RefObject<HTMLDivElement>,
  headerWrapperRef: RefObject<HTMLDivElement>,
  rectTextField: RefObject<DOMRect>,
  inputMiddleY: RefObject<number>,
  defImageHeight: RefObject<number>,
) => {
  if (isFixed) {
    return (
      new FixedHeaderState(imageRef, headerWrapperRef, rectTextField, inputMiddleY, defImageHeight)
    );
  }

  return (
    new UnfixedHeaderState(imageRef, headerWrapperRef, rectTextField, inputMiddleY, defImageHeight)
  );
};

export default getHeaderState;
