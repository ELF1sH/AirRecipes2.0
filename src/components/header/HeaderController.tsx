import React, { useEffect, useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

import HeaderView from './HeaderView';
import getHeaderState from './headerBehaviorStates/getHeaderState';
import { CombinedRef, CurrentHeaderStateType } from './types';
import { HeaderViewModel } from './HeaderViewModel';

interface HeaderControllerProps {
  isFixed: boolean,
  viewModel: HeaderViewModel,
}

const HeaderController: React.FC<HeaderControllerProps> = ({ isFixed, viewModel }) => {
  const textFieldRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headerWrapperRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<CombinedRef>({ textFieldRef, imageRef, headerWrapperRef });

  const defImageHeight = useRef<number>(0);
  const inputMiddleY = useRef<number>(0);
  const rectTextField = useRef<DOMRect | null>(null);

  let headerState: CurrentHeaderStateType = null;

  const { setNameFilter, applyFilters } = viewModel;

  const handleScroll = () => {
    headerState?.handleScroll();
  };

  const handleWheel = async (event: WheelEvent) => {
    await headerState?.handleWheel(event);
  };

  const handleSearchFieldChange = (value: string) => {
    if (!value) {
      setNameFilter(value);

      (async () => {
        await applyFilters();
      })();
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && textFieldRef.current !== null) {
      setNameFilter(textFieldRef.current.value);

      (async () => {
        await applyFilters();
      })();
    }
  };

  useEffect(() => {
    const rectImage = imageRef.current?.getBoundingClientRect();
    defImageHeight.current = rectImage ? rectImage.height : 0;

    rectTextField.current = textFieldRef.current?.getBoundingClientRect() ?? null;
    inputMiddleY.current = rectTextField.current
      ? rectTextField.current.top + rectTextField.current.height / 2
      : 0;

    if (rectImage && headerWrapperRef.current) {
      headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;
    }

    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    headerState = getHeaderState(
      isFixed,
      imageRef,
      headerWrapperRef,
      rectTextField,
      inputMiddleY,
      defImageHeight,
    );

    headerState.init();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isFixed]);

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  return (
    <HeaderView
      ref={ref}
      isFixed={isFixed}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
      handleSearchFieldChange={handleSearchFieldChange}
    />
  );
};

export default observer(HeaderController);
