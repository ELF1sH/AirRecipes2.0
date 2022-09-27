import { Slider as MuiSlider } from '@mui/material';
import PropTypes from 'prop-types';
import colors from '../../../scssAbstracts/_variables.scss';

function SliderView({
  value, handleChange, min, max, className = '',
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

SliderView.defaultProps = {
  className: '',
};

SliderView.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default SliderView;
