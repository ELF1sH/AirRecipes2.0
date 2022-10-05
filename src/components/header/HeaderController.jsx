import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import HeaderView from './HeaderView';
import { expandImage, shrinkImage } from '../../helpers/headerScrollBehavior';
import { applyFilter, setNameFilter } from '../../models/store/slices/recipesListSlice';

const HeaderController = () => {
  const dispatch = useDispatch();

  const textFieldRef = useRef(null);
  const imageRef = useRef(null);
  const headerWrapperRef = useRef(null);
  const ref = useRef({ textFieldRef, imageRef, headerWrapperRef });

  const defImageHeight = useRef(0);
  const inputMiddleY = useRef(0);
  const rectTextField = useRef(null);

  const handleScroll = () => {
    const rectImage = imageRef.current.getBoundingClientRect();

    if (rectImage.bottom > inputMiddleY.current) {
      shrinkImage(imageRef, rectImage, headerWrapperRef);
    }
  };

  const handleWheel = async (event) => {
    const rectImage = imageRef.current.getBoundingClientRect();

    if (event.deltaY < 0 && rectImage.height < defImageHeight.current
      && rectImage.bottom > rectTextField.current.top && window.scrollY < 1
    ) {
      await expandImage(imageRef, rectImage, headerWrapperRef);
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

    rectTextField.current = textFieldRef.current.getBoundingClientRect();
    inputMiddleY.current = rectTextField.current.top + rectTextField.current.height / 2 + 10;

    headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;

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
