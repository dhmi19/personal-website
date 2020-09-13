import React from 'react';
import classes from './Activity.module.css';

const Activity = (props) => {
    return (
        <div className={classes.Activity}>
            <div className={classes.Image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Activity;