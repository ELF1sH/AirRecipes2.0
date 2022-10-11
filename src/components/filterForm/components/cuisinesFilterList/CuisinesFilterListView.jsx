import React from 'react';
import PropTypes from 'prop-types';

import { Checkbox, Divider, FormControlLabel } from '@mui/material';

import styles from '../../styles/FilterForm.module.scss';

import colors from '@scssAbstracts/_variables.scss';
import { recipesStateShape } from '@models/propTypesObjects/recipes';

const CuisinesFilterListView = ({ recipes, handleCheckboxChange, curCuisinesFiltersStatus }) => (
  recipes.cuisines.map((item) => (
    <div key={item.id}>
      <div className={styles.cuisine_checkbox_wrapper}>
        <FormControlLabel
          control={(
            <Checkbox
              checked={curCuisinesFiltersStatus[item.id]}
              sx={{ color: colors.shade50, '&.Mui-checked': { color: colors.shade50 } }}
              onChange={() => handleCheckboxChange(item.id)}
            />
            )}
          label={item.title}
          labelPlacement="start"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: 0,
          }}
        />
      </div>
      <Divider />
    </div>
  ))
);

CuisinesFilterListView.propTypes = {
  recipes: recipesStateShape.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  curCuisinesFiltersStatus: PropTypes.shape({
    id: PropTypes.bool,
  }),
};

export default CuisinesFilterListView;
