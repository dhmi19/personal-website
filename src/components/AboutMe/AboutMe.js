import React from 'react';

import ProfilePicture from '../../images/ProfilePicture.jpg';
import classes from './AboutMe.module.css';

const AboutMe = () => {
    return (
        <section className={classes.About}>
        <div className={classes.LeftPadding}>
            <h1 className={classes.Title}>Nice to meet you!</h1>
            <div className={classes.Content}>
                <div className={classes.Text}>
                    <p>Hello! I'm Dhruv, a <span style={{color:"#98ff98"}}>mobile</span> and <span style={{color:"#98ff98"}}>web</span> app developer currently living in <span style={{color:"#98ff98"}}>Waterloo, Ontario</span>.</p>
                    <p>
                        I love to engage with people from various backgrounds and use technology to solve real world problems. 
                        My goal is to create innovative solutions to improve people's lives.
                    </p>
                    <p>
                        When I'm not coding, you'll catch me watching a <span style={{color:"#98ff98"}}>Manchester United</span> football game,
                        jamming to some <span style={{color:"#98ff98"}}>Kendrick Lamar</span>,
                        or trying not to burn down the <span style={{color:"#98ff98"}}>kitchen</span>. 
                    </p>
                </div>
                <div className={classes.Picture}>
                    <img src={ProfilePicture} alt="Dhruv Mittal"/>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutMe;