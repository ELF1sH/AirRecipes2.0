import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import HeaderView from './HeaderView';
import { applyFilter, setNameFilter } from '../../models/store/slices/recipesListSlice';
import getHeaderState from './headerBehaviorStates/getHeaderState';
import { CombinedRef, CurrentHeaderStateType } from './types';

interface HeaderControllerProps {
  isFixed: boolean,
}

const HeaderController: React.FC<HeaderControllerProps> = ({ isFixed }) => {
  const dispatch = useDispatch();

  const textFieldRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headerWrapperRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<CombinedRef>({ textFieldRef, imageRef, headerWrapperRef });

  const defImageHeight = useRef<number>(0);
  const inputMiddleY = useRef<number>(0);
  const rectTextField = useRef<DOMRect | null>(null);

  let headerState: CurrentHeaderStateType = null;

  const handleScroll = () => {
    headerState?.handleScroll();
  };

  const handleWheel = async (event: WheelEvent) => {
    await headerState?.handleWheel(event);
  };

  const handleSearchFieldChange = (value: string) => {
    if (!value) {
      dispatch(setNameFilter(value));
      dispatch(applyFilter());
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && textFieldRef.current !== null) {
      dispatch(setNameFilter(textFieldRef.current.value.trim()));
      dispatch(applyFilter());
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

export default HeaderController;
