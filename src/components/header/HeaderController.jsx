import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import HeaderView from './HeaderView';
import {
  expandImage, fixImageToTop, shrinkImage, unfixImageFromTop,
} from '../../helpers/headerScrollBehavior';
import { applyFilter, setNameFilter } from '../../models/store/slices/recipesListSlice';

const HeaderController = () => {
  const dispatch = useDispatch();

  const textFieldRef = useRef(null);
  const imageRef = useRef(null);
  const headerWrapperRef = useRef(null);
  const ref = useRef({ textFieldRef, imageRef, headerWrapperRef });

  const defImageHeight = useRef(0);
  const inputMiddleY = useRef(0);
  const prevImageHeight = useRef(0);
  const posFixed = useRef(false);

  const handleScroll = () => {
    const rectImage = imageRef.current.getBoundingClientRect();

    if (rectImage.bottom > inputMiddleY.current) {
      shrinkImage(imageRef, rectImage, headerWrapperRef, posFixed);
    }

    if (rectImage.height === prevImageHeight.current && !posFixed.current) {
      posFixed.current = true;
      fixImageToTop(imageRef, rectImage, headerWrapperRef);
    }

    prevImageHeight.current = rectImage.height;
  };

  const handleWheel = async (event) => {
    const rectImage = imageRef.current.getBoundingClientRect();
    const rectInput = textFieldRef.current.getBoundingClientRect();

    if (event.deltaY < 0 && rectImage.height < defImageHeight.current
      && rectImage.bottom > rectInput.top && window.scrollY < 1
    ) {
      await expandImage(imageRef, rectImage, headerWrapperRef);
    }

    if (rectImage.height !== prevImageHeight.current && posFixed.current && window.scrollY > 0) {
      posFixed.current = false;
      unfixImageFromTop(imageRef, headerWrapperRef);
    }
  };

  const handleSearchFieldChange = (value) => {
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

    const rectInput = textFieldRef.current.getBoundingClientRect();
    inputMiddleY.current = rectInput.top + rectInput.height / 2 + 10;

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const [isModalOpened, setIsModalOpened] = useState(false);

  const openFilterForm = () => {
    setIsModalOpened(true);
  };

  return (
    <HeaderView
      ref={ref}
      isModalOpened={isModalOpened}
      openFilterForm={openFilterForm}
      setIsModalOpened={setIsModalOpened}
      handleSearchFieldChange={handleSearchFieldChange}
    />
  );
};

export default HeaderController;
