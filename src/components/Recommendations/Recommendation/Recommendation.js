import React from 'react';
import classes from './Recommendation.module.css';


const Recommendation = (props) => {
    return (
        <div className={classes.Recommendation}>
            <div className={classes.Left}>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEqMdYwewicFg/profile-displayphoto-shrink_800_800/0?e=1604534400&v=beta&t=r7ejs1ewiuQeWa23pVDvVDA0-LSeQ1UyacgkCmpv_YY"/>
                <h1>Kunal Gupta</h1>
                <p>CEO, Polar</p>
            </div>
            <div className={classes.Right}>
                <p className={classes.SpeechGraphic}>‟</p>
                <p>Dhruv is a smart, resourceful and talented professional. 
                    He brings a curiosity to every project, willing to dive in 
                    and learn along the way. I counted on him for a variety of 
                    responsibilities and have high hopes for his future endeavours.</p>
            </div>
        </div>
    );
};

export default Recommendation;