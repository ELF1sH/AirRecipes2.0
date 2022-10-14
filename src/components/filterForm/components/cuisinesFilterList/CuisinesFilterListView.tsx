import React from 'react';

import { Checkbox, Divider, FormControlLabel } from '@mui/material';

import styles from '../../styles/FilterForm.module.scss';
import colors from '../../../../scssAbstracts/_variables.scss';
import { CuisineType, RecipesStateType } from '../../../../models/types/recipes';
import { CuisineFilterStatus } from './types';

interface CuisinesFilterListViewProps {
  recipesState: RecipesStateType,
  handleCheckboxChange: (id: number) => void,
  curCuisinesFiltersStatus: CuisineFilterStatus,
}

const CuisinesFilterListView: React.FC<CuisinesFilterListViewProps> = ({
  recipesState,
  handleCheckboxChange,
  curCuisinesFiltersStatus,
}) => (
  <>
    {
      recipesState.cuisines.map((item: CuisineType) => (
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
    }
  </>
);

export default CuisinesFilterListView;
