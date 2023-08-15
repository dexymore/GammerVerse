import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const PhotoCarousel = ({photos}) => {
  const responsiveOptions = {
    0: {
      items: 1, // Number of items at screen width 0px and above
    },
    768: {
      items: 2, // Number of items at screen width 768px and above
    },
    1200: {
      items: 2, // Number of items at screen width 1200px and above
    },
    
    
  };
  const owlOptions = {
    responsive: responsiveOptions,
    autoplay: true, // Enable auto-sliding
    autoplayTimeout: 1500, // Slide duration in milliseconds
    autoplayHoverPause: true, // Pause on hover
  };

  return (
    <div className='container-fluid mt-5 position-relative '>
    <div class="wave2">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" class="shape-fill"></path>
    </svg>
</div>
    <OwlCarousel className="owl-theme carousels-styles" responsive={responsiveOptions} {...owlOptions} >
    
      {/* Your carousel slides */}
      {photos.map((i)=><div className='item'>
<img src={i.image}></img>
</div>

        )}
    </OwlCarousel>
    </div>
  );
};

export default PhotoCarousel;




