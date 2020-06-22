import React, { Component } from 'react';
import ApartmentApp from './ApartmentApp/ApartmentApp';
import classes from './Projects.module.css';

class Projects extends Component {
    render() {
        return (    
            <section className={classes.Projects}>
                <ApartmentApp/>
            </section>
        );
    }
}

export default Projects;