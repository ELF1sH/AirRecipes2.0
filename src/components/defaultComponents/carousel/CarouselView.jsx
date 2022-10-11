import React from 'react';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import colors from '../../../scssAbstracts/_variables.scss';
// import styles from './styles/Carousel.module.scss';
import './styles/carousel.scss';

const CarouselView = ({ images, className }) => {
  if (!images.length) return null;
  return (
    images.length === 1
      ? <img src={images[0]} alt="" style={{ width: '100%' }} className={className} />
      : (
        <Carousel
          showThumbs
          swipeable
          showStatus={false}
          thumbWidth={56}
        >
          {
            images.map((item, idx) => (
              <div
                key={idx}
                className="item-wrapper"
              >
                <img src={item} alt="" className="carousel-item" />
              </div>
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
