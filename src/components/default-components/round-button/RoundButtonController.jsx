import React from 'react';
import useRipple from 'use-ripple-hook/ripple';
import PropTypes from 'prop-types';
import RoundButtonView from './RoundButtonView';
import colors from '../../../scss-abstracts/_variables.scss';

const RoundButtonController = ({ onClick, iconSrc }) => {
  const [ripple, event] = useRipple({
    color: colors.shade20,
  });

  return (
    <RoundButtonView
      ref={ripple}
      iconSrc={iconSrc}
      handleClick={onClick}
      event={event}
    />
  );
};

RoundButtonController.defaultProps = {
  iconSrc: null,
  onClick: null,
};

RoundButtonController.propTypes = {
  iconSrc: PropTypes.string,
  onClick: PropTypes.func,
};

export default RoundButtonController;
