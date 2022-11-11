import React from 'react';

import Typography from '@mui/material/Typography';

import Modal from '../defaultComponents/modal/ModalController';
import Slider from '../defaultComponents/slider/SliderController';
import ButtonRow from './components/buttonRow/ButtonRowController';
import CuisinesFilterListController from './components/cuisinesFilterList/CuisinesFilterListController';
import styles from './styles/FilterForm.module.scss';
import { CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE } from '../../data/constants';
import { GetStateHandle } from '../defaultComponents/slider/types';
import { ICuisine } from '../../domain/entity/recipe/ICuisine';
import { ICuisineFilter } from '../../domain/entity/filter/ICuisineFilter';

interface FilterFormViewProps {
  cuisines: ICuisine[],
  cuisinesFilter: ICuisineFilter[],
  sliderValue: number[],
  isModalOpened: boolean,
  isFilterChanged: boolean,
  handleClose: () => void,
  handleSliderChange: (newValue: number[]) => void,
  handleBtnApplyClick: () => void,
  handleCheckboxChange: (id: number) => void,
  handleClearForm: () => void,
}

const FilterFormView = React.forwardRef<GetStateHandle, FilterFormViewProps>(({
  cuisines,
  cuisinesFilter,
  sliderValue,
  isModalOpened,
  handleClose,
  handleSliderChange,
  isFilterChanged,
  handleBtnApplyClick,
  handleCheckboxChange,
  handleClearForm,
}, ref?) => (
  <Modal isOpen={isModalOpened} handleClose={handleClose}>
    <div className={styles.modal_wrapper}>
      <Typography variant="h3">Filter</Typography>
      <CuisinesFilterListController
        cuisines={cuisines}
        cuisinesFilter={cuisinesFilter}
        handleCheckboxChange={handleCheckboxChange}
      />

      <Slider
        ref={ref}
        minDistance={50}
        value={sliderValue}
        min={CAL_SLIDER_MIN_VALUE}
        max={CAL_SLIDER_MAX_VALUE}
        className={styles.slider}
        onChange={handleSliderChange}
      />
      <Typography variant="body1" className={styles.p}>Calories, kCal</Typography>

      <ButtonRow
        isFilterChanged={isFilterChanged}
        handleBtnApplyClick={handleBtnApplyClick}
        handleClearForm={handleClearForm}
      />
    </div>
  </Modal>
));

export default FilterFormView;
