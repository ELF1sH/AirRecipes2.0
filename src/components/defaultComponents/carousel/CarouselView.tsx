import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import './styles/carousel.scss';

interface CarouselViewProps {
  images: string[],
  className?: string,
}

const CarouselView: React.FC<CarouselViewProps> = ({
  images,
  className = '',
}) => {
  if (!images.length) return null;
  return (
    images.length === 1
      ? <img src={images[0]} alt="" style={{ width: '100%' }} className={className} />
      : (
        <Carousel
          showThumbs
          showStatus={false}
          thumbWidth={56}
          emulateTouch
        >
          {
            images.map((item: string, idx: number) => (
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
