import { Slider as MuiSlider } from '@mui/material';
import colors from '../../../scssAbstracts/_variables.scss';

function SliderView({
  value, handleChange, min, max, className,
}) {
  return (
    <MuiSlider
      getAriaLabel={() => 'Minimum distance'}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="on"
      disableSwap
      size="small"
      sx={{
        color: colors.shade50,
      }}
      min={min ?? 0}
      max={max ?? 100}
      className={className}
    />
  );
}

export default SliderView;
