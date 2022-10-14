import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './styles/carousel.scss';

interface CarouselViewProps {
  imagesSrc: string[],
  className?: string,
}

const CarouselView: React.FC<CarouselViewProps> = ({
  imagesSrc,
  className = '',
}) => {
  if (!imagesSrc.length) return null;
  return (
    imagesSrc.length === 1
      ? <img src={imagesSrc[0]} alt="" style={{ width: '100%' }} className={className} />
      : (
        <Carousel
          showThumbs
          showStatus={false}
          thumbWidth={56}
          emulateTouch
        >
          {
            imagesSrc.map((item: string, idx: number) => (
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

export default CarouselView;
