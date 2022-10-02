import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import colors from '../../../../scss-abstracts/_variables.scss';

const ButtonRowView = ({ isFilterChanged, handleBtnApplyClick }) => (
  <div>
    {
      isFilterChanged
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
      onClick={handleBtnApplyClick}
      sx={{
        bgcolor: colors.shade50,
        '&:hover': { bgcolor: '#746B5F' },
        float: 'right',
      }}
    >
      Show Recipes
    </Button>
  </div>
);

ButtonRowView.propTypes = {
  isFilterChanged: PropTypes.bool.isRequired,
  handleBtnApplyClick: PropTypes.func.isRequired,
};

export default ButtonRowView;
