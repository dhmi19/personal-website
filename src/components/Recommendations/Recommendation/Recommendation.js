import React from 'react';
import classes from './Recommendation.module.css';


const Recommendation = (props) => {
    return (
        <div className={classes.Recommendation}>
            <div className={classes.Left}>
                <img src={props.imageURL} alt={props.name}/>
                <h1>{props.name}</h1>
                <p>{props.position}</p>
            </div>
            <div className={classes.Right}>
                <p className={classes.SpeechGraphic}>‟</p>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Recommendation;