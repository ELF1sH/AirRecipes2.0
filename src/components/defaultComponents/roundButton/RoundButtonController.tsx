import React from 'react';
import useRipple from 'use-ripple-hook/ripple';

import RoundButtonView from './RoundButtonView';
import colors from '../../../scssAbstracts/_variables.scss';

interface RoundButtonControllerProps {
  iconSrc?: string,
  onClick?: () => void,
}

const RoundButtonController: React.FC<RoundButtonControllerProps> = ({
  iconSrc,
  onClick,
}) => {
  const [ripple, onRipple] = useRipple({
    color: colors.shade20,
  });

  return (
    <RoundButtonView
      iconSrc={iconSrc}
      handleClick={onClick}
      onRipple={onRipple}
      ref={ripple}
    />
  );
};

export default RoundButtonController;
