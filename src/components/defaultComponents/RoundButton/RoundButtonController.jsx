import useRipple from 'use-ripple-hook/ripple';
import RoundButtonView from './RoundButtonView';
import colors from '../../../scssAbstracts/_variables.scss';

function RoundButtonController({ onClick, iconSrc }) {
  const [ripple, event] = useRipple({
    color: colors.shade20,
  });

  return (
    <RoundButtonView
      ref={ripple}
      event={event}
      onClick={onClick}
      iconSrc={iconSrc}
    />
  );
}

export default RoundButtonController;
