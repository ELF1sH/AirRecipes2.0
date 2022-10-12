import colors from '../../../../scssAbstracts/_variables.scss';

import { SxProps } from '@mui/system';

export const sliderSx: SxProps = {
  color: colors.shade50,
  '& .MuiSlider-valueLabel': {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    position: 'relative',
    backgroundColor: colors.shade50,
    '&::before': {
      display: 'none',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '-81%',
      left: '50%',
      border: '12.6px solid transparent',
      borderBottom: `18.6px solid ${colors.shade50}`,
      transform: 'translate(-50%, 48px) rotate(180deg)',
    },
  },
  '& .MuiSlider-thumb': {
    userSelect: 'none',
  },
};
