import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const NavigationItems = () => {
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <NavigationItem link='/' exact={true}>Home</NavigationItem>
                <NavigationItem link='/about' exact={true}>About Me</NavigationItem>
                <NavigationItem link='/courses' exact={true}>Courses</NavigationItem>
                <NavigationItem link='/contact' exact={true}>Contact</NavigationItem>
                
            </ul>
        </div>
    );
};

export default NavigationItems;