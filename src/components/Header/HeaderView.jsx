import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Header.module.scss';
import TextField from '../defaultComponents/textField/TextFieldController';
import RoundButton from '../defaultComponents/RoundButton/RoundButtonController';
import filterIcon from '../../assets/icons/filter.svg';
import FilterForm from '../FilterForm/FilterFormProvider';

const HeaderView = React.forwardRef(({
  roundButtonOnClick, searchValue, setSearchValue, isModalOpened, setIsModalOpened,
}, ref) => {
  const { headerWrapperRef, textFieldRef, imageRef } = ref.current;

  return (
    <>
      <div className={styles.header_wrapper} ref={headerWrapperRef}>
        <div className={`${styles.header_content}`}>
          <h1>Air Recipes</h1>
          <p className={styles.header_desc}>Best Recipes for Best People</p>
          <div className={styles.filter_container}>
            <TextField
              value={searchValue}
              setValue={setSearchValue}
              className={styles.text_field}
              placeholder="Search"
              ref={textFieldRef}
            />
            <RoundButton onClick={roundButtonOnClick} iconSrc={filterIcon} />
          </div>
        </div>
      </div>

      <div className={styles.image_wrapper} ref={imageRef} />

      <FilterForm isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    </>
  );
});

HeaderView.propTypes = {
  roundButtonOnClick: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
};

export default HeaderView;
