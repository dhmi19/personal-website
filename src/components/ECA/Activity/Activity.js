import React from 'react';
import classes from './Activity.module.css';

const Activity = (props) => {
    return (
        <div className={classes.Activity}>
            <div className={classes.Image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <h1><span style={{color:"#98ff98"}}>{props.position}</span> | {props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Activity;