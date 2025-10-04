import { React, useEffect, useRef , useState} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg01 from "../images/slider-01.jpg"
import sliderImg02 from "../images/slider-02.jpg"
import sliderImg03 from "../images/slider-03.jpg"


function ImageCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
    return (
        <div>
            <Slider {...settings}>

                <div>
                    <img src={sliderImg01} />
                </div>
                <div>
                    <img src={sliderImg02} />
                </div>
                <div>
                    <img src={sliderImg03} />
                </div>

            </Slider>
        </div>


    )
}

export default ImageCarousel

