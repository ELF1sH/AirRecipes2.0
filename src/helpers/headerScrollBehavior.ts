import React from 'react';

import { sleep } from './asyncHelper';

const IMAGE_HEIGHT_EXPAND_MULTIPLIER = 0.02;
const IMAGE_HEIGHT_SHRINK_MULTIPLIER = 0.95;

const disableScroll = () => {
  // Get the current page scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  // if any scroll is attempted, set this to the previous value
  window.onscroll = () => {
    window.scrollTo(scrollLeft, scrollTop);
  };
};

const enableScroll = () => {
  window.onscroll = () => {};
};

export const expandImage = async (
  imageRef: React.RefObject<HTMLDivElement>,
  rectImage: DOMRect,
  headerWrapperRef: React.RefObject<HTMLDivElement>,
) => {
  for (let i = 1; i <= 10; i += 1) {
    const newHeight = rectImage.height * (1 + IMAGE_HEIGHT_EXPAND_MULTIPLIER * i);
    imageRef.current.style.height = `${newHeight}px`;

    const newRectImage = imageRef.current.getBoundingClientRect();
    headerWrapperRef.current.style.marginBottom = `${newRectImage.height}px`;

    await sleep(1);
  }
};

export const shrinkImage = (
  imageRef: React.RefObject<HTMLDivElement>,
  rectImage: DOMRect,
  headerWrapperRef: React.RefObject<HTMLDivElement>,
) => {
  disableScroll();
  imageRef.current.style.height = `${rectImage.height * IMAGE_HEIGHT_SHRINK_MULTIPLIER}px`;
  headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;
  enableScroll();
};
