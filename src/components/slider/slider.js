import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({imgOne, imgTwo, imgThree}) => {
    const settings = {

        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={imgOne} alt="img one" />
                </div>
                <div>
                    <img src={imgTwo} alt="img two"/>
                </div>
                <div>
                    <img src={imgThree} alt="img three"/>
                </div>
            </Slider>
        </div>
    );
}

export default SliderComponent;