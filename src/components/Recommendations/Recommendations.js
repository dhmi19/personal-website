import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'; 
import classes from './Recommendations.module.css';
import Recommendation from './Recommendation/Recommendation';
import KunalDP from '../../images/Kunal DP.jpeg';

const Recommendations = () => {

    const recommendations = [
        {
            name: "Kunal Gupta",
            position: "CEO, Polar",
            imageURL: KunalDP,
            description: "Dhruv is a smart, resourceful and talented professional. He brings a curiosity to every project, willing to dive in and learn along the way. I counted on him for a variety of responsibilities and have high hopes for his future endeavours.",
        },
        // {
        //     name: "Omar Gupta",
        //     position: "Teammate, Polar",
        //     imageURL: "https://media-exp1.licdn.com/dms/image/C4E03AQEqMdYwewicFg/profile-displayphoto-shrink_800_800/0?e=1604534400&v=beta&t=r7ejs1ewiuQeWa23pVDvVDA0-LSeQ1UyacgkCmpv_YY",
        //     description: "Dhruv is a smart, resourceful and talented professional. He brings a curiosity to every project, willing to dive in and learn along the way. I counted on him for a variety of responsibilities and have high hopes for his future endeavours.",
        // }
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
                            <Recommendation 
                                name={recommendation.name} 
                                position={recommendation.position}
                                imageURL={recommendation.imageURL}
                                description={recommendation.description}
                            />
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};

export default Recommendations;