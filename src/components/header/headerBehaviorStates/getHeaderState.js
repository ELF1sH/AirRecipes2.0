import { FixedHeaderState } from './states/fixedHeaderState';
import { UnfixedHeaderState } from './states/unfixedHeaderState';

const getHeaderState = (
  isFixed,
  imageRef,
  headerWrapperRef,
  rectTextField,
  inputMiddleY,
  defImageHeight,
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
