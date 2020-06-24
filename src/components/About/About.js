import React from 'react';
import classes from './About.module.css';
import Image from '../../images/avatar.png';

const About = () => {
    return (
        <section className={classes.About}>
            <h1 className={classes.Title}>About Me</h1>
            <h3 id={classes.Subtitle}>My crazy life in 2 minutes:</h3>
        </section>
    );
};

export default About;