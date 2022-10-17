import { MutableRefObject } from 'react';

export type CombinedRef = {
  textFieldRef: MutableRefObject<HTMLInputElement>,
  imageRef: MutableRefObject<HTMLDivElement>,
  headerWrapperRef: MutableRefObject<HTMLDivElement>,
}
