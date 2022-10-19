import { RefObject } from 'react';

import { FixedHeaderState } from '@/src/components/header/headerBehaviorStates/states/fixedHeaderState';
import { UnfixedHeaderState } from '@/src/components/header/headerBehaviorStates/states/unfixedHeaderState';

export interface CombinedRef {
  textFieldRef: RefObject<HTMLInputElement> | null,
  imageRef: RefObject<HTMLDivElement> | null,
  headerWrapperRef: RefObject<HTMLDivElement> | null,
}

export type CurrentHeaderStateType = FixedHeaderState | UnfixedHeaderState | null;
