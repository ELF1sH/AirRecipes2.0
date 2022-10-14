import React, {
  SetStateAction, Dispatch, RefObject,
} from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

import TextField from '../defaultComponents/textField/TextFieldController';
import RoundButton from '../defaultComponents/roundButton/RoundButtonController';
import FilterForm from '../filterForm/FilterFormProvider';
import filterIcon from '../../assets/icons/filter.svg';
import styles from './styles/Header.module.scss';

interface HeaderViewProps {
  isModalOpened: boolean,
  isFixed: boolean,
  setIsModalOpened: Dispatch<SetStateAction<boolean>>,
  handleSearchFieldChange: (value: string) => void,
}

type RefType = {
  textFieldRef: RefObject<HTMLInputElement>,
  imageRef: RefObject<HTMLDivElement>,
  headerWrapperRef: RefObject<HTMLDivElement>,
};

const HeaderView = React.forwardRef<RefType, HeaderViewProps>(({
  isModalOpened, isFixed, setIsModalOpened, handleSearchFieldChange,
}, ref: RefObject<RefType>) => {
  const { headerWrapperRef, textFieldRef, imageRef } = ref.current;

  return (
    <>
      <div className={styles.header_wrapper} ref={headerWrapperRef}>
        <div className={`${styles.header_content}`}>
          <Typography variant="h1">Air Recipes</Typography>
          <Typography variant="body1" className={styles.header_desc}>Best Recipes for Best People</Typography>

          <div className={styles.filter_container} style={{ visibility: isFixed ? 'hidden' : 'initial' }}>
            <TextField
              ref={textFieldRef}
              className={styles.text_field}
              placeholder="Search"
              onChange={handleSearchFieldChange}
            />
            <RoundButton onClick={() => setIsModalOpened(true)} iconSrc={filterIcon} />
          </div>

        </div>
      </div>

      <div className={styles.image_wrapper} ref={imageRef} />

      <FilterForm isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    </>
  );
});

HeaderView.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool.isRequired,
  setIsModalOpened: PropTypes.func.isRequired,
  handleSearchFieldChange: PropTypes.func.isRequired,
};

export default HeaderView;
