import styles from '../styles/Header.module.scss';

const sleep = (ms) => new Promise((r) => { setTimeout(r, ms); });

export const expandImage = async (imageRef, rectImage, headerWrapperRef) => {
  for (let i = 1; i <= 10; i += 1) {
    const newHeight = rectImage.height * (1 + 0.02 * i);
    imageRef.current.style.height = `${newHeight}px`;
    const newRectImage = imageRef.current.getBoundingClientRect();
    headerWrapperRef.current.style.marginBottom = `${newRectImage.height}px`;
    await sleep(1);
  }
};

export const shrinkImage = (imageRef, rectImage, headerWrapperRef, posFixed) => {
  window.scrollTo(0, 0);
  imageRef.current.style.height = `${rectImage.height * 0.95}px`;
  if (posFixed.current) {
    headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;
  } else {
    headerWrapperRef.current.style.marginBottom = `${0}px`;
  }
};

export const fixImageToTop = (imageRef, rectImage, headerWrapperRef) => {
  imageRef.current.className += ` ${styles.image_wrapper_fixed}`;
  headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;
};

export const unfixImageFromTop = (imageRef, headerWrapperRef) => {
  imageRef.current.className = imageRef.current.className.replace(`${styles.image_wrapper_fixed}`, '');
  headerWrapperRef.current.style.marginBottom = '0';
};
