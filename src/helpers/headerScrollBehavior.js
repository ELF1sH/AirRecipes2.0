const IMAGE_HEIGHT_EXPAND_MULTIPLIER = 0.02;
const IMAGE_HEIGHT_SHRINK_MULTIPLIER = 0.95;

const sleep = (ms) => new Promise((r) => { setTimeout(r, ms); });

export const expandImage = async (imageRef, rectImage, headerWrapperRef) => {
  for (let i = 1; i <= 10; i += 1) {
    const newHeight = rectImage.height * (1 + IMAGE_HEIGHT_EXPAND_MULTIPLIER * i);
    imageRef.current.style.height = `${newHeight}px`;

    const newRectImage = imageRef.current.getBoundingClientRect();
    headerWrapperRef.current.style.marginBottom = `${newRectImage.height}px`;

    await sleep(1);
  }
};

export const shrinkImage = (imageRef, rectImage, headerWrapperRef) => {
  window.scrollTo(0, 0);
  imageRef.current.style.height = `${rectImage.height * IMAGE_HEIGHT_SHRINK_MULTIPLIER}px`;
  headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;
};
