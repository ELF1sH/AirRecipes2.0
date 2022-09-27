import { useEffect, useRef, useState } from 'react';
import HeaderView from './HeaderView';
import styles from './styles/Header.module.scss';
// import { useDispatch } from "react-redux";

function HeaderController() {
  const textFieldRef = useRef(null);
  const imageRef = useRef(null);
  const headerWrapperRef = useRef(null);
  const ref = useRef({ textFieldRef, imageRef, headerWrapperRef });

  // const dispatch = useDispatch()

  const defInputTop = useRef(0);
  const defImageHeight = useRef(0);

  useEffect(() => {
    const rectInput = textFieldRef.current.getBoundingClientRect();
    const rectImage = imageRef.current.getBoundingClientRect();
    // need to set up default dimensions for further comparisons
    defInputTop.current = rectInput.top + rectInput.height / 2;
    defImageHeight.current = rectImage.height;

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const posFixed = useRef(false);

  const prevHeight = useRef(0);

  const handleScroll = () => {
    const rectImage = imageRef.current.getBoundingClientRect();
    const rectInput = textFieldRef.current.getBoundingClientRect();

    if (rectImage.bottom > rectInput.top + rectInput.height / 2 + 10) {
      window.scrollTo(0, 0);
      imageRef.current.style.height = `${rectImage.height * 0.95}px`;
    }

    if (rectImage.height === prevHeight.current && !posFixed.current) {
      posFixed.current = true;

      imageRef.current.className += ` ${styles.image_wrapper_fixed}`;
      headerWrapperRef.current.style.marginBottom = `${rectImage.height}px`;
    }

    prevHeight.current = rectImage.height;
  };

  const handleWheel = async (event) => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const rectImage = imageRef.current.getBoundingClientRect();
    const rectInput = textFieldRef.current.getBoundingClientRect();
    if (event.deltaY < 0 && rectImage.height < defImageHeight.current && rectImage.bottom > rectInput.top && window.scrollY < 1) {
      for (let i = 1; i <= 10; i++) {
        imageRef.current.style.height = `${rectImage.height * (1 + 0.02 * i)}px`;
        await sleep(1);
      }
    }

    if (rectImage.height !== prevHeight.current && posFixed.current) {
      posFixed.current = false;
      imageRef.current.className = imageRef.current.className.replace(`${styles.image_wrapper_fixed}`, '');
      headerWrapperRef.current.style.marginBottom = '0';
    }
  };

  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      // dispatch(setNameFilter(searchValue.current.trim()))
      // dispatch(applyFilter())
    }
  };

  const searchFieldOnChange = (value) => {
    setSearchValue(value);
    if (!value) {
      // dispatch(setNameFilter(value))
      // dispatch(applyFilter())
    }
  };

  const roundButtonOnClick = () => {
    setIsModalOpened(true);
  };

  const [searchValue, setSearchValue] = useState('');

  return (
    <HeaderView
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      ref={ref}
      roundButtonOnClick={roundButtonOnClick}
      isModalOpened={isModalOpened}
      setIsModalOpened={setIsModalOpened}
    />
  );
}

export default HeaderController;
