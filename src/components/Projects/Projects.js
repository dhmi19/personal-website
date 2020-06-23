import React, { Component } from 'react';
import ApartmentApp from './ApartmentApp/ApartmentApp';
import SurveyTree from './SurveyTree/SurveyTree';
import classes from './Projects.module.css';

class Projects extends Component {
    render() {
        return (    
            <section className={classes.Projects}>
                {/*<h2 className={classes.title}>Past Projects</h2>*/}
                <ApartmentApp/>
                <SurveyTree/>
            </section>
        );
    }
}

export default Projects;