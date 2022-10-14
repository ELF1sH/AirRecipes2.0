import React from 'react';

import { Button } from '@mui/material';

import colors from '../../../../scssAbstracts/_variables.scss';

interface ButtonRowViewProps {
  isFilterChanged: boolean,
  handleBtnApplyClick: () => void,
  handleClearForm: () => void,
}

const ButtonRowView: React.FC<ButtonRowViewProps> = ({
  isFilterChanged,
  handleBtnApplyClick,
  handleClearForm,
}) => (
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

export default ButtonRowView;
