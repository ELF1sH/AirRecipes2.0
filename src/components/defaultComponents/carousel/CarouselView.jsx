import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';

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
          cycleNavigation={false}
          className={className}
          navButtonsAlwaysVisible
          indicators
          indicatorContainerProps={{
            style: {
              zIndex: 1,
              position: 'relative',
              top: '-10px',
            },
          }}
        >
          {
            images.map((item, idx) => (
              <img key={idx} src={item} alt="" style={{ width: '100%' }} draggable={false} />
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
