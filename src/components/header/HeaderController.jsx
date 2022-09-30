import React, { useEffect, useRef, useState } from 'react';
import HeaderView from './HeaderView';
import {
  expandImage, fixImageToTop, shrinkImage, unfixImageFromTop,
} from './header-scroll-behavior/HeaderScrollBehavior';
// import { useDispatch } from "react-redux";

const HeaderController = () => {
  const textFieldRef = useRef(null);
  const imageRef = useRef(null);
  const headerWrapperRef = useRef(null);
  const ref = useRef({ textFieldRef, imageRef, headerWrapperRef });

  // const dispatch = useDispatch()
  const defImageHeight = useRef(0);
  const prevImageHeight = useRef(0);
  const posFixed = useRef(false);

  const handleScroll = () => {
    const rectImage = imageRef.current.getBoundingClientRect();
    const rectInput = textFieldRef.current.getBoundingClientRect();

    if (rectImage.bottom > rectInput.top + rectInput.height / 2 + 10) {
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

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      // dispatch(setNameFilter(searchValue.current.trim()))
      // dispatch(applyFilter())
    }
  };

  useEffect(() => {
    const rectImage = imageRef.current.getBoundingClientRect();
    defImageHeight.current = rectImage.height;

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const openFilterForm = () => {
    setIsModalOpened(true);
  };

  const [searchValue, setSearchValue] = useState('');

  // const searchFieldOnChange = (value) => {
  //   setSearchValue(value);
  //   if (!value) {
  //     // dispatch(setNameFilter(value))
  //     // dispatch(applyFilter())
  //   }
  // };

  return (
    <HeaderView
      ref={ref}
      searchValue={searchValue}
      isModalOpened={isModalOpened}
      setSearchValue={setSearchValue}
      openFilterForm={openFilterForm}
      setIsModalOpened={setIsModalOpened}
    />
  );
};

export default HeaderController;
