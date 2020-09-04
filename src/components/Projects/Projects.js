import React, { Component } from 'react';
import ApartmentApp from './ApartmentApp/ApartmentApp';
import SurveyTree from './SurveyTree/SurveyTree';
import classes from './Projects.module.css';
import UWScheduler from './UWScheduler/UWScheduler';
import MealOfTheDay from './MealOfTheDay/MealOfTheDay';
import Footer from '../Footer/Footer';

class Projects extends Component {
    render() {
        return (    
            <section className={classes.Projects}>
                <h1 className={classes.title}>Things I've built</h1>
                <MealOfTheDay/>
                <ApartmentApp/>
                <SurveyTree/>
                <UWScheduler/>
                <Footer/>
            </section>
        );
    }
}

export default Projects;