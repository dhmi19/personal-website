import React from 'react';
import classes from './Company.module.css';

const Company = (props) => {
    return (
        <div className={classes.Content}>
            <div className={classes.Left}>
                <img src={props.image}/>
                <p><b>{props.name}</b></p>
                <p>{props.dates}</p>
            </div>
            <div className={classes.Right}>
                <h2>{props.title}</h2>
                <h3>{props.location}</h3>
                {props.description}
            </div>
        </div>
    );
};

export default Company;