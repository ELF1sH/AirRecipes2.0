import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@mui/material';

import colors from '@scssAbstracts/_variables.scss';

const ButtonRowView = ({ isFilterChanged, handleBtnApplyClick, handleClearForm }) => (
  <div>
    {
      isFilterChanged
        ? (
          <Button
            variant="outlined"
            onClick={handleClearForm}
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
        '&:hover': { bgcolor: colors.shade50hover },
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
  handleClearForm: PropTypes.func.isRequired,
};

export default ButtonRowView;
