import React from 'react';
import {
  Button, Checkbox, Divider, FormControlLabel,
} from '@mui/material';
import PropTypes from 'prop-types';
import styles from './styles/FilterForm.module.scss';
import Modal from '../defaultComponents/Modal/ModalController';
import colors from '../../scssAbstracts/_variables.scss';
import Slider from '../defaultComponents/Slider/SliderController';
import { recipesShape } from '../../models/propTypesObjects/Recipes';

const FilterFormView = React.forwardRef(({
  isModalOpened, handleClose, recipes, sliderOnChange, isFilterChanged, btnApplyOnClick,
  checkboxOnChange,
}, ref) => (
  <Modal isOpen={isModalOpened} handleClose={handleClose}>
    <div className={styles.modal_wrapper}>
      <h3>Filter</h3>
      {recipes.cuisines.map((item) => (
        <div key={item.id}>
          <div className={styles.cuisine_checkbox_wrapper}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={
                    recipes.curFilterState.cuisineFilter.length
                      ? recipes.curFilterState.cuisineFilter.find((x) => x.id === item.id).status
                      : true
                  }
                  sx={{ color: colors.shade50, '&.Mui-checked': { color: colors.shade50 } }}
                  onChange={() => checkboxOnChange(item.id)}
                />
              )}
              label={item.title}
              labelPlacement="start"
            />
          </div>
          <Divider />
        </div>
      ))}

      <Slider
        minDistance={50}
        value={recipes.curFilterState.calFilter}
        ref={ref}
        onChange={sliderOnChange}
        min={recipes.filterState.calFilter[0]}
        max={recipes.filterState.calFilter[1]}
        className={styles.slider}
      />
      <p className={styles.p}>Calories, kCal</p>

      <div className={styles.button_row}>
        {
            isFilterChanged()
              ? (
                <Button
                  variant="outlined"
                  // onClick={() => dispatch(clearFilter())}
                  sx={{
                    borderColor: colors.shade50,
                    color: colors.shade50,
                    '&:hover': { borderColor: colors.shade50 },
                    float: 'left',
                  }}
                >
                  Clear
                </Button>
              )
              : null
          }
        <Button
          variant="contained"
          onClick={btnApplyOnClick}
          sx={{
            bgcolor: colors.shade50,
            '&:hover': { bgcolor: '#746B5F' },
            float: 'right',
          }}
        >
          Show Recipes
        </Button>
      </div>
    </div>
  </Modal>
));

FilterFormView.propTypes = {
  isModalOpened: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  recipes: recipesShape.isRequired,
  sliderOnChange: PropTypes.func.isRequired,
  isFilterChanged: PropTypes.func.isRequired,
  btnApplyOnClick: PropTypes.func.isRequired,
  checkboxOnChange: PropTypes.func.isRequired,
};

export default FilterFormView;
