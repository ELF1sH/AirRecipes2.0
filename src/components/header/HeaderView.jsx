import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import styles from './styles/Header.module.scss';
import TextField from '../default-components/text-field/TextFieldController';
import RoundButton from '../default-components/round-button/RoundButtonController';
import filterIcon from '../../assets/icons/filter.svg';
import FilterForm from '../filter-form/FilterFormProvider';

const HeaderView = React.forwardRef(({
  openFilterForm, searchValue, setSearchValue, isModalOpened, setIsModalOpened,
}, ref) => {
  const { headerWrapperRef, textFieldRef, imageRef } = ref.current;

  return (
    <>
      <div className={styles.header_wrapper} ref={headerWrapperRef}>
        <div className={`${styles.header_content}`}>
          <Typography variant="h1">Air Recipes</Typography>
          <Typography variant="body1" className={styles.header_desc}>Best Recipes for Best People</Typography>
          <div className={styles.filter_container}>
            <TextField
              ref={textFieldRef}
              value={searchValue}
              className={styles.text_field}
              placeholder="Search"
              setValue={setSearchValue}
            />
            <RoundButton onClick={openFilterForm} iconSrc={filterIcon} />
          </div>
        </div>
      </div>

      <div className={styles.image_wrapper} ref={imageRef} />

      <FilterForm isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    </>
  );
});

HeaderView.propTypes = {
  openFilterForm: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  isModalOpened: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
};

export default HeaderView;
