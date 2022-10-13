import React from 'react';
import useRipple from 'use-ripple-hook/ripple';

import RoundButtonView from './RoundButtonView';
import colors from '../../../scssAbstracts/_variables.scss';

interface RoundButtonControllerProps {
  onClick?: () => void,
  iconSrc?: string,
}

const RoundButtonController: React.FC<RoundButtonControllerProps> = ({
  onClick = null,
  iconSrc = null,
}) => {
  const [ripple, onRipple] = useRipple({
    color: colors.shade20,
  });

  return (
    <RoundButtonView
      iconSrc={iconSrc}
      handleClick={onClick}
      ref={ripple}
      onRipple={onRipple}
    />
  );
};

export default RoundButtonController;
