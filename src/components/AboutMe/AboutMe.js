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
                    <p>I'm Dhruv, an aspiring <span style={{color:"#98ff98"}}>developer</span> with an interest in <span style={{color:"#98ff98"}}>project management</span>. My goal is to use technology to create innovative solutions that improve people's lives.</p>
                    <p>
                        Having <span style={{color:"#98ff98"}}>lived in 5 countries</span>, I love to engage with people from various backgrounds and work together on team projects. 
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