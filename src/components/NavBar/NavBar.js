import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../Navigation/NavigationItems';

const NavBar = (props) => {
    return (
       <header className={classes.Toolbar}>
           <div></div>
           <nav className={classes.DesktopOnly} style={{color:"white"}}>
            <NavigationItems isAuthenticated={props.isAuthenticated}/>
           </nav>
       </header>
    );
};

export default NavBar;