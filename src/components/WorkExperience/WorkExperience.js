import React from 'react';

import classes from './WorkExperience.module.css';
import Company from './Company/Company';

import YZSImage from '../../images/YZIconLogo.png'
import ShopCluesImage from '../../images/ShopClues Logo.png';

const WorkExperience = () => {

    const YZSDescription = (
        <>
            <p>Year Zero Studios is a social impact lab, focused on investing in experiments that have the potential to shape our future.</p>
            <p><span style={{color:"#98ff98"}}>▶ </span>Designed and built the mindtech.news website, including research on 500 companies in the mental health and technology industry</p>
            <p><span style={{color:"#98ff98"}}>▶ </span>Developed a meditation and wellness mobile application prototype using Flutter</p>
            <p><span style={{color:"#98ff98"}}>▶ </span>Engaged with a variety of industry mentors and participated in frequent skill development workshops led by business leaders</p>
        </>
    );

    const ShopCluesDescription = (
        <>
            <p>ShopClues is an ecommerce startup in India valued at US$1.1 billion in 2015.</p>
            <p><span style={{color:"#98ff98"}}>▶ </span>Redesigned the login user experience after researching market competition to decrease login time</p>
            <p><span style={{color:"#98ff98"}}>▶ </span>Remodelled the checkout funnel for faster purchases and lower cart abandonment</p>
            <p><span style={{color:"#98ff98"}}>▶ </span>Researched and evaluated different product promotion stratergies</p>
        </>
    )

    return (
        <section className={classes.WorkExperience}>
            <h1>Work Experience</h1>
            <Company
                name="Year Zero Studios"
                image={YZSImage}
                dates="July - August 2020"
                title="Web Design and Development Fellow"
                location="Waterloo, Canada"
                description={YZSDescription}
            />
            <br/>
            <Company
                name="ShopClues.com"
                image={ShopCluesImage}
                dates="July- August 2016"
                title="UI/UX Internship"
                location="Delhi, India"
                description={ShopCluesDescription}
            />
        </section>
    );
};

export default WorkExperience;