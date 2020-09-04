import React, { Component } from 'react';
import ApartmentApp from './ApartmentApp/ApartmentApp';
import SurveyTree from './SurveyTree/SurveyTree';
import classes from './Projects.module.css';
import UWScheduler from './UWScheduler/UWScheduler';
import MealOfTheDay from './MealOfTheDay/MealOfTheDay';

class Projects extends Component {
    render() {
        return (    
            <section className={classes.Projects}>
                <h1 className={classes.title}>Things I've built</h1>
                <MealOfTheDay/>
                <ApartmentApp/>
                <SurveyTree/>
                <UWScheduler/>
            </section>
        );
    }
}

export default Projects;