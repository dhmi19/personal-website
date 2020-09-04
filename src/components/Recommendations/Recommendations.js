import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'; 
import classes from './Recommendations.module.css';
import Recommendation from './Recommendation/Recommendation';

const Recommendations = () => {

    const recommendations = [
        {
            name: "Kunal Gupta",
            description: "Great person to work with"
        },
        {
            name: "Omar Baranek",
            description: "Great person to work with"
        }
    ]

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: true,
        autoplaySpeed: 4000,
        autoPlay: true,
        centerMode: true,
    }

    return (
        <div className={classes.Recommendations}>
            <h1>Recommendations</h1>
            <div className={classes.RecommendationDiv}>
                <Slider {...settings} className={classes.Slider} >
                    {recommendations.map(recommendation => {
                        return(
                            <Recommendation name={recommendation.name} description={recommendation.description}/>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Recommendations;