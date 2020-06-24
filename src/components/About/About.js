import React from 'react';
import classes from './About.module.css';
import Timeline from './Timeline/Timeline';
import avatar from '../../images/avatar.png';
import ProfilePicture from '../../images/ProfilePicture.png';

const About = () => {
    return (
        <section className={classes.About}>
            <h1 className={classes.Title}>About Me</h1>
            <div className={classes.Content}>
                <div className={classes.Text}>
                    <p>Hello! I'm Dhruv, a <span style={{color:"lightskyblue"}}>mobile</span> and <span style={{color:"lightskyblue"}}>web</span> app developer currently living in <span style={{color:"lightskyblue"}}>Waterloo, Ontario</span>.</p>
                    <p>
                        I love to engage with people from various backgrounds and use technology to solve real world problems. 
                        My goal is to build beautiful software which improves people's lives.
                    </p>
                    <p>
                        When I'm not coding, you'll catch me watching a <span style={{color:"lightskyblue"}}>Manchester United</span> football game,
                         jamming to some <span style={{color:"lightskyblue"}}>Kendrick Lamar</span>,
                          or trying not to burn down the <span style={{color:"lightskyblue"}}>kitchen</span>. 
                    </p>
                </div>
                <div className={classes.Picture}>
                    <img src={ProfilePicture}/>
                </div>
            </div>
            <br/>
            <h1 className={classes.Title}>My Life: A Short Summary</h1>
            <Timeline/>
        </section>
    );
};

export default About;