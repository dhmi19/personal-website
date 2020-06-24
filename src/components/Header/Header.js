import React from 'react';
import {Typography, Avatar, Grid} from '@material-ui/core';
import avatar from '../../images/avatar.png';
import Typed from 'react-typed';
import Particles from '../../components/UI/Particles/Particles';
import NavBar from '../NavBar/NavBar';
import classes from './Header.module.css';

const Header = () => {

    return(
        <div>
            <Particles/>
            <div className={classes.Header}>
                <div className={classes.title}>
                    <p className={classes.greetings}>Hi! My name is</p>
                    <p className={classes.name}>Dhruv Mittal<span style={{color:"#98ff98"}}>.</span></p>
                    <p style={{fontSize:"1.5em"}}>
                        I'm a passionate <span><Typed 
                            strings={["Android Developer", "Flutter Developer", "Web Developer"]} 
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                            style={{color:"#98ff98"}}
                        /></span>
                    </p>
                    <br />
                    <div className={classes.bio}>
                    <p>I am an international student studying computer science
                            at the <span style={{color:"#98ff98"}}>University of Waterloo.</span> You can scroll down to see some of the 
                            projects I have worked on. You can find my <span style={{color:"#98ff98"}}>resume</span> here.</p>  
                    </div>
                    <button className={classes.contactMe}>Get In Touch</button>  
                </div>
            </div> 
        </div>
        
    );
};

export default Header;