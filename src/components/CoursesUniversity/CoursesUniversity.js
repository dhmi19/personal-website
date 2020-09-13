import React from 'react';
import classes from './CoursesUniversity.module.css';
import LaunchIcon from '@material-ui/icons/Launch';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CoursesUniversity = (props) => {

    function iconStyles() {
        return {
            LaunchIcon: {
              color: '#98ff98',
              opacity:"0.7"
            },
        }
    }

    const materialUIClasses = makeStyles(iconStyles)();

    return (
        <div className={classes.Course}>
            <div className={classes.Header}>
                <img src={props.image} alt={props.company}/>
                <IconButton className={materialUIClasses.LaunchIcon} target="_blank" href={props.link}><LaunchIcon /></IconButton>
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>Grade: {props.grade}</p>
        </div>
    );
};

export default CoursesUniversity;