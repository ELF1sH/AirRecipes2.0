import { RefObject } from 'react';

export interface CombinedRef {
  textFieldRef: RefObject<HTMLInputElement> | null,
  upperHeaderBgRef: RefObject<HTMLDivElement> | null,
  headerWrapperRef: RefObject<HTMLDivElement> | null,
}
