import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';
import Scroll from 'react-scroll';


const ScrollLink = Scroll.ScrollLink;

const NavigationItem = (props) => {
    
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}
                onClick={props.contactScroll}> {props.children} </NavLink>
        </li>
    );
};

export default NavigationItem;