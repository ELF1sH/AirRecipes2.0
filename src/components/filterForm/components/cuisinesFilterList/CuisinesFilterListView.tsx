import React from 'react';

import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from '../../styles/FilterForm.module.scss';
import colors from '../../../../scssAbstracts/_variables.scss';
import { CuisineType, RecipesStateType } from '../../../../models/types/recipesListTypes';
import { CuisineFilterStatus } from './types';

interface CuisinesFilterListViewProps {
  recipesState: RecipesStateType,
  curCuisinesFiltersStatus?: CuisineFilterStatus,
  handleCheckboxChange: (id: number) => void,
}

const CuisinesFilterListView: React.FC<CuisinesFilterListViewProps> = ({
  recipesState,
  curCuisinesFiltersStatus,
  handleCheckboxChange,
}) => (
  <>
    {
      recipesState?.cuisines?.map((item: CuisineType) => (
        <div key={item.id}>
          <div className={styles.cuisine_checkbox_wrapper}>
            <FormControlLabel
              control={(
                <Checkbox
                  checked={curCuisinesFiltersStatus ? curCuisinesFiltersStatus[item.id] : true}
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
