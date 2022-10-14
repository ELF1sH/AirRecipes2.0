import React from 'react';

import { Typography } from '@mui/material';

import Modal from '../defaultComponents/modal/ModalController';
import Slider from '../defaultComponents/slider/SliderController';
import ButtonRow from './components/buttonRow/ButtonRowController';
import CuisinesFilterListController from './components/cuisinesFilterList/CuisinesFilterListController';
import styles from './styles/FilterForm.module.scss';
import { CAL_SLIDER_MIN_VALUE, CAL_SLIDER_MAX_VALUE } from '../../models/store/slices/recipesListSlice';
import { GetStateHandle } from '../defaultComponents/textField/types';
import { RecipesStateType } from '../../models/types/recipes';

interface FilterFormViewProps {
  isModalOpened: boolean,
  handleClose: () => void,
  recipesState: RecipesStateType,
  handleSliderChange: () => void,
  isFilterChanged: boolean,
  handleBtnApplyClick: () => void,
  handleCheckboxChange: (id: number) => void,
  handleClearForm: () => void,
}

const FilterFormView = React.forwardRef<GetStateHandle, FilterFormViewProps>(({
  isModalOpened,
  handleClose,
  recipesState,
  handleSliderChange,
  isFilterChanged,
  handleBtnApplyClick,
  handleCheckboxChange,
  handleClearForm,
}, ref) => (
  <Modal isOpen={isModalOpened} handleClose={handleClose}>
    <div className={styles.modal_wrapper}>
      <Typography variant="h3">Filter</Typography>
      <CuisinesFilterListController
        recipesState={recipesState}
        handleCheckboxChange={handleCheckboxChange}
      />

      <Slider
        ref={ref}
        minDistance={50}
        value={recipesState.curFilterState.calFilter}
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
