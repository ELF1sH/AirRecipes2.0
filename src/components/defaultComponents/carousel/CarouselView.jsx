import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';

import colors from '../../../scssAbstracts/_variables.scss';
import styles from './styles/Carousel.module.scss';

const CarouselView = ({ images, className }) => {
  if (!images.length) return null;
  return (
    images.length === 1
      ? <img src={images[0]} alt="" style={{ width: '100%' }} className={className} />
      : (
        <Carousel
          autoPlay
          stopAutoPlayOnHover
          swipe
          animation="slide"
          duration={300}
          cycleNavigation={false}
          className={className}
          navButtonsAlwaysVisible
          indicators
          fullHeightHover
          navButtonsProps={{
            style: {
              backgroundColor: colors.shade50,
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: colors.shade50,
            },
          }}
          indicatorIconButtonProps={{
            style: {
              color: colors.shade20,
            },
          }}
        >
          {
            images.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundImage: `url("${item}")`,
                }}
                className={styles.carousel_item}
              />
            ))
          }
        </Carousel>
      )
  );
};

CarouselView.defaultProps = {
  className: '',
};

CarouselView.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default CarouselView;
