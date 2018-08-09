import React from "react";
import "./Carousel.css"
import ReactDOM from "react-dom";
import Slider from "react-slick";

// const Carousel = () => (
// <div>

//   </div>
// );

class Carousel extends React.Component {
  render() {
    const settings = {
  //     dots: true,
  // infinite: true,
  // speed: 500,
  // fade: true,
  // cssEase: 'linear'
  dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
