import React, { RefObject } from 'react';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import TextField from '../defaultComponents/textField/TextFieldController';
import RoundButton from '../defaultComponents/roundButton/RoundButtonController';
import FilterForm from '../filterForm/FilterFormProvider';
import filterIcon from '../../assets/icons/filter.svg';
import styles from './styles/Header.module.scss';
import { CombinedRef } from './types';

interface HeaderViewProps {
  isModalOpened: boolean,
  setIsModalOpened: (value: boolean) => void,
  handleSearchFieldChange: (value: string) => void,
}

const HeaderView = React.forwardRef<CombinedRef, HeaderViewProps>(({
  isModalOpened, setIsModalOpened, handleSearchFieldChange,
}, ref: RefObject<CombinedRef>) => {
  const { headerWrapperRef, upperHeaderBgRef, textFieldRef } = ref && ref.current
    ? ref.current
    : { headerWrapperRef: null, upperHeaderBgRef: null, textFieldRef: null };

  return (
    <>
      <div className={styles.header_wrapper} ref={headerWrapperRef}>
        <div className={`${styles.header_content}`}>
          <Link href="/"><Typography variant="h1">Air Recipes</Typography></Link>
          <Typography variant="body1" className={styles.header_desc}>Best Recipes for Best People</Typography>

          <div className={styles.filter_container}>
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

      <div className={styles.header_upper_bg_image} ref={upperHeaderBgRef} style={{ display: 'none' }} />

      <FilterForm isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
    </>
  );
});

export default HeaderView;
