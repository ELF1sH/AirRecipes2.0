import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import HeaderView from './HeaderView';
import { applyFilter, setNameFilter } from '../../models/store/slices/recipesListSlice';
import getHeaderState from './headerBehaviorStates/getHeaderState';
import { CombinedRef } from './types';

interface HeaderControllerProps {
  isFixed: boolean,
}

const HeaderController: React.FC<HeaderControllerProps> = ({ isFixed }) => {
  const dispatch = useDispatch();

  const textFieldRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headerWrapperRef = useRef<HTMLDivElement>(null);
  const ref = useRef<CombinedRef>({ textFieldRef, imageRef, headerWrapperRef });

  const defImageHeight = useRef<number>(0);
  const inputMiddleY = useRef<number>(0);
  const rectTextField = useRef<DOMRect>(null);

  let headerState = null;

  const handleScroll = () => {
    headerState.handleScroll();
  };

  const handleWheel = async (event) => {
    await headerState.handleWheel(event);
  };

  const handleSearchFieldChange = (value: string) => {
    if (!value) {
      dispatch(setNameFilter(value));
      dispatch(applyFilter());
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      dispatch(setNameFilter(textFieldRef.current.value.trim()));
      dispatch(applyFilter());
    }
  };

  useEffect(() => {
    const rectImage = imageRef.current.getBoundingClientRect();
    defImageHeight.current = rectImage.height;

    rectTextField.current = textFieldRef.current.getBoundingClientRect();
    inputMiddleY.current = rectTextField.current.top + rectTextField.current.height / 2;

    headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;

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
