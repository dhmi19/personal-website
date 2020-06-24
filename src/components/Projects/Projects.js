import React, { Component } from 'react';
import ApartmentApp from './ApartmentApp/ApartmentApp';
import SurveyTree from './SurveyTree/SurveyTree';
import classes from './Projects.module.css';
import UWScheduler from './UWScheduler/UWScheduler';

class Projects extends Component {
    render() {
        return (    
            <section className={classes.Projects}>
                <h1 className={classes.title}>Past Projects</h1>
                <ApartmentApp/>
                <SurveyTree/>
                <UWScheduler/>
            </section>
        );
    }
}

export default Projects;